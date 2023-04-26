import Link from "next/link";
import React from "react";
import { FiHome, FiFilter } from "react-icons/fi";
import {AiOutlineMenu} from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";

interface AsideProps {
    menuOpen: boolean,
    setMenuOpen: (arg:boolean) => void
}

const Aside: React.FC<AsideProps> = ({menuOpen, setMenuOpen}) => {
	const {pathname} = useRouter()

	return (
		<aside
			className="h-[100vh] bg-[#232323] relative z-100"
			style={{ width: menuOpen ? "30%" : "5%", transition: ".4s ease" }}
		>
			<div className="flex justify-between items-center py-6 px-7 bg-[#1F1E1E]">
				{menuOpen && (
					<Image
						src="/icons/big_logo.svg"
						alt=""
						width="100"
						height="100"
					/>
				)}
				<button onClick={() => setMenuOpen(!menuOpen)}>
					<AiOutlineMenu size="24" color="white" />
				</button>
			</div>
			<div className="flex flex-col gap-8 py-6 px-7">
				<div>
					{!menuOpen && <FiHome size={24} color="white" />}
					<h3 className="flex gap-3 items-center text-white text-xl font-medium">
						{menuOpen && <span>Меню</span>}
					</h3>
					{menuOpen && (
						<>
							<nav className="flex flex-col gap-4 px-9 py-6">
								<Link 
									href="/"  
									className={`text-base text-white ${pathname === "/" ? "opacity-100" : "opacity-70"}`} >
									Пациенты
								</Link>
								<Link
									href="/clinics"
									className={`text-base text-white ${pathname === "/clinics" ? "opacity-100" : "opacity-70"}`}
								>
									Клиники
								</Link>
								<Link
									href="/sources"
									className={`text-base text-white ${pathname === "/sources" ? "opacity-100" : "opacity-70"}`}
								>
									Источники
								</Link>
								<Link
									href="/coordinators"
									className={`text-base text-white ${pathname === "/coordinators" ? "opacity-100" : "opacity-70"}`}
								>
									Координаторы
								</Link>
							</nav>
							<hr className="opacity-[.3]" />
						</>
					)}
				</div>
				{menuOpen && (
					<div>
						<h3 className="flex gap-3 items-center text-white text-xl font-medium">
							<FiFilter size={24} color="white" />
							Фильтр
						</h3>
						<div className="custom-scroll flex flex-col gap-4 mt-8 h-[400px] overflow-y-scroll">
							<span className="text-base text-white font-medium">
								Статус
							</span>
							{[1, 2, 3, 4, 5].map((item) => (
								<div
									key={item}
									className="flex items-center gap-2.5"
								>
									<input
										type="checkbox"
										className="bg-[#484848] rounded-sm w-4 h-4"
									/>
									<span className="text-white">Новое</span>
								</div>
							))}
							<span className="text-base text-white font-medium mt-6">
								Координатор
							</span>
							{[1, 2, 3, 4, 5].map((item) => (
								<div
									key={item}
									className="flex items-center gap-2.5"
								>
									<input
										type="checkbox"
										className="bg-[#484848] rounded-sm w-4 h-4"
									/>
									<span className="text-white">Новое</span>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</aside>
	);
};

export default Aside;
