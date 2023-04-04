import React, { useState } from "react";

interface DropdownProps {
	children: JSX.Element;
	arr: Array<any>
}

const Dropdown: React.FC<DropdownProps> = ({ children, arr }) => {
	const [isOpen, setIsOpen] = useState(false);
	
	return (
		<div className="relative flex flex-col gap-2" >
			<div onFocus={() => setIsOpen(!isOpen)} >{children}</div>
			{
				isOpen && (
					<ul className="w-44 bg-gray-700 py-2 rounded-md absolute top-[50px] left-[-100px] whitespace-nowrap" >
						{
							arr.map((item:any) => (
								<li className="px-4 py-2 text-white hover:bg-gray-600 cursor-pointer " >{item}</li>
							))
						}
					</ul>
				)
			}
		</div>
	);
};

export default Dropdown;
