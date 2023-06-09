import { Inter } from "next/font/google";
import { BiMenuAltRight, BiMenu } from "react-icons/bi";
import Pagination from "@/components/Pagination";
import { useContext, useEffect, useState } from "react";
import Table from "@/components/Table";
import DndTable from "@/components/DndTable";
import { createAny } from "@/context/createAny";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [isTable, setTable] = useState(true);

	const {changeCreateTitleAndPath} = useContext(createAny);

	useEffect(() => {
		changeCreateTitleAndPath("Создать пациента", "/newCustomer")
	}, []);

	return (
		<section className="h-full">
			<div className="flex justify-between items-center w-full px-8 bg-white relative z-30 ">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-10">
						<h1 className="text-3xl font-medium">Пациенты</h1>
						<div className="flex gap-3">
							<button
								className="cursor-pointer rotate-[270deg]"
								onClick={() => setTable(false)}
							>
								<BiMenuAltRight
									size="30"
									color={!isTable ? "#22B5DC" : ""}
								/>
							</button>
							<button
								className="cursor-pointer rotate-[0deg]"
								onClick={() => setTable(true)}
							>
								<BiMenu
									size="30"
									color={isTable ? "#22B5DC" : ""}
								/>
							</button>
						</div>
					</div>
					<span className="opacity-[.4]">
						Home / Level 2 / Level 3 / Пациенты
					</span>
				</div>
				<div className="flex items-center gap-7">
					<span className="opacity-[.4]">1-6 из 22</span>
					<Pagination />
				</div>
			</div>
			{isTable ? (
				<Table
					headings={[
						"Пациент",
						"Дата обращения",
						"Город проживания",
						"Диагноз",
						"Вылет и прилет",
						"Координатор",
						"Источник",
						"Клиника",
					]}
				/>
			) : (
				<DndTable />
			)}
		</section>
	);
}
