import Pagination from "@/components/Pagination";
import Table from "@/components/Table";

export default function Clinics() {
	return (
		<section className="h-full">
			<div className="flex justify-between items-center w-full px-8 bg-white">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-10">
						<h1 className="text-3xl font-medium">Клиника</h1>
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
			<Table />
		</section>
	);
}