"use client";
import DefInput from "@/components/DefInput";
import Add_form from "@/components/tabs_content/Add_form";
import Process_form from "@/components/tabs_content/Process_form";
import React, { useContext, useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { useRouter } from "next/navigation";
import { createAny } from "@/context/createAny";

interface newCustomerProps {}

const newCustomer: React.FC<newCustomerProps> = () => {
	const [tabs, setTabs] = useState(["Добавить информацию"]);
	const [active_tab, setActive_tab] = useState(0);
	const router = useRouter();

	return (
		<div className="relative z-30">
			<div className="flex justify-between items-center w-full px-8 py-6 bg-white relative z-30 ">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-4">
						<button onClick={router.back}>
							<MdArrowBackIosNew size="30" color="#22B5DC" />
						</button>
						<h1 className="text-3xl font-medium">
							Добавить координатора
						</h1>
					</div>
					<span className="opacity-[.4]">
						Home / Level 2 / Координаторы / Новый координатор
					</span>
				</div>
			</div>
			<div className="bg-[#EEEFF1] w-full h-fit p-10">
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
					<div className="flex flex-col items-start justify-between w-full pt-10 gap-4">
						<form className="flex flex-col w-[50%] gap-5">
							<DefInput
								label="Имя координатора"
								placeholder="Введите..."
								type="text"
							/>
							<DefInput
								label="Номер телефона"
								placeholder="Введите..."
								type="text"
							/>
							<DefInput
								label="Почта"
								placeholder="Введите..."
								type="text"
							/>
							<DefInput
								label="Пароль"
								placeholder="Введите..."
								type="text"
							/>
						</form>
						<center className="flex items-center justify-center gap-5 w-full mt-10">
							<button className="py-4 px-[53px] bg-[#4992CC] text-white text-lg font-semibold">
								Сохранить
							</button>
							<button className="py-4 px-[53px] bg-[#EB5757] text-white text-lg font-semibold">
								Отменить
							</button>
						</center>
					</div>
				</div>
			</div>
		</div>
	);
};

export default newCustomer;
