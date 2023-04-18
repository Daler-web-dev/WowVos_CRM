import React from "react";

interface DefInputProps {}

const DefInput: React.FC<DefInputProps> = () => {
	return (
		<label htmlFor="" className="flex flex-col gap-3">
			<span>ФИО</span>
			<input
				type="text"
				placeholder="Введите имя"
				className="def-input"
			/>
		</label>
	);
};

export default DefInput;
