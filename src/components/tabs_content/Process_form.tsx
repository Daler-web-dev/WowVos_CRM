import React from "react";

interface Process_formProps {}

const Process_form: React.FC<Process_formProps> = () => {
	return (
		<form className="w-full gap-4 h-[60vh] overflow-y-scroll">
            <div className="flex flex-col w-[50%]" >
                <div className="flex flex-col gap-1">
                    <span>Процесс работы до поездки</span>
                    <textarea
                        placeholder="Введите текст..."
                        className="def-input w-full h-[136px] resize-none"
                    ></textarea>
                </div>
                <div className="flex flex-col gap-1">
                    <span>Процесс работы во время поездки</span>
                    <textarea
                        placeholder="Введите текст..."
                        className="def-input w-full h-[136px] resize-none"
                    ></textarea>
                </div>
                <div className="flex flex-col gap-1">
                    <span>Процесс работы после поездки</span>
                    <textarea
                        placeholder="Введите текст..."
                        className="def-input w-full h-[136px] resize-none"
                    ></textarea>
                </div>
            </div>
		</form>
	);
};

export default Process_form;
