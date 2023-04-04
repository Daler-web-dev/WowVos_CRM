import Image from "next/image";
import React, { useState } from "react";

interface DropdownProps {
	children: JSX.Element;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div>{children}</div>
		</>
	);
};

export default Dropdown;
