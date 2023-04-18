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
                    <div className="flex justify-between items-start w-full" >
                        <form>
                            <div className="flex flex-col" >
                            </div>
                        </form>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default newCustomer;
