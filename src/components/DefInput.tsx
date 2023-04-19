import React from "react";

interface DefInputProps {
	label?: string;
	placeholder?: string;
	type?: string;
	error?: string;
}

const DefInput: React.FC<DefInputProps> = ({
	type = "text",
	placeholder = "",
	error,
	label = "",
}) => {
	return (
		<label htmlFor="" className="flex flex-col gap-1 w-full">
			<span>{label}</span>
			<input
				type={type}
				placeholder={placeholder}
				className="def-input w-full placeholder:text-[#333333] placeholder:text-base font-normal" 
			/>
		</label>
	);
};

export default DefInput;
