import { useLocalStorage } from 'usehooks-ts';
import {v4 as uuidv4} from 'uuid'
import { ColoumnType } from '../utils/enums';
import { CardModel } from '../utils/models';


function useTaskCollection() {
    return useLocalStorage<{
        [key in ColoumnType]: CardModel[]
    }>('appeal', {
        "Новое обращение": [
            {
                id: uuidv4(),
                column: ColoumnType.NEW_APPEAL,
                full_name: "Alex Adams",
                age: 22,
                location: "USA",
                coordinator: "Elizabet Olsen",
            },
        ],
        "Запрос отправлен": [
            {
                id: uuidv4(),
                column: ColoumnType.REQ_SENT,
                full_name: "Daler Sharifkulov",
                age: 22,
                location: "Samarkand",
                coordinator: "Elizabet Olsen",
            },
        ],
        "В процессе": [
            {
                id: uuidv4(),
                column: ColoumnType.IN_PROCESS,
                full_name: "Daler Sharifkulov",
                age: 22,
                location: "Samarkand",
                coordinator: "Elizabet Olsen",
            },
        ],
        "Забронировал": [
            {
                id: uuidv4(),
                column: ColoumnType.BOOKED,
                full_name: "Daler Sharifkulov",
                age: 22,
                location: "Samarkand",
                coordinator: "Elizabet Olsen",
            },
        ],
        "Выкупил билеты": [
            {
                id: uuidv4(),
                column: ColoumnType.TICKETS,
                full_name: "Daler Sharifkulov",
                age: 22,
                location: "Samarkand",
                coordinator: "Elizabet Olsen",
            },
        ],
        "Прилетел": [
            {
                id: uuidv4(),
                column: ColoumnType.ARRIVED,
                full_name: "Daler Sharifkulov",
                age: 22,
                location: "Samarkand",
                coordinator: "Elizabet Olsen",
            },
        ]
    })
};

export default useTaskCollection;