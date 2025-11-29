import React, { useEffect, useState } from "react";
import Form from "../Form";
import professional_info from "/src/assets/professional_info.svg";
import next from "/src/assets/next.svg";
import { Link } from "react-router-dom";

const Professional_info = () => {
	const [experience, setexperience] = useState("");
	const [workstatus, setWorkstatus] = useState("");
	const [check, setCheck] = useState([]);
	const [filled, setFilled] = useState(0);

	const [userData, setuserData] = useState({
		workstatus,
		resume: "",
		check,
		experience,
	});

	const checkfun = (skill) => {
		setCheck((prev) => prev.includes(skill) ?
		 prev.filter((el) => el !== skill )
		:
		[...prev,skill]
	)}

	useEffect(()=>{
		setFilledfields(Object.values(userData).filter((value) => value !== "" && (Array.isArray(value) ? value.length > 0 : true) ).length)
	},[check])

	useEffect(() => {
		workstatus == "yes"
			? setuserData({ ...userData, company_name: "", job_role: "" })
			: delete userData.company_name;
		delete userData.job_role;
	}, [workstatus]);

	// console.log(userData);
	const Changes = (e) => {
		setuserData({ ...userData, [e.target.name]: e.target.value });
		// console.log(userData);
	};

	const SaveIt = () => {
		event.preventDefault();
		console.log(userData);
	};

	const [filledfields, setFilledfields] = useState(
		Object.values(userData).filter((value) => value !== "" && (Array.isArray(value) ? value.length > 0 : true)).length
	);

	const [totalfields, setTotalfields] = useState(Object.keys(userData).length);
	const progression = (filledfields / totalfields) * 100;
	// console.log(filledfields);
	// console.log(totalfields);
	// console.log(progression);

	useEffect(() => {
		setuserData((prev) => ({ ...prev, workstatus: workstatus }));
	}, [workstatus]);

	useEffect(() => {
		setuserData((prev) => ({ ...prev, experience: experience }));
	}, [experience]);

	useEffect(() => {
		setuserData((prev) => ({ ...prev, check }));
		// console.log(check);
	}, [check]);
	useEffect(() => {
		setFilledfields(Object.values(userData).filter((value) => value !== "" && (Array.isArray(value) ? value.length > 0 : true) ).length);
	}, [userData]);

	useEffect(() => {
		setTotalfields(Object.keys(userData).length);
	}, [userData]);

	useEffect(() => {
		setTimeout(() => setFilled(progression), 500);
	}, [progression]);
	return (
		<div>
			<div className="fixed z-3">
				<Form />
			</div>
			<div className="w-full top-0 sm:h-60 h-52 bg-white fixed z-1"></div>
			{/* bar for phones */}
			<div className="fixed z-3 sm:hidden border-2 w-[80%] h-5 rounded-[50px] top-45 left-[10%] ">
				<div
					className={`border-none rounded-l-[20px] h-full transition-[width] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] w-[var(--w)] text-white font-bold text-[15px] flex justify-center items-center ${
						progression == 0 ? "hidden" : ""
					} ${
						filled <= 40
							? "bg-[#BA181B]"
							: filled <= 70
							? "bg-orange-500"
							: filled <= 95
							? "bg-green-500"
							: filled == 96
							? "bg-green-500 rounded-r-[6px]"
							: filled <= 98
							? "bg-green-500 rounded-r-[10px]"
							: filled == 99
							? "bg-green-500 rounded-r-[15px]"
							: filled == 100
							? "bg-green-500 rounded-r-[20px]"
							: ""
					}`}
					style={{ "--w": `${filled}%` }}
				>{`${Math.floor(progression)}%`}</div>
			</div>
			<div className="static mt-45 sm:mt-70 z-0">
				<div className="static mt-55 sm:mt-70 z-0">
					{/* Heading section */}
					<div className="w-[95%] border-2 sm:border-none mx-auto mt-3 sm:mt-6 text-center">
						<div className="flex justify-center items-center gap-3">
							<img className="w-6 sm:w-12" src={professional_info} alt="" />
							<h1 className="text-[18px] sm:text-[28px] font-semibold">
								Work Details
							</h1>
						</div>
						<div className="hidden sm:block border-[3px] border-[#292D32] w-[350px] mx-auto mt-3"></div>
					</div>
					{/* Form section */}
					<div className="w-[95%] mx-auto mt-4 sm:mt-6 flex">
						<form
							onSubmit={SaveIt}
							className="border- w-full max-w-9xl mx-auto flex flex-col gap-6"
						>
							{/* Are you currently working  */}

							<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 items-center border-">
								<label className="text-[18px] sm:text-[24px] font-medium">
									Are you currently working ?
								</label>
								<div className="border- rounded-lg py-2 px-4 w-full flex justify-center gap-35 sm:gap-10">
									<div className="flex items-center gap-2 text-[16px] sm:text-[20px] sm:gap-4  ">
										<div
											className={`w-[13px] sm:w-6 h-[13px] sm:h-6 border-2 rounded-[50%] sm:rounded-[50%] md:w-5 md:h-5 md:rounded-[50%] flex items-center justify-center p-[1px] sm:p-1 ${
												workstatus == "yes"
													? "border-[#288EDF]"
													: "border-[#000000]"
											} `}
											onClick={() =>
												setWorkstatus(workstatus == "yes" ? "" : "yes")
											}
										>
											<div
												className={`${
													workstatus == "yes" ? "bg-[#288EDF]" : "bg-[#FAFAFA]"
												} w-full h-full rounded-2xl `}
											></div>
										</div>
										<p className="text-[18px] sm:text-[25px] md:text-[25px]">
											yes
										</p>
									</div>
									<div className="flex items-center gap-2 text-[16px] sm:text-[20px] sm:gap-4 ">
										<div
											className={`w-[13px] sm:w-6 h-[13px] sm:h-6 border-2 rounded-[50%] sm:rounded-[50%]  md:w-5 md:h-5 md:rounded-[50%] flex items-center justify-center p-[1px] sm:p-1 ${
												workstatus == "No"
													? "border-[#288EDF]"
													: "border-[#000000]"
											} `}
											onClick={() =>
												setWorkstatus(workstatus == "No" ? "" : "No")
											}
										>
											<div
												className={`${
													workstatus == "No" ? "bg-[#288EDF]" : "bg-[#FAFAFA]"
												} w-full h-full rounded-2xl `}
											></div>
										</div>
										<p className="text-[18px] sm:text-[25px] md:text-[25px]">
											No
										</p>
									</div>
								</div>
							</div>

							{/* If Yes */}
							<div
								className={`border- sm:h-50 grid overflow-hidden transition-all duration-300 ${
									workstatus === "yes"
										? "max-h-[500px] opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								<>
									{/* Company Name*/}
									<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
										<label className="text-[18px] sm:text-[24px] font-medium">
											Company Name :
										</label>
										<input
											type="text"
											onChange={Changes}
											name="company_name"
											className="col-span-2 border border-[#193E6D] rounded-lg h-[40px] sm:h-[50px] px-4 text-[16px] sm:text-[20px] shadow-[0px_4px_4px_#00000040]"
										/>
									</div>
									{/* Job Role  */}
									<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
										<label className="text-[18px] sm:text-[24px] font-medium">
											Job Role :
										</label>
										<input
											type="text"
											onChange={Changes}
											name="job_role"
											className="col-span-2 border border-[#193E6D] rounded-lg h-[40px] sm:h-[50px] px-4 text-[16px] sm:text-[20px] shadow-[0px_4px_4px_#00000040]"
										/>
									</div>
								</>
							</div>
							{/* Experience years */}
							<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
								<label className="text-[18px] sm:text-[24px] font-medium">
									Experience Year :
								</label>
								<div className="border- rounded-lg py-2 px-4 w-full grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-10">
									<div className="flex items-center gap-2   text-[16px] sm:text-[20px] sm:gap-4  ">
										<div
											className={`w-[13px] sm:w-6 h-[13px] sm:h-6 border-2 rounded-[50%] sm:rounded-[50%] md:w-5 md:h-5 md:rounded-[50%] flex items-center justify-center p-[1px] sm:p-1 ${
												experience == "1yrs"
													? "border-[#288EDF]"
													: "border-[#000000]"
											} `}
											onClick={() =>
												setexperience(experience == "1yrs" ? "" : "1yrs")
											}
										>
											<div
												className={`${
													experience == "1yrs" ? "bg-[#288EDF]" : "bg-[#FAFAFA]"
												} w-full h-full rounded-2xl `}
											></div>
										</div>
										<p className="text-[18px] sm:text-[25px] md:text-[25px]">
											1yrs
										</p>
									</div>
									<div className="flex items-center gap-2  text-[16px] sm:text-[20px] sm:gap-4 ">
										<div
											className={`w-[13px] sm:w-6 h-[13px] sm:h-6 border-2 rounded-[50%] sm:rounded-[50%]  md:w-5 md:h-5 md:rounded-[50%] flex items-center justify-center p-[1px] sm:p-1 ${
												experience == "2yrs"
													? "border-[#288EDF]"
													: "border-[#000000]"
											} `}
											onClick={() =>
												setexperience(experience == "2yrs" ? "" : "2yrs")
											}
										>
											<div
												className={`${
													experience == "2yrs" ? "bg-[#288EDF]" : "bg-[#FAFAFA]"
												} w-full h-full rounded-2xl `}
											></div>
										</div>
										<p className="text-[18px] sm:text-[25px] md:text-[25px]">
											2yrs
										</p>
									</div>
									<div className="flex items-center gap-2  text-[16px] sm:text-[20px]  sm:gap-4 ">
										<div
											className={`w-[13px] sm:w-6 h-[13px] sm:h-6 border-2 rounded-[50%] sm:rounded-[50%] md:w-5 md:h-5 md:rounded-[50%] flex items-center justify-center p-[1px] sm:p-1 ${
												experience == "3yrs"
													? "border-[#288EDF]"
													: "border-[#000000]"
											} `}
											onClick={() =>
												setexperience(experience == "3yrs" ? "" : "3yrs")
											}
										>
											<div
												className={`${
													experience == "3yrs" ? "bg-[#288EDF]" : "bg-[#FAFAFA]"
												} w-full h-full rounded-2xl `}
											></div>
										</div>
										<p className="text-[18px] sm:text-[25px] md:text-[25px]">
											3yrs
										</p>
									</div>
									<div className="flex items-center gap-2  text-[16px] sm:text-[20px] sm:mr-28 sm:gap-4 border- sm:w-60 ">
										<div
											className={`w-[13px] sm:w-6 h-[13px] sm:h-6 border-2 rounded-[50%] sm:rounded-[50%] md:w-5 md:h-5 md:rounded-[50%] flex items-center justify-center p-[1px] sm:p-1 ${
												experience == "more_than"
													? "border-[#288EDF]"
													: "border-[#000000]"
											} `}
											onClick={() =>
												setexperience(
													experience == "more_than" ? "" : "more_than"
												)
											}
										>
											<div
												className={`${
													experience == "more_than"
														? "bg-[#288EDF]"
														: "bg-[#FAFAFA]"
												} w-full h-full rounded-2xl `}
											></div>
										</div>
										<p className="text-[18px] sm:text-[25px] md:text-[25px] border- ">
											more than
										</p>
									</div>
								</div>
							</div>

							{/* Skills */}

							<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
								<label className="text-[18px] sm:text-[24px] font-medium">
									Skills :
								</label>
								<div className="border- rounded-lg py-2 px-4 w-full grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-10">
									<label className="flex items-center gap-3 cursor-pointer select-none">
										<input
											type="checkbox"
											className=" peer appearance-none w-5 h-5 border-2 rounded-md checked:bg-blue-600 checked:border-blue-600 flex items-center justify-center"
											value="html"
											name="html"
											onClick={() =>
												checkfun("html")
											}
										/>
										{/* SVG Tick */}
										<svg
											className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 ml-1 pointer-events-none"
											fill="none"
											stroke="currentColor"
											strokeWidth="3"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-sm font-medium text-[18px] sm:text-[24px]">
											HTML
										</span>
									</label>
									{/* CSS */}
									<label className="flex items-center gap-3 cursor-pointer select-none">
										<input
											type="checkbox"
											className="peer appearance-none w-5 h-5 border-2 rounded-md checked:bg-blue-600 checked:border-blue-600 flex items-center justify-center"
											onClick={() =>
												checkfun("css")
											}
										/>
										<svg
											className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 ml-1 pointer-events-none"
											fill="none"
											stroke="currentColor"
											strokeWidth="3"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-sm font-medium text-[18px] sm:text-[24px]">
											CSS
										</span>
									</label>
									{/* JavaScript */}
									<label className="flex items-center gap-3 cursor-pointer select-none">
										<input
											type="checkbox"
											className="peer appearance-none w-5 h-5 border-2 rounded-md checked:bg-blue-600 checked:border-blue-600 flex items-center justify-center"
											onClick={() =>
												checkfun("js")
											}
										/>
										<svg
											className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 ml-1 pointer-events-none"
											fill="none"
											stroke="currentColor"
											strokeWidth="3"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-sm font-medium text-[18px] sm:text-[24px]">
											JS
										</span>
									</label>
									{/* React */}
									<label className="flex items-center gap-3 cursor-pointer select-none">
										<input
											type="checkbox"
											className="peer appearance-none w-5 h-5 border-2 rounded-md checked:bg-blue-600 checked:border-blue-600 flex items-center justify-center"
											onClick={() =>
												checkfun("react")
											}
										/>
										<svg
											className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 ml-1 pointer-events-none"
											fill="none"
											stroke="currentColor"
											strokeWidth="3"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-sm font-medium text-[18px] sm:text-[24px]">
											React
										</span>
									</label>
									{/* Node.js */}
									<label className="flex items-center gap-3 cursor-pointer select-none">
										<input
											type="checkbox"
											className="peer appearance-none w-5 h-5 border-2 rounded-md checked:bg-blue-600 checked:border-blue-600 flex items-center justify-center"
											onClick={() =>
												checkfun("nodejs")
											}
										/>
										<svg
											className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 ml-1 pointer-events-none"
											fill="none"
											stroke="currentColor"
											strokeWidth="3"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-sm font-medium text-[18px] sm:text-[24px]">
											Node.js
										</span>
									</label>
									{/* Others */}
									<label className="flex items-center gap-3 cursor-pointer select-none">
										<input
											type="checkbox"
											className="peer appearance-none w-5 h-5 border-2 rounded-md checked:bg-blue-600 checked:border-blue-600 flex items-center justify-center"
											onClick={() =>
												checkfun("others")
											}
										/>
										<svg
											className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 ml-1 pointer-events-none"
											fill="none"
											stroke="currentColor"
											strokeWidth="3"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
										<span className="text-sm font-medium text-[18px] sm:text-[24px]">
											Others
										</span>
									</label>
								</div>
							</div>

							{/* Resume File */}
							<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
								<label className="text-[18px] sm:text-[24px] font-medium">
									Resume Upload :
								</label>
								<input
									type="file"
									onChange={Changes}
									name="resume"
									className="col-span-2 border border-[#193E6D] rounded-lg h-[40px] sm:h-[50px] px-4 text-[16px] sm:text-[20px] shadow-[0px_4px_4px_#00000040]"
								/>
							</div>

							{/* Save Button */}
							<div className="border- flex max-w-4xl m-auto w-full justify-end mt-3">
								<div className="text-[18px] border-2 py-1 text-center w-20 sm:w-40  ">
									<input
										className="sm:text-[26px] md:text-[25px] "
										type="submit"
										value={"Save"}
									/>
								</div>
							</div>
							{/* Backward Forward  */}

							<div className=" border- flex items-center justify-between max-w-full h-7 sm:h-[47px] md:mt-4 md:h-[40px] ">
								<Link to="/form/educational_info">
									<p className=" text-[16px] font-bold sm:font-normal sm:text-[36px] ">
										Back
									</p>
								</Link>
								<Link to="/form/identity_info">
									<img className="w-10 sm:ml-30 " src={next} alt="" />
								</Link>
							</div>
						</form>

						{/*Progression Bar*/}
						<div className="hidden w-11 sm:flex flex-col gap- justify-around sm:fixed sm:top-66 sm:left-290 lg:left-[93%]">
							<div
								className={`border-2 h-[19rem] rounded-[20px] sm:flex sm:flex-col sm:flex-col-reverse `}
							>
								<div
									className={`border- rounded-b-[20px] w-full transition-[height] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] h-[var(--h)] text-white font-bold text-center ${
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
								>{`${Math.floor(progression)}%`}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Professional_info;
