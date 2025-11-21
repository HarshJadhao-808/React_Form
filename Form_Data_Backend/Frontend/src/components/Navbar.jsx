import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
		<nav className="flex justify-between px-2 mb-2 mx-4 my-2 sm:my-5 sm:mx-7 my:1 border-2 border-[#386BAC] sm:h-15 sm:py-2 sm:px-3">
			<div>
				<Link to="/form/personal_info">
					<div className="flex align-middle  h-[100%] ">
						<img className="w-10 sm:w-14" src="../../src/assets/home.svg" alt="" />
					</div>
				</Link>
			</div>
			<div className="flex items-center">
				<Link
					className=" border-red-200  px-2 text-0xl sm:text-[22px] sm:px-4 sm:text-2xl "
					to="/login"
				>
					Login
				</Link>
				<Link
					className="px-2 text-0xl sm:px-4 sm:mr-2  sm:text-[22px]"
					to="/signup"
				>
					Signup
				</Link>
			</div>
		</nav>
	);
}

export default Navbar
