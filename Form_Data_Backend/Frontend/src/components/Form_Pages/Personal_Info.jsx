import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../Form";
import personal_user from "/src/assets/personal_{user}.svg";
import personal_info from "/src/assets/personal_info.svg";
import next from "/src/assets/next.svg";

const Personal_Info = () => {
const [Gender, setGender] = useState(false);
const [filled,setFilled] = useState("12%")


	return (
		<>
			<Form />
			{/* Heading */}
			<div className="w-[95%] border-2 sm:border-none mx-auto mt-3 sm:mt-6 text-center">
				<div className="flex justify-center items-center gap-3">
					<img className="w-6 sm:w-12" src={personal_user} alt="" />
					<h1 className="text-[16px] sm:text-[28px] font-semibold">
						Personal Information
					</h1>
				</div>
				<div className="hidden sm:block border-[3px] border-[#292D32] w-[350px] mx-auto mt-3"></div>
			</div>
			{/* Main Form Container */}
			<div className="w-[95%] mx-auto mt-4 sm:mt-6 flex">
				<form className="w-full max-w-4xl mx-auto flex flex-col gap-6">
					{/* Profile Image */}
					<label className="border-2 border-[#193E6D] w-[75%] sm:w-[420px] mx-auto flex flex-col justify-center items-center rounded-xl py-4">
						<img className="w-10 sm:w-16" src={personal_info} alt="" />
						<p className="mt-3 text-[16px] sm:text-[20px] font-medium">
							Add Your Profile Photo
						</p>
						<input type="file" className="hidden" accept="image/*" />
					</label>

					{/* Name */}
					<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
						<label className="text-[18px] sm:text-[24px] font-medium">
							Name :
						</label>
						<input
							type="text"
							className="col-span-2 border border-[#193E6D] rounded-lg h-[40px] sm:h-[50px] px-4 text-[16px] sm:text-[20px] shadow-[0px_4px_4px_#00000040]"
							placeholder="Full Name"
						/>
					</div>

					{/* Email */}
					<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
						<label className="text-[18px] sm:text-[24px] font-medium">
							Email :
						</label>
						<input
							type="email"
							className="col-span-2 border border-[#193E6D] rounded-lg h-[40px] sm:h-[50px] px-4 text-[16px] sm:text-[20px] shadow-[0px_4px_4px_#00000040]"
						/>
					</div>

					{/* Phone */}
					<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
						<label className="text-[18px] sm:text-[24px] font-medium">
							Phone :
						</label>
						<input
							type="text"
							className="col-span-2 border border-[#193E6D] rounded-lg h-[40px] sm:h-[50px] px-4 text-[16px] sm:text-[20px] shadow-[0px_4px_4px_#00000040]"
						/>
					</div>

					{/* DOB */}
					<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
						<label className="text-[18px] sm:text-[24px] font-medium">
							Date of Birth :
						</label>
						<input
							type="date"
							className="col-span-2 border border-[#193E6D] rounded-lg h-[40px] sm:h-[50px] px-4 text-[16px] sm:text-[20px] shadow-[0px_4px_4px_#00000040]"
						/>
					</div>

					{/* Gender */}
					<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
						<label className="text-[18px] sm:text-[24px] font-medium">
							Gender :
						</label>

						<div className="col-span-2 flex gap-6">
							{["Male", "Female", "Others"].map((g) => (
								<div
									key={g}
									className="flex items-center gap-2 cursor-pointer"
									onClick={() => setGender(g)}
								>
									<div
										className={`w-4 h-4 sm:w-7 sm:h-6 rounded-full border-1 ${
											Gender === g ? "bg-[#288EDF]" : "bg-[#FAFAFA]"
										}`}
									></div>
									<p className="text-[16px] sm:text-[22px]">{g}</p>
								</div>
							))}
						</div>
					</div>

					{/* Address */}
					<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
						<label className="text-[18px] sm:text-[24px] font-medium">
							Address :
						</label>
						<input
							type="text"
							className="col-span-2 border border-[#193E6D] rounded-lg h-[40px] sm:h-[50px] px-4 text-[16px] sm:text-[20px] shadow-[0px_4px_4px_#00000040]"
						/>
					</div>

					{/* Save Button */}
					
					<div className="ml-66 mt-3 sm:ml-120 md:ml-140 lg:ml-200 sm:mt-5 border-2 flex items-center justify-center w-18 sm:w-[218px] md:w-[150px] h-7 sm:h-[47px] md:h-[40px] ">
						<input className="sm:text-[26px] md:text-[25px] " type="submit" value={"Save"} />
					</div>
				
				</form>

				{/* Next Arrow */}
				<div className="hidden sm:flex flex-col gap- justify-around sm:fixed sm:top-66 sm:left-290 lg:left-[90%]">
					<div className={`border-2 h-75 rounded-[20px] sm:flex sm:flex-col sm:justify-end ` }>
						<div className={`border-2 rounded-[20px] w-full h-[${filled}] ${ filled  <= `40%` ? "bg-[#BA181B]" : filled <= `70%` ? "bg-[#ba5918]" :""}  `}></div>
					</div>
					<Link to="/form/educational_info">
						<img className="w-10 mt-10 " src={next} alt="" />
					</Link>
				</div>
			</div>
		</>
	);
};

export default Personal_Info;
