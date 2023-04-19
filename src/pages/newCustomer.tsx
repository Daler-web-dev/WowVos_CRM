import DefInput from "@/components/DefInput";
import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

interface newCustomerProps {}

const newCustomer: React.FC<newCustomerProps> = () => {
	const [tabs, setTabs] = useState([
		"Общая информация",
		"История болезней",
		"Процесс",
		"История обращений",
	]);
	const [active_tab, setActive_tab] = useState(0);

	return (
		<div className="relative z-30">
			<div className="flex justify-between items-center w-full px-8 bg-white relative z-30 ">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-4">
						<button>
							<MdArrowBackIosNew size="30" color="#22B5DC" />
						</button>
						<h1 className="text-3xl font-medium">Новый клиент</h1>
					</div>
					<span className="opacity-[.4]">
						Home / Level 2 / Level 3 / Пациенты
					</span>
				</div>
			</div>
			<div className="bg-[#EEEFF1] w-full h-screen p-10">
				<div className="w-full h-full bg-white rounded-md py-6 px-8">
					<div className="flex gap-8">
						{tabs.map((item, index) => (
							<span
								key={index}
								className={`${
									index === active_tab ? "active-tab" : ""
								} block cursor-pointer text-base opacity-[.4]`}
                                onClick={() => setActive_tab(index)}
							>
								{item}
							</span>
						))}
					</div>
                    <div className="flex flex-col items-center justify-between w-full pt-10 gap-4" > 
                        <form className="flex w-full gap-4" >
                            <div className="flex flex-col w-full gap-2.5" >
								<DefInput label="ФИО" placeholder="Введите имя" />
								<div className="grid grid-cols-2 gap-2.5 w-full" >
									<DefInput label="Дата рождения" placeholder="Выберите дату рождения" type="date" />
									<DefInput label="Город проживания" placeholder="Выберите город проживания" />
									<DefInput label="Телефон пациента" placeholder="Введите номер телефона" type="tel" />
									<DefInput label="Email" placeholder="Введите электронную почту" type="email" />
									<DefInput label="ФИО" placeholder="Введите номер телефона" type="tel" />
								</div>
                            </div>
							<div className="flex flex-col w-full gap-2.5" >
								<DefInput label="ФИО" placeholder="Введите имя" />
								<div className="flex flex-col gap-1" >
									<span>Диагноз</span>
									<textarea placeholder="Напишите диагноз" className="def-input w-full h-[136px]" ></textarea>
								</div>
								<div className="flex gap-2.5 w-full" >
									<DefInput label="Координатор" placeholder="Выберите координатора" />
									<DefInput label="Координатор в клинике" placeholder="Выберите координатора" />
								</div>
								<DefInput label="Дата обращения" placeholder="Выберите координатора" type="date" />
							</div>
                        </form>
						<center className="flex gap-5" >
							<button className="py-4 px-[53px] bg-[#4992CC] text-white text-lg font-semibold" >Сохранить</button>
							<button className="py-4 px-[53px] bg-[#EB5757] text-white text-lg font-semibold" >Отменить</button>
						</center>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default newCustomer;
