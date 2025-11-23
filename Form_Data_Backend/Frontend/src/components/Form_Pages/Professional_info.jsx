import React from 'react'
import Form from "../Form";
import professional_info from "../../assets/professional_info.svg";

const Professional_info = () => {
  return (
		<div>
			<Form />
			{/* Heading section */}
			<div className="border-2 sm:border-none sm:pt-5 border-[#000000] mx-4 sm:h-30 sm:mx-4 h-[35px] my-2 sm:mt-3 sm:mb-0 m-auto ">
				<div className="sm:my-2">
					<div className="flex align-center justify-center sm:my-0 my-[4px]">
						<div className="border- w-[24px] sm:w-20">
							<img
								className="w-[23px] mt-[3px] sm:w-[52px]"
								src={professional_info}
								alt=""
							/>
						</div>
						<h1 className="text-[14px] sm:text-[25px] font-normal sm:font-semibold ">
							Work Details
						</h1>
					</div>
				</div>
				<div className="none sm:block sm:border-[4px] sm:h-0  sm:border-[#292D32] sm:w-[372px] sm:m-auto"></div>
			</div>
			{/* Form section */}
		</div>
	);
}

export default Professional_info
