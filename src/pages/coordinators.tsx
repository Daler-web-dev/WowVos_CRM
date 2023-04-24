import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { createAny } from "@/context/createAny";
import { useContext, useEffect } from "react";

export default function Coordinators() {

	const {changeCreateTitleAndPath} = useContext(createAny);

	useEffect(() => {
		changeCreateTitleAndPath("Добавить координатора", "/newCoordinator")
	}, []);


	return (
		<section className="h-full">
			<div className="flex justify-between items-center w-full px-8 bg-white">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-10">
						<h1 className="text-3xl font-medium">Координаторы</h1>
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
			<Table headings={["Имя", "Номер"]} />
		</section>
	);
}
