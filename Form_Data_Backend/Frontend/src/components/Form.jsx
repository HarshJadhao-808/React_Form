import React from 'react'
import Personal_Info from './Form_Pages/Personal_Info.jsx'
import { useState ,useEffect } from 'react'
import Educational_Info from './Form_Pages/Educational_Info.jsx'
import Professional_info from './Form_Pages/Professional_info.jsx'
import Identity_Info from './Form_Pages/Identity_Info.jsx'
import Review from './Form_Pages/Review.jsx'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import personal_info from "../assets/personal_info.svg";
import educational_info from "../assets/educational_info.svg";
import professional_info from "../assets/professional_info.svg";
import Identical_info from "../assets/Identical_info.svg";
import Additional_info from "../assets/Additional_info.svg";

const Form = () => {
  const [page,setPage] = useState(0)
	

     
  return (
		<div>
			<div className=" mt-3 mx-4 h-20 border-2 border-[#386BAC] sm:mx-7 sm:h-25 sm:mt-7 flex justify-center items-center  overflow-x-auto sm:overflow-x-visible px-3 sm:px-0">
				{/* Personal */}
				{/* tab */}
				<Link to="/form/personal_info">
					<div
						className=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3 sm:ml-10 "
					>
						<div className="border- sm:w-15 w-8 h-[80px] sm:h-[55px] mt-1 sm:mt-3 flex">
							<img
								className=" mt-2 sm:mt-1 "
								src={personal_info}
								alt=""
							/>
						</div>
						<p className="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
							Personal Information
						</p>
					</div>
				</Link>
				{/* bar */}
				<div className="sm:h-[2px] mt-4 sm:mt-0 border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Educational tab */}

				{/* tab */}
				<Link to="/form/educational_info">
					<div
						className=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3 "
					>
						<div className="border- sm:w-15 w-8 h-[80px] sm:h-[55px] mt-1 sm:mt-3 flex">
							<img
								className=" mt-2 sm:mt-1 "
								src={educational_info}
								alt=""
							/>
						</div>
						<p className="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
							Education Information
						</p>
					</div>
				</Link>
				{/* bar */}
				<div className="sm:h-[2px] mt-4 sm:mt-0 border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Professional */}

				{/* tab */}
				<Link to="/form/professional_info">
					<div
						className=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3  "
					>
						<div className="border- sm:w-15 w-8 h-[80px] sm:h-[55px] mt-1 sm:mt-3 flex">
							<img
								className=" mt-2 sm:mt-1 "
								src={professional_info}
								alt=""
							/>
						</div>
						<p className="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
							Professional Information
						</p>
					</div>
				</Link>
				{/* bar */}
				<div className="sm:h-[2px] mt-4 sm:mt-0 border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Identity */}

				{/* tab */}
				<Link to="/form/identity_info">
					<div
						className=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3  "
					>
						<div className="border- sm:w-15 w-8 h-[80px] sm:h-[55px] mt-1 sm:mt-3 flex">
							<img
								className=" mt-2 sm:mt-1 "
								src={Identical_info}
								alt=""
							/>
						</div>
						<p className="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
							Identity & Documents
						</p>
					</div>
				</Link>
				{/* bar */}
				<div className="sm:h-[2px] mt-4 sm:mt-0 border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Additional  */}

				{/* tab */}
				<Link to="/form/review">

				<div
					className=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3  sm:mr-11 "
				>
					<div className="border- sm:w-15 w-8 h-[80px] sm:h-[55px] mt-1 sm:mt-3 flex">
						<img
							className=" mt-2 sm:mt-1 "
							src={Additional_info}
							alt=""
						/>
					</div>
					<p className="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
						Additional Information
					</p>
				</div>
				</Link>
			</div>
			{/* {page_no[page]} */}
		</div>
	);
}

export default Form
