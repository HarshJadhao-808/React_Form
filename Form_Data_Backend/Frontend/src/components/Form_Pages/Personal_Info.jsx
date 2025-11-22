import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Form from "../Form";

const Personal_Info = (props) => {
 const[Gender,setGender] = useState(false)
  return (
		<>
			<Form />
			{/* Heading section */}
			<div className="border-2 sm:border-none sm:pt-5 border-[#000000] mx-4 sm:h-30 sm:mx-4 h-[35px] my-2 sm:mt-3 sm:mb-0 m-auto ">
				<div className="sm:my-2">
					<div className="flex align-center justify-center sm:my-0 my-[4px]">
						<div className="border- w-[24px] sm:w-20">
							<img
								className="w-[23px] sm:w-[52px]"
								src="../../src/assets/personal_{user}.svg"
								alt=""
							/>
						</div>
						<h1 className="text-[14px] sm:text-[25px] font-normal sm:font-semibold ">
							Personal Information
						</h1>
					</div>
				</div>
				<div className="none sm:block sm:border-[4px] sm:h-0  sm:border-[#292D32] sm:w-[372px] sm:m-auto"></div>
			</div>
			{/* Form section */}
			<div className="border-2 mx-4 sm:py-2 flex h-[700px]">
				<form className="border- border-amber-400 w-[100%] sm:w-[95%] flex flex-col   ">
					{/* Image */}
					<label className="border-2 border-[#193E6D] w-[217px] sm:w-[416px] h-[101px] sm:h-[178px] mx-auto flex flex-col justify-center rounded-[10px]">
						<div>
							<img
								className="mx-auto"
								src="../../src/assets/personal_info.svg"
								alt=""
							/>
						</div>
						<p className="border- text-center sm:my-3">
							Add Your Profile Photo
						</p>
						<input className="hidden" type="file" accept="image/*" />
					</label>

					{/* Name */}

					<div className="border- mx-auto my-2 flex gap-8  items-center sm:mt-[30px] mx-auto">
						<label className="text-[36px] sm:ml-38 font-medium ">Name :</label>
						<input
							className="border-1 border-[#193E6D] rounded-[10px] sm:w-[584px] sm:h-[42px] sm:mt-[6px] text-center font-thin text-[24px] shadow-[0px_4px_4px_0px_#00000040]"
							placeholder="Full Name"
							type="text"
						/>
					</div>

					{/* Email Adress */}

					<div className="border- mx-auto my-2 flex gap-8 items-center sm:mt-[5px] ">
						<label className="text-[36px] sm:ml-5  font-medium">
							Email Address :
						</label>
						<input
							className="border-1 border-[#193E6D] rounded-[10px] sm:w-[584px] sm:h-[42px] sm:mt-[6px] text-center font-thin text-[24px] shadow-[0px_4px_4px_0px_#00000040]"
							type="text"
						/>
					</div>

					{/* Phone no. */}

					<div className="border- mx-auto my-2 flex gap-8 items-center sm:mt-[5px] ">
						<label className="text-[36px] sm:ml- font-medium">
							Phone Number :
						</label>
						<input
							className="border-1 border-[#193E6D] rounded-[10px] sm:w-[584px] sm:h-[42px] sm:mt-[6px] text-center font-thin text-[24px] shadow-[0px_4px_4px_0px_#00000040]"
							type="text"
						/>
					</div>

					{/* Date Of Birth */}

					<div className="border- mx-auto my-2 flex gap-8 items-center sm:mt-[5px] ">
						<label className="text-[36px] sm:ml-7.5 font-medium">
							Date Of Birth :
						</label>
						<div className=" flex justify-center border-1 border-[#193E6D] rounded-[10px] sm:w-[584px] sm:h-[42px] sm:mt-[6px] shadow-[0px_4px_4px_0px_#00000040]">
							<input
								className="font-thin text-[24px] text-center "
								type="date"
							/>
						</div>
					</div>

					{/* Gender */}

					<div className="border- mx-auto my-2 flex gap-8 items-center sm:mt-[5px]">
						<label className="text-[36px] font-medium">Phone Number :</label>
						<div className="flex items-center gap-4 ">
							<div
								className={`w-[33px] h-[26px] border-1 rounded-[50%] ${
									Gender == "Male" ? "bg-[#288EDF]" : "bg-[#FAFAFA]"
								} `}
								onClick={() => setGender(Gender == "Male" ? "" : "Male")}
							></div>
							<p className=" text-[32px]">Male</p>
						</div>
						<div className="flex items-center gap-4 ">
							<div
								className={`w-[33px] h-[26px] border-1 rounded-[50%] ${
									Gender == "Female" ? "bg-[#288EDF]" : "bg-[#FAFAFA]"
								} `}
								onClick={() => setGender(Gender == "Female" ? "" : "Female")}
							></div>
							<p className=" text-[32px]">Female</p>
						</div>
						<div className="flex items-center sm:mr-28 gap-4 ">
							<div
								className={`w-[33px] h-[26px] border-1 rounded-[50%] ${
									Gender == "Others" ? "bg-[#288EDF]" : "bg-[#FAFAFA]"
								} `}
								onClick={() => setGender(Gender == "Others" ? "" : "Others")}
							></div>
							<p className=" text-[32px]">Others</p>
						</div>
					</div>

					{/* Address */}

					<div className="border- mx-auto my-2 flex gap-8 items-center sm:mt-[5px] ">
						<label className="text-[36px] sm:ml-34 font-medium">Adress :</label>
						<input
							className="border-1 border-[#193E6D] rounded-[10px] sm:w-[584px] sm:h-[42px] sm:mt-[6px] text-center font-thin text-[24px] shadow-[0px_4px_4px_0px_#00000040]"
							type="text"
						/>
					</div>
					{/* Save */}
					<div className="sm:ml-180 sm:mt-5 border-2 flex items-center justify-center sm:w-[218px] h-[47px] ">
						<input className="text-[36px]" type="submit" value={"Save"} />
					</div>
				</form>
				<div className="w-0 border-2 sm:border-red-600 sm:w-[5%] sm:flex sm:flex-col">
					<div className="h-[60%]"></div>
					<Link to="/form/educational_info">
						<div className="h-[20%]">
							<img src="../../src/assets/next.svg" alt="" />
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Personal_Info
