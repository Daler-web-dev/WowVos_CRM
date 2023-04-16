import { useDrop } from "react-dnd";
import { ColoumnType, ItemType } from "../utils/enums";
import { DragItem, CardModel } from "../utils/models";

export function useColumnDrop(
	column: ColoumnType,
	handleDrop: (fromColumn: ColoumnType, cardId: CardModel["id"]) => void
) {
	const [{ isOver }, dropRef] = useDrop<DragItem, void, { isOver: boolean }>(
		{
			accept: ItemType.CARD,
			drop: (dragItem) => {
				if (!dragItem || dragItem.from === column) {
					return;
				}

				console.log({id: dragItem.id});

				handleDrop(dragItem.from, dragItem.id);
			},
            collect: (monitor) => ({
                isOver: monitor.isOver()
            }),
		}
	);

    return {
        isOver, 
        dropRef
    }
}
