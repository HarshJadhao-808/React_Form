import React from "react";
import { Link } from "react-router-dom";
import home from "/src/assets/home.svg";

const Navbar = () => {
	return (
		<nav className="fixed z-3 top-1 left-2 sm:top-2 sm:left-8  flex items-center justify-between w-full max-w-[95%] mx-auto border-2 border-[#386BAC] rounded-md px-3 py-2 sm:px-5 sm:py-3 mt-3 sm:mt-5"
		>
			{/* Home */}
			<Link to="/form/personal_info" className="flex items-center">
				<img
					className="w-8 sm:w-12 md:w-14 lg:w-16 transition-all"
					src={home}
					alt="home"
				/>
			</Link>

			{/* Right Side */}
			<div className="flex items-center gap-3 sm:gap-6">
				<Link
					to="/login"
					className="text-lg sm:text-xl md:text-2xl hover:opacity-80 transition"
				>
					Login
				</Link>

				<Link
					to="/signup"
					className="text-lg sm:text-xl md:text-2xl hover:opacity-80 transition"
				>
					Signup
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
