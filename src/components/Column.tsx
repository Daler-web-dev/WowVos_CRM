import { useColumnDrop } from "@/hooks/useColmnDrop";
import useColumnTask from "@/hooks/useColumnTask";
import { ColoumnType } from "@/utils/enums";
import React from "react";
import Card from "./Card";

interface ColumnProps {
	column: ColoumnType;
}

const Column: React.FC<ColumnProps> = ({ column }) => {
	const { tasks, dropTaskFrom } = useColumnTask(column);

	const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

	const ColumnTasks = tasks.map((item, index) => <Card key={item.id} index={index} card={item} />);

	return (
		<div className="anti-scroll flex flex-col gap-[10px] min-w-[250px] h-full bg-white rounded-md px-4 py-3" style={{border: isOver ? "2px dashed gray" : ""}} >
			<div className="flex items-center w-full justify-between mb-[10px]">
				<h2 className="text-sm font-semibold ">{column}</h2>
				<span className="w-[23px] h-[23px] bg-[#22B5DC] p-4 rounded-full flex justify-center items-center text-white font-medium">
					{tasks.length}
				</span>
			</div>
			<div
				ref={dropRef}
				className="flex flex-col h-full overflow-y-scroll gap-[10px]"
				style={{ opacity: isOver ? 0.85 : 1 }}
			>
				{ColumnTasks}
			</div>
		</div>
	);
};

export default Column;
