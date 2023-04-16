import Image from "next/image";
import React from "react";
import { BsClipboard } from "react-icons/bs";

interface DndTableProps {}

const DndTable: React.FC<DndTableProps> = () => {
	return (
		<section className="w-full bg-[#EEEFF1] h-screen px-6 py-3 relative z-40">
			<div className="flex items-start gap-2 w-full h-full">
				<div className="flex flex-col gap-[10px] w-[250px] h-full bg-white rounded-md px-4 py-3">
					<div className="flex items-center w-full justify-between mb-[10px]">
						<h2 className="text-sm font-semibold ">
							Новое обращение
						</h2>
						<span className="w-[23px] h-[23px] bg-[#22B5DC] p-4 rounded-full flex justify-center items-center text-white font-medium">
							2
						</span>
					</div>
                    <CustomerCard/>
				</div>
			</div>
		</section>
	);
};

export default DndTable;

const CustomerCard = () => {
	return (
		<div className="w-full bg-[#F1F2F4] p-4 rounded-lg">
			<div className="flex flex-col gap-2 mb-5 ">
				<span className="text-base font-medium">Борисова Ольга</span>
				<span className="text-[#909090] text-base">
					36 лет, Ташкент, Хан Анна,{" "}
				</span>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex justify-between w-full gap-2 items-start">
					<div className="flex items-center flex-col gap-1.5">
						<BsClipboard size={22} color="#0FC357" />
						<div className="min-h-[60px] w-[1px] bg-[#BFBFBF]"></div>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<div className="flex justify-between items-center w-full">
							<span className="text-[#909090] text-base">
								Диагноз
							</span>
							<span className="text-[#909090] text-base">
								10.01
							</span>
						</div>
						<span className="text-base font-medium">
							Обратился с диагнозом “Птоз”
						</span>
					</div>
				</div>
				<div className="flex justify-between w-full gap-2 items-start">
					<div className="flex items-center flex-col gap-1.5">
						<Image
							src="/icons/airplane.svg"
							alt="airplane"
							width="30"
							height="30"
						/>
						<div className="min-h-[60px] w-[1px] bg-[#BFBFBF] hidden"></div>
					</div>
					<div className="flex flex-col gap-1 w-full">
						<div className="flex justify-between items-center w-full">
							<span className="text-[#909090] text-base">
								Диагноз
							</span>
							<span className="text-[#909090] text-base">
								10.01
							</span>
						</div>
						<span className="text-base font-medium">
							Обратился с диагнозом “Птоз”
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
