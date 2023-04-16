import { ColoumnType } from "@/utils/enums";
import Image from "next/image";
import React from "react";
import Column from "./Column";

interface DndTableProps {}

const DndTable: React.FC<DndTableProps> = () => {
	return (
		<section className="w-full bg-[#EEEFF1] h-screen px-6 py-3 relative z-40">
			<div className="flex items-start gap-2 w-full h-full">
                <Column column={ColoumnType.NEW_APPEAL} />
                <Column column={ColoumnType.REQ_SENT} />
                <Column column={ColoumnType.IN_PROCESS} />
                <Column column={ColoumnType.BOOKED} />
                <Column column={ColoumnType.TICKETS} />
                <Column column={ColoumnType.ARRIVED} />
			</div>
		</section>
	);
};

export default DndTable;

