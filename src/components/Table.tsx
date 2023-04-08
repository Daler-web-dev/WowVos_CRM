import Image from "next/image";
import React from "react";

interface TableProps {}

const Table: React.FC<TableProps> = () => {
	return (
		<div className="overflow-x-auto h-[77vh] bg-[#EEEFF1] mt-10 relative z-40">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 z-40">
				<thead className="text-xs text-gray-700">
					<tr>
						<th scope="col" className="px-6 py-3">
							Пациент
						</th>
						<th scope="col" className="px-6 py-3">
							Дата обращения
						</th>
						<th scope="col" className="px-6 py-3">
							Город проживания
						</th>
						<th scope="col" className="px-6 py-3">
							Диагноз
						</th>
						<th scope="col" className="px-6 py-3">
							Вылет и прилет
						</th>
						<th scope="col" className="px-6 py-3">
							Координатор
						</th>
						<th scope="col" className="px-6 py-3">
							Источник
						</th>
						<th scope="col" className="px-6 py-3">
							Клиника
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b border-b-[#C4C4C4] dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
						<th
							scope="row"
							className="px-6 py-4 flex items-center gap-5 text-gray-900 whitespace-nowrap dark:text-white"
						>
                            <Image src="/icons/checklist.svg" alt="checlist" width="24" height="24" />
                            <div className="flex flex-col" >
                                <span className="text-base font-medium" >Борисова Ольга</span>
                                <span className="text-[#909090] text-base" >36 лет</span>
                            </div>
						</th>
						<td className="px-6 py-4">Silver</td>
						<td className="px-6 py-4">Laptop</td>
						<td className="px-6 py-4">$2999</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Table;
