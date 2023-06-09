import { useRef } from "react";
import { useDrag } from "react-dnd";
import { ItemType } from "../utils/enums";
import { DragItem, CardModel } from "../utils/models";

export function useCardDragAndDrop<T extends HTMLElement>({
	card,
	index,
}: {
	card: CardModel;
	index: number;
}) {
	const ref = useRef<T>(null);

	const [{ isDragging }, drag] = useDrag<
		DragItem,
		void,
		{ isDragging: boolean }
	>({
		type: ItemType.CARD,
		item: { from: card.column, id: card.id, index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	drag(ref);

	return {
		ref,
		isDragging,
	};
}
