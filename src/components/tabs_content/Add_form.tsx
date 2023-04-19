import React from "react";
import DefInput from "../DefInput";

interface Add_formProps {}

const Add_form: React.FC<Add_formProps> = () => {
	return (
		<form className="flex w-full gap-4">
			<div className="flex flex-col w-full gap-2.5">
				<DefInput label="ФИО" placeholder="Введите имя" />
				<div className="grid grid-cols-2 gap-2.5 w-full">
					<DefInput
						label="Дата рождения"
						placeholder="Выберите дату рождения"
						type="date"
					/>
					<DefInput
						label="Город проживания"
						placeholder="Выберите город проживания"
					/>
					<DefInput
						label="Телефон пациента"
						placeholder="Введите номер телефона"
						type="tel"
					/>
					<DefInput
						label="Email"
						placeholder="Введите электронную почту"
						type="email"
					/>
					<DefInput
						label="ФИО"
						placeholder="Введите номер телефона"
						type="tel"
					/>
				</div>
			</div>
			<div className="flex flex-col w-full gap-2.5">
				<DefInput label="ФИО" placeholder="Введите имя" />
				<div className="flex flex-col gap-1">
					<span>Диагноз</span>
					<textarea
						placeholder="Напишите диагноз"
						className="def-input w-full h-[136px] resize-none"
					></textarea>
				</div>
				<div className="flex gap-2.5 w-full">
					<DefInput
						label="Координатор"
						placeholder="Выберите координатора"
					/>
					<DefInput
						label="Координатор в клинике"
						placeholder="Выберите координатора"
					/>
				</div>
				<DefInput
					label="Дата обращения"
					placeholder="Выберите координатора"
					type="date"
				/>
			</div>
		</form>
	);
};

export default Add_form;
