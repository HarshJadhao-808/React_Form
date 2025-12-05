import React from "react";
import { Link } from "react-router-dom";
import home from "/src/assets/home.svg";
import {jwtDecode} from 'jwt-decode'

const Navbar = () => {

  const Token = JSON.parse(localStorage.getItem("Token"));
  let userName
 if(Token){
	const decoded = jwtDecode(Token)
	// console.log(decoded)
	userName = decoded.username;
 }
 
	return (
		<nav className="fixed z-3 top-1 left-2 sm:top-2 sm:left-8  flex items-center justify-between w-full max-w-[95%] mx-auto border-2 border-[#386BAC] rounded-md px-3 py-2 sm:px-5 sm:py-3 mt-3 sm:mt-5">
			{/* Home */}
			<Link to="/form/personal_info" className="flex items-center">
				<img
					className="w-8 sm:w-12 md:w-14 lg:w-16 transition-all"
					src={home}
					alt="home"
				/>
			</Link>

			{/* Right Side */}

			{Token ? (
				<>
						<h1 className="mr-3 sm:mr-5 font-bold cursor-pointer sm:text-[25px]">{userName}</h1>
			
				</>
			) : (
				<>
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
				</>
			)}
		</nav>
	);
};

export default Navbar;
