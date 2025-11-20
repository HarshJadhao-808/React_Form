import React from 'react'
import Personal_Info from './Form_Pages/Personal_Info.jsx'
import { useState } from 'react'
import Educational_Info from './Form_Pages/Educational_Info.jsx'
import Professional_info from './Form_Pages/Professional_info.jsx'
import Identity_Info from './Form_Pages/Identity_Info.jsx'
import Review from './Form_Pages/Review.jsx'

const Form = () => {
  const [page,setPage] = useState(0)
  const page_no = [
    <Personal_Info/>,
    <Educational_Info/>,
    <Professional_info/>,
    <Identity_Info/>,
    <Review/>
  ]
  return (
		<div>
			<div class=" mt-3 mx-4 h-20 border-2 border-[#386BAC] sm:mx-7 sm:h-25 sm:mt-7 flex justify-center items-center  overflow-x-auto sm:overflow-x-visible px-3 sm:px-0">
				{/* Personal */}
				{/* tab */}
				<div class=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3 sm:ml-10 ">
					<div class="border- sm:w-15 w-8 h-[80px] sm:h-[55%] mt-1 sm:mt-3 flex">
						<img
							class=" mt-2 sm:mt-1 "
							src="../../src/assets/personal_info.svg"
							alt=""
						/>
					</div>
					<p class="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
						Personal Information
					</p>
				</div>
				{/* bar */}
				<div class="sm:h-[2px] mt-4 sm:mt-0 border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Educational tab */}

				{/* tab */}
				<div class=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3 ">
					<div class="border- sm:w-15 w-8 h-[80px] sm:h-[55%] mt-1 sm:mt-3 flex">
						<img
							class=" mt-2 sm:mt-1 "
							src="../../src/assets/educational_info.svg"
							alt=""
						/>
					</div>
					<p class="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
						Education Information
					</p>
				</div>
				{/* bar */}
				<div class="sm:h-[2px] mt-4 sm:mt-0 border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Professional */}

				{/* tab */}
				<div class=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3  ">
					<div class="border- sm:w-15 w-8 h-[80px] sm:h-[55%] mt-1 sm:mt-3 flex">
						<img
							class=" mt-2 sm:mt-1 "
							src="../../src/assets/professional_info.svg"
							alt=""
						/>
					</div>
					<p class="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
						Professional Information
					</p>
				</div>
				{/* bar */}
				<div class="sm:h-[2px] mt-4 sm:mt-0 border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Identity */}

				{/* tab */}
				<div class=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3  ">
					<div class="border- sm:w-15 w-8 h-[80px] sm:h-[55%] mt-1 sm:mt-3 flex">
						<img
							class=" mt-2 sm:mt-1 "
							src="../../src/assets/Identiacal_info.svg"
							alt=""
						/>
					</div>
					<p class="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
						Identity & Documents
					</p>
				</div>
				{/* bar */}
				<div class="sm:h-[2px] mt-4 sm:mt-0 border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Additional  */}

				{/* tab */}
				<div class=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3  sm:mr-11 ">
					<div class="border- sm:w-15 w-8 h-[80px] sm:h-[55%] mt-1 sm:mt-3 flex">
						<img
							class=" mt-2 sm:mt-1 "
							src="../../src/assets/Additional_info.svg"
							alt=""
						/>
					</div>
					<p class="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
						Additional Information
					</p>
				</div>
			</div>
			{page == 0 ? (
				<div className="border-2 sm:border-none sm:py-2 border-[#000000] mx-4 h-[35px] my-2 sm:my-8 m-auto ">
					<div className="sm:-my-20">
						<div className="flex align-center justify-center my-[4px]">
							<div className="border- w-[24px] sm:w-20">
								<img className='w-[23px]' src="../../src/assets/personal_{user}.svg" alt="" />
							</div>
							<h1 className="text-[14px] s m:text-[36px] font-normal sm:font-semibold ">
								Personal Information
							</h1>
						</div>
					</div>
					<div className="none sm:block sm:border-[4px] sm:h-0  sm:border-[#292D32] sm:w-[472px] sm:m-auto"></div>
				</div>
			) : page == 1 ? (
				<h1>hello 1</h1>
			) : null}
			{page_no[page]}
		</div>
	);
}

export default Form
