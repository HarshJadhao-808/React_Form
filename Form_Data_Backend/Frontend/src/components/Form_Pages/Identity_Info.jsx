import React from 'react'
import Form from "../Form";
import identical_info from "/src/assets/Identical_info.svg";

const Identity_Info = () => {
  return (
		<div>
			<div className="fixed z-3">
				<Form />
			</div>
			<div className="w-full top-0 sm:h-60 h-40 bg-white fixed z-1"></div>
			<div className="static mt-45 sm:mt-70 z-0">
				{/* Heading section */}
				<div className="border-2 sm:border-none sm:pt-5 border-[#000000] mx-4 sm:h-30 sm:mx-4 h-[35px] my-2 sm:mt-3 sm:mb-0 m-auto ">
					<div className="sm:my-2">
						<div className="flex align-center justify-center sm:my-0 my-[4px]">
							<div className="border- w-[24px] sm:w-20">
								<img
									className="w-[23px] sm:w-[52px]"
									src={identical_info}
									alt=""
								/>
							</div>
							<h1 className="text-[14px] sm:text-[25px] font-normal mt-[3px] sm:mt-2 sm:font-semibold ">
								Identity & Documents
							</h1>
						</div>
					</div>
					<div className="none sm:block sm:border-[4px] sm:h-0  sm:border-[#292D32] sm:w-[372px] sm:m-auto"></div>
				</div>
				{/* Form section */}
				
			</div>
		</div>
	);
}

export default Identity_Info
