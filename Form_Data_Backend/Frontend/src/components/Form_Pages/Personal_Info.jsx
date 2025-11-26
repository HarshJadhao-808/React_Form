import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../Form";
import personal_user from "/src/assets/personal_{user}.svg";
import personal_info from "/src/assets/personal_info.svg";
import next from "/src/assets/next.svg";

const Personal_Info = () => {
	const [Gender, setGender] = useState("");
	const [filled, setFilled] = useState(0);

	const [userData, setuserData] = useState({
		prfimg: "",
		name: "",
		email: "",
		phone: "",
		dob: "",
		address: "",
		gender:Gender
	});

	const Changes = (e) => {
     setuserData({...userData,[e.target.name]:e.target.value})
	 console.log(userData)
	};
	

	const SaveIt = () => {
		event.preventDefault();
		console.log(userData);
	};

	const [filledfields, setFilledfields] = useState(
		Object.values(userData).filter((value) => value !== "").length
	);

	const [totalfields, setTotalfields] = useState(Object.keys(userData).length);
	const progression = (filledfields / totalfields ) * 100;
	// console.log(filledfields);
	// console.log(totalfields);
	console.log(progression)

	useEffect(() => {
		setuserData((prev) => ({ ...prev, gender: Gender }));
	}, [Gender]);

	useEffect(() => {
		setFilledfields(Object.values(userData).filter((v) => v !== "").length);
	}, [userData]);

   
	useEffect(() => {
		setTimeout(() => setFilled(progression), 500);
	}, [progression]);
	
// console.log(Gender)
	return (
		<>
			<div className="fixed z-3">
				<Form />
			</div>
			<div className="w-full top-0 sm:h-60 h-52 bg-white fixed z-1"></div>
			{/* bar for phones */}
			<div className="fixed z-3 sm:hidden border-2 w-[80%] h-5 rounded-[50px] top-45 left-[10%] ">
				<div
					className={`border-none rounded-l-[20px] h-full transition-[width] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] w-[var(--w)] ${
						filled <= 40
							? "bg-[#BA181B]"
							: filled <= 70
							? "bg-orange-500"
							: filled <= 95
							? "bg-green-500"
							: filled == 96
							? "bg-green-500 rounded-t-[6px]"
							: filled <= 98
							? "bg-green-500 rounded-t-[10px]"
							: filled == 99
							? "bg-green-500 rounded-t-[15px]"
							: filled == 100
							? "bg-green-500 rounded-t-[20px]"
							: ""
					}`}
					style={{ "--w": `${filled}%` }}
				></div>
			</div>
			{/* Heading */}
			<div className="static mt-55 sm:mt-70 z-0">
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
					<form
						onSubmit={SaveIt}
						className="w-full max-w-4xl mx-auto flex flex-col gap-6"
					>
						{/* Profile Image */}
						<label className="border-2 border-[#193E6D] w-[75%] sm:w-[420px] mx-auto flex flex-col justify-center items-center rounded-xl py-4">
							<img className="w-10 sm:w-16" src={personal_info} alt="" />
							<p className="mt-3 text-[16px] sm:text-[20px] font-medium">
								Add Your Profile Photo
							</p>
							<input
								name="prfimg"
								type="file"
								className="hidden"
								accept="image/*"
							/>
						</label>

						{/* Name */}
						<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
							<label className="text-[18px] sm:text-[24px] font-medium">
								Name :
							</label>
							<input
								type="text"
								onChange={Changes}
								name="name"
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
								onChange={Changes}
								name="email"
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
								onChange={Changes}
								name="phone"
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
								onChange={Changes}
								name="dob"
								className="col-span-2 border border-[#193E6D] rounded-lg h-[40px] sm:h-[50px] px-4 text-[16px] sm:text-[20px] shadow-[0px_4px_4px_#00000040]"
							/>
						</div>

						{/* Gender */}
						<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
							<label className="text-[18px] sm:text-[24px] font-medium">
								Gender :
							</label>
							<div className="border- rounded-lg py-2 px-4 w-full flex justify-between sm:justify-center sm:gap-10">
								<div className="flex items-center gap-2   text-[16px] sm:text-[20px] sm:gap-4  ">
									<div
										className={`w-[13px] sm:w-6 h-[13px] sm:h-6 border-1 rounded-[50%] sm:rounded-[50%] md:w-5 md:h-5 md:rounded-[50%] ${
											Gender == "Male" ? "bg-[#288EDF]" : "bg-[#FAFAFA]"
										} `}
										onClick={() => setGender(Gender == "Male" ? "" : "Male")}
									></div>
									<p className="text-[16px] sm:text-[25px] md:text-[25px]">
										Male
									</p>
								</div>
								<div className="flex items-center gap-2  text-[16px] sm:text-[20px] sm:gap-4 ">
									<div
										className={`w-[13px] sm:w-6 h-[13px] sm:h-6 border-1 rounded-[50%] sm:rounded-[50%]  md:w-5 md:h-5 md:rounded-[50%] ${
											Gender == "Female" ? "bg-[#288EDF]" : "bg-[#FAFAFA]"
										} `}
										onClick={() =>
											setGender(Gender == "Female" ? "" : "Female")
										}
									></div>
									<p className="text-[16px] sm:text-[25px] md:text-[25px]">
										Female
									</p>
								</div>
								<div className="flex items-center gap-2  text-[16px] sm:text-[20px] sm:mr-28 sm:gap-4 ">
									<div
										className={`w-[13px] sm:w-6 h-[13px] sm:h-6 border-1 rounded-[50%] sm:rounded-[50%] md:w-5 md:h-5 md:rounded-[50%] ${
											Gender == "Others" ? "bg-[#288EDF]" : "bg-[#FAFAFA]"
										} `}
										onClick={() =>
											setGender(Gender == "Others" ? "" : "Others")
										}
									></div>
									<p className="text-[16px] sm:text-[25px] md:text-[25px]">
										Others
									</p>
								</div>
							</div>
						</div>

						{/* Address */}
						<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
							<label className="text-[18px] sm:text-[24px] font-medium">
								Address :
							</label>
							<input
								type="text"
								onChange={Changes}
								name="address"
								className="col-span-2 border border-[#193E6D] rounded-lg h-[40px] sm:h-[50px] px-4 text-[16px] sm:text-[20px] shadow-[0px_4px_4px_#00000040]"
							/>
						</div>

						{/* Save Button */}

						<div className="ml-66 mt-3 sm:ml-120 md:ml-140 lg:ml-200 sm:mt-5 border-2 flex items-center justify-center w-18 sm:w-[218px] md:w-[150px] h-7 sm:h-[47px] md:h-[40px] ">
							<input
								className="sm:text-[26px] md:text-[25px] "
								type="submit"
								value={"Save"}
							/>
						</div>
					</form>

					{/* Next Arrow */}
					<div className="hidden sm:flex flex-col gap- justify-around sm:fixed sm:top-66 sm:left-290 lg:left-[93%]">
						<div
							className={`border-2 h-[19rem] rounded-[20px] sm:flex sm:flex-col sm:flex-col-reverse `}
						>
							<div
								className={`border-none rounded-b-[20px] w-full transition-[height] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] h-[var(--h)] ${
									filled <= 40
										? "bg-[#BA181B]"
										: filled <= 70
										? "bg-orange-500"
										: filled <= 95
										? "bg-green-500"
										: filled == 96
										? "bg-green-500 rounded-t-[6px]"
										: filled <= 98
										? "bg-green-500 rounded-t-[10px]"
										: filled == 99
										? "bg-green-500 rounded-t-[15px]"
										: filled == 100
										? "bg-green-500 rounded-t-[20px]"
										: ""
								}`}
								style={{ "--h": `${filled}%` }}
							></div>
						</div>
						<Link to="/form/educational_info">
							<img className="w-10 mt-10 " src={next} alt="" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Personal_Info;
