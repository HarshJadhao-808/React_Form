import React, { useEffect, useState } from "react";
import Form from "../Form";
import Additional_info from "/src/assets/Additional_info.svg";
import next from "/src/assets/next.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Review = () => {
	const [contactmethod, setContactmethod] = useState("");
	const [agreed, setAgreed] = useState("");
	const [filled, setFilled] = useState(0);
	const Token = JSON.parse(localStorage.getItem("Token"));

	const [userData, setuserData] = useState({
		medicalcondition: "",
		contactmethod,
		finalcomments: "",
		agreed,
	});

	const data = {
		UserData: userData,
		PageName: "Review_Info",
	};

	const getdata = async () => {
		const res = await axios.get(
			"https://react-form-2-l50h.onrender.com/form/review_info",
			{
				headers: {
					Authorization: Token,
				}
			}
		);
			const fetchedData = res.data.UserData;
			setuserData(fetchedData);
	};
	getdata();

	const Changes = (e) => {
		setuserData({ ...userData, [e.target.name]: e.target.value });
		// console.log(userData);
	};

	const SaveIt = () => {
		event.preventDefault();
		axios.post(
			"https://react-form-2-l50h.onrender.com/form/review_info",
			data,
			{
				headers: {
					Authorization: Token,
				},
			}
		);
		console.log(data);
	};

	const [filledfields, setFilledfields] = useState(
		Object.values(userData).filter((value) => value !== "").length
	);

	const [totalfields, setTotalfields] = useState(Object.keys(userData).length);
	const progression = (filledfields / totalfields) * 100;
	// console.log(filledfields);
	// console.log(totalfields);
	// console.log(progression);

	useEffect(() => {
		setuserData((prev) => ({ ...prev, agreed: agreed }));
	}, [agreed]);
	useEffect(() => {
		setuserData((prev) => ({ ...prev, contactmethod: contactmethod }));
	}, [contactmethod]);
	useEffect(() => {
		setFilledfields(Object.values(userData).filter((v) => v !== "").length);
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
			<div className="static mt-45 sm:mt-70 z-0">
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
								<img className="w-6 sm:w-12" src={Additional_info} alt="" />
								<h1 className="text-[16px] sm:text-[28px] font-semibold">
									Additional Information
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
								{/* Any Medical Condition ? */}
								<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
									<label className="text-[18px] sm:text-[24px] font-medium">
										Any Medical Condition ?
									</label>
									<input
										type="text"
										onChange={Changes}
										name="medicalcondition"
										className="col-span-2 border border-[#193E6D] rounded-lg h-[40px] sm:h-[50px] px-4 text-[16px] sm:text-[20px] shadow-[0px_4px_4px_#00000040]"
									/>
								</div>

								{/* Preferred Contact Method  */}
								<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
									<label className="text-[18px] sm:text-[24px] font-medium">
										Preferred Contact Method :
									</label>
									<div className="border- rounded-lg py-2 px-4 w-full flex justify-between sm:justify-center sm:gap-10">
										<div className="flex items-center gap-2   text-[16px] sm:text-[20px] sm:gap-4  ">
											<div
												className={`w-[13px] sm:w-6 h-[13px] sm:h-6 border-2 rounded-[50%] sm:rounded-[50%] md:w-5 md:h-5 md:rounded-[50%] flex items-center justify-center p-[1px] sm:p-1 ${
													contactmethod == "Email"
														? "border-[#288EDF]"
														: "border-[#000000]"
												} `}
												onClick={() =>
													setContactmethod(
														contactmethod == "Email" ? "" : "Email"
													)
												}
											>
												<div
													className={`${
														contactmethod == "Email"
															? "bg-[#288EDF]"
															: "bg-[#FAFAFA]"
													} w-full h-full rounded-2xl `}
												></div>{" "}
											</div>
											<p className="text-[16px] sm:text-[25px] md:text-[25px]">
												Email
											</p>
										</div>
										<div className="flex items-center gap-2  text-[16px] sm:text-[20px] sm:gap-4 ">
											<div
												className={`w-[13px] sm:w-6 h-[13px] sm:h-6 border-2 rounded-[50%] sm:rounded-[50%]  md:w-5 md:h-5 md:rounded-[50%] flex items-center justify-center p-[1px] sm:p-1 ${
													contactmethod == "Phone"
														? "border-[#288EDF]"
														: "border-[#000000]"
												} `}
												onClick={() =>
													setContactmethod(
														contactmethod == "Phone" ? "" : "Phone"
													)
												}
											>
												<div
													className={`${
														contactmethod == "Phone"
															? "bg-[#288EDF]"
															: "bg-[#FAFAFA]"
													} w-full h-full rounded-2xl `}
												></div>
											</div>
											<p className="text-[16px] sm:text-[25px] md:text-[25px]">
												Phone
											</p>
										</div>
										<div className="flex items-center gap-2  text-[16px] sm:text-[20px]  sm:gap-4 ">
											<div
												className={`w-[13px] sm:w-6 h-[13px] sm:h-6 border-2 rounded-[50%] sm:rounded-[50%] md:w-5 md:h-5 md:rounded-[50%] flex items-center justify-center p-[1px] sm:p-1 ${
													contactmethod == "WhatsApp"
														? "border-[#288EDF]"
														: "border-[#000000]"
												} `}
												onClick={() =>
													setContactmethod(
														contactmethod == "WhatsApp" ? "" : "WhatsApp"
													)
												}
											>
												<div
													className={`${
														contactmethod == "WhatsApp"
															? "bg-[#288EDF]"
															: "bg-[#FAFAFA]"
													} w-full h-full rounded-2xl `}
												></div>
											</div>
											<p className="text-[16px] sm:text-[25px] md:text-[25px]">
												WhatsApp
											</p>
										</div>
									</div>
								</div>

								{/* Terms & Conditions : */}

								<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
									<label className="text-[18px] sm:text-[24px] font-medium">
										Terms & Conditions :
									</label>
									<div className="border- rounded-lg py-2 px-4 w-full grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-10">
										<label className="flex items-center gap-3 cursor-pointer select-none">
											<input
												type="checkbox"
												className=" peer appearance-none w-5 h-5 border-2 rounded-md checked:bg-blue-600 checked:border-blue-600 flex items-center justify-center"
												value="agreed"
												name="agreed"
												onClick={() =>
													agreed == "Yes" ? setAgreed("") : setAgreed("Yes")
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
												Agreed
											</span>
										</label>
									</div>
								</div>

								{/* Final Comments / Notes : */}
								<div className="w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
									<label className="text-[18px] sm:text-[24px] font-medium">
										Final Comments / Notes :
									</label>
									<input
										type="text"
										onChange={Changes}
										name="finalcomments"
										className="col-span-2 border border-[#193E6D] rounded-lg h-[40px] sm:h-[50px] px-4 text-[16px] sm:text-[20px] shadow-[0px_4px_4px_#00000040]"
									/>
								</div>

								{/* Save Button */}

								<div className="border- flex max-w-4xl m-auto w-full justify-center  mt-3">
									<div className="text-[18px] border-2 py-1 text-center w-20 sm:w-40  ">
										<input
											className="sm:text-[26px] md:text-[25px] "
											type="submit"
											value={"confirm"}
										/>
									</div>
								</div>

								{/* Backward Forward  */}

								<div className=" border- flex items-center justify-between max-w-full h-7 sm:h-[47px] md:mt-4 md:h-[40px] ">
									<Link to="/form/identity_info">
										<p className=" text-[16px] font-bold sm:font-normal sm:text-[36px] ">
											Back
										</p>
									</Link>
									<Link to="/form/review">
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
		</div>
	);
};

export default Review;
