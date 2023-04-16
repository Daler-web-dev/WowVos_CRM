import React from "react";
import Image from "next/image";
import { BsClipboard } from "react-icons/bs";
import { CardModel } from "@/utils/models";
import { useCardDragAndDrop } from "@/hooks/useCardDragAndDrop";

interface CardProps {
    index: number
    card: CardModel
}

const Card: React.FC<CardProps> = ({index, card}) => {

    const { ref, isDragging } = useCardDragAndDrop<HTMLDivElement>(
		{ card, index }
	);    

	return (
		<div ref={ref} className="w-full bg-[#F1F2F4] p-4 rounded-lg" style={{opacity: isDragging ? 0.4 : 1}} >
			<div className="flex flex-col gap-2 mb-5 ">
				<span className="text-base font-medium">{card.full_name}</span>
				<span className="text-[#909090] text-base">
					{card.age}, {card.location}, {card.coordinator}
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

export default Card;
