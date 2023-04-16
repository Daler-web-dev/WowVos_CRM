import { useCallback } from "react";
import { ColoumnType } from '../utils/enums';
import { CardModel } from '../utils/models';
import useTaskCollection from "./useTaskCollection";

const MAX_TASK_PER_COLUMN = 100

function useColumnTask(column: ColoumnType) {
    const [tasks, setTasks] = useTaskCollection()

    const dropTaskFrom = useCallback(
        (from: ColoumnType, id: CardModel['id']) => {
            setTasks((allTasks) => {
                
                const fromColumnTasks = allTasks[from]
                const toColumnTask = allTasks[column]
                const movingTask = fromColumnTasks.find((task) => task.id === id)
                console.log({idSECOND: id});
                

                console.log(`Moving task ${movingTask?.id} from ${from} to ${column}`);
                
                if(!movingTask) {
                    return allTasks
                }
                

                return {
                    ...allTasks,
                    [from]: fromColumnTasks.filter((task) => task.id !== id),
                    [column]: [{...movingTask, column}, ...toColumnTask]
                }
            })
        }, 
        [column,setTasks]
    )

    return {
        tasks: tasks[column],
        dropTaskFrom
    }
};

export default useColumnTask;