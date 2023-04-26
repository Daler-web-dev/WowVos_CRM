import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
	AiOutlinePlusCircle,
	AiOutlineSearch,
	AiOutlineSetting,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import Aside from "@/components/layout_components/Aside";
import { createAny } from "@/context/createAny";

interface LayoutProps {
	children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(true);
	const [createAnyState, setCreateAnyState] = useState({title: 'Создать пациента', path: "/newCustomer"})

	const changeCreateTitleAndPath = (title:string, path:string) => {
		setCreateAnyState({title, path})
	}

	return (
		<>
		<createAny.Provider value={{createAnyState, changeCreateTitleAndPath}} >
			<div className="flex flex-row-reverse w-full h-vh items-start fixed top-0 left-0">
				<header className="flex justify-between items-center py-6 px-[44px] w-[100%] bg-white whitespace-nowrap ">
					{!menuOpen && (
						<Image
							src="/icons/logo.svg"
							alt=""
							width="100"
							height="100"
						/>
					)}
					<nav className="flex items-center gap-14">
						<Link
							href={createAnyState.path}
							className="flex items-center gap-2 opacity-[.5]"
						>
							<AiOutlinePlusCircle size={24} />
							<span className="text-base font-medium">
								{createAnyState.title}
							</span>
						</Link>
						<Link
							href="#"
							className="flex items-center gap-2 opacity-[.5]"
						>
							<AiOutlineSetting size={24} />
							<span className="text-base font-medium">
								Настройки
							</span>
						</Link>
					</nav>
					<label htmlFor="simple-search" className="sr-only">
						Search
					</label>
					<form className="w-[25%] flex items-center gap-2 px-5 border border-black rounded-xl opacity-[.5]">
						<AiOutlineSearch size={24} className="min-w-[20px]" />
						<input
							type="text"
							className="border-none placeholder:text-black"
							placeholder="Поиск..."
						/>
					</form>
					<nav className="flex items-center gap-4">
						<Link href="#" className="opacity-[.5]">
							<IoMdNotificationsOutline size={24} />
						</Link>
						<div className="lang-div px-3 h-full">
							<Dropdown arr={["ru", "uz", "ko"]}>
								<button className="flex items-center gap-2">
									<span className="opacity-[.5]">RU</span>
									<BiChevronDown size={20} color="#909090" />
								</button>
							</Dropdown>
						</div>
						<Dropdown
							arr={[
								"Dashboard",
								"Settings",
								"Earnings",
								"Sign out",
							]}
						>
							<button className="flex items-center gap-2">
								<Image
									src="/icons/logo_only.svg"
									alt="logo"
									width="100"
									height="100"
									className="rounded-full w-10 h-10 bg-[#F4F4F4] p-2"
								/>
								<BiChevronDown size={20} color="#909090" />
							</button>
						</Dropdown>
					</nav>
				</header>
				<Aside setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
			</div>
			<main style={{ paddingLeft: menuOpen ? "23%" : "5%", transition: ".4s ease" }} className="pl-[ pt-[100px]"  >{children}</main>
			<footer></footer>
		</createAny.Provider>
		</>
	);
};

export default Layout;
