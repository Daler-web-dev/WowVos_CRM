import Dropdown from "@/components/Dropdown";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
	AiOutlinePlusCircle,
	AiOutlineSearch,
	AiOutlineSetting,
    AiOutlineMenu
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { FiHome, FiFilter } from "react-icons/fi";


interface LayoutProps {
	children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(true);

	return (
		<>
			<div className="flex flex-row-reverse w-full h-vh items-start fixed top-0 left-0"  >
				<header className="flex justify-between items-center py-6 px-[44px] w-[100%]">
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
							href="#"
							className="flex items-center gap-2 opacity-[.5]"
						>
							<AiOutlinePlusCircle size={24} />
							<span className="text-base font-medium">
								Создать пациента
							</span>
						</Link>
						<Link
							href="#"
							className="flex items-center gap-2 opacity-[.5]"
						>
							<AiOutlineSetting size={24} />
							<span className="text-base font-medium">
								Создать пациента
							</span>
						</Link>
					</nav>
					<label htmlFor="simple-search" className="sr-only">
						Search
					</label>
					<form className="flex items-center gap-2 py-2 px-5 border border-black rounded-xl opacity-[.5]">
						<AiOutlineSearch size={24} />
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
						<Dropdown>
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
				{menuOpen && (
					<aside className="w-[30%] h-[100vh] bg-[#232323]">
						<div className="flex justify-between items-center py-6 px-7 bg-[#1F1E1E]" >
                            <Image src="/icons/big_logo.svg" alt="" width="100" height="100" />
                            <button>
                                <AiOutlineMenu size="24" color="white" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-8 py-6 px-7" >
                            <div>
                                <h3 className="flex gap-3 items-center text-white text-xl font-medium" >
                                    <FiHome size={24} color="white" />
                                    Меню
                                </h3>
                                <nav className="flex flex-col gap-4 px-9 py-6" >
                                    <Link href="#" className="text-base text-white" >Пациенты</Link>
                                    <Link href="#" className="text-base text-white" >Клиники</Link>
                                    <Link href="#" className="text-base text-white" >Источники</Link>
                                    <Link href="#" className="text-base text-white" >Координаторы</Link>
                                </nav>
                                <hr className="opacity-[.3]" />
                            </div>
                            <div>
                                <h3 className="flex gap-3 items-center text-white text-xl font-medium" >
                                    <FiFilter size={24} color="white" />
                                    Фильтр
                                </h3>
                            </div>

                        </div>

					</aside>
				)}
			</div>
			<main className="pl-[25%] pt-[100px]" >{children}</main>
			<footer></footer>
		</>
	);
};

export default Layout;
