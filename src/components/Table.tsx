import Image from "next/image";
import React from "react";

interface TableProps {}

const Table: React.FC<TableProps> = () => {
	return (
		<div className="overflow-x-auto h-[77vh] bg-[#EEEFF1] mt-10 relative z-40 px-4">
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
					{[1,2,3,4,5].map(item => <Tr key={item}/>)}
				</tbody>
			</table>
		</div>
	);
};

const Tr = () => {
	return (
		<tr className="border-b border-b-[#C4C4C4] dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
			<th
				scope="row"
				className="px-6 py-4 flex items-center gap-5 text-gray-900 whitespace-nowrap dark:text-white"
			>
				<Image
					src="/icons/checklist.svg"
					alt="checlist"
					width="24"
					height="24"
				/>
				<div className="flex flex-col">
					<span className="text-base font-medium">
						Борисова Ольга
					</span>
					<span className="text-[#909090] text-base">36 лет</span>
				</div>
			</th>
			<td className="px-6 py-4">
				<span className="whitespace-nowrap text-base text-black font-medium block">
					10 января,
				</span>
				<span className="text-[#909090] text-base">2023</span>
			</td>
			<td className="px-6 py-4">
				<span className="text-base text-black font-medium block">
					Узбекистан
				</span>
				<span className="text-[#909090] text-base">Ташкент</span>
			</td>
			<td className="px-6 py-4">
				<p className="line-clamp-2 text-base text-black font-medium">
					Птоз сахарные диабет, подагра, жировой геп
				</p>
			</td>
			<td className="px-6 py-4">
				<span className="whitespace-nowrap text-base text-black font-medium block">
					В: 30 января, 2023 | 06:35
				</span>
				<span className="whitespace-nowrap text-base text-black font-medium block">
					П: 31 января, 2023 | 14:35
				</span>
			</td>
			<td className="px-6 py-4">
				<span className="whitespace-nowrap text-base text-black font-medium block">
					Хан Анна
				</span>
			</td>
			<td className="px-6 py-4">
				<span className="text-base text-black font-medium block">
					WOWVOS_Uzbekistan
				</span>
				<span className="text-[#909090] text-base">Сергей</span>
			</td>
			<td className="px-6 py-4">
				<span className="text-base text-black font-medium block">
					WonjinPS
				</span>
				<span className="text-[#909090] text-base">Seoul</span>
			</td>
		</tr>
	);
};

export default Table;
