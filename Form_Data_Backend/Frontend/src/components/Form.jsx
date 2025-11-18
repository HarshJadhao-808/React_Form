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
			<div class=" mt-3 mx-4 h-20 border-2 border-[#386BAC] sm:mx-7 sm:h-25 sm:mt-7 flex justify-center items-center">
				
        {/* Professional */}
        
        {/* tab */}
				<div class=" w-15 h-full flex flex-col items-center sm:w-15 sm:mx-3 ml-3 sm:ml-17">
					<div class="mt-1 sm:mt-3">
						<img
							class="w-[45px] mt-2 sm:mt-1 sm:w-[48px]"
							src="../../src/assets/personal_info.svg"
							alt=""
						/>
					</div>
					<p class="text-center text-[8px] sm:text-[17px] mt-2 sm:mt-2  whitespace-nowrap">
						Personal Information
					</p>
				</div>
				{/* bar */}
				<div class="sm:h-[2px] border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Educational tab */}

				{/* tab */}
				<div class=" w-15 h-full flex flex-col items-center sm:w-15 sm:mx-3 ml-3 sm:ml-17">
					<div class="mt-1 sm:mt-3">
						<img
							class="w-[45px] mt-2 sm:mt-1 sm:w-[48px]"
							src="../../src/assets/educational_info.svg"
							alt=""
						/>
					</div>
					<p class="text-center text-[8px] sm:text-[17px] mt-2 sm:mt-2  whitespace-nowrap">
						Education Information
					</p>
				</div>
				{/* bar */}
				<div class="sm:h-[2px] border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>
				
        {/* Professional */}
        
        {/* tab */}
				<div class=" w-15 h-full flex flex-col items-center sm:w-15 sm:mx-3 ml-3 sm:ml-17">
					<div class="mt-1 sm:mt-3">
						<img
							class="w-[45px] mt-2 sm:mt-1 sm:w-[48px]"
							src="../../src/assets/professional_info.svg"
							alt=""
						/>
					</div>
					<p class="text-center text-[8px] sm:text-[17px] mt-2 sm:mt-2  whitespace-nowrap">
						Professional Information
					</p>
				</div>
				{/* bar */}
				<div class="sm:h-[2px] border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Identity */}

				{/* tab */}
				<div class=" w-15 h-full flex flex-col items-center sm:w-15 sm:mx-3 ml-3 sm:ml-17">
					<div class="mt-1 sm:mt-3">
						<img
							class="w-[45px] mt-2 sm:mt-1 sm:w-[48px]"
							src="../../src/assets/Identiacal_info.svg"
							alt=""
						/>
					</div>
					<p class="text-center text-[8px] sm:text-[17px] mt-2 sm:mt-2  whitespace-nowrap">
						Identity & Documents
					</p>
				</div>
				{/* bar */}
				<div class="sm:h-[2px] border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

        {/* Additional  */}

				{/* tab */}
				<div class=" w-15 h-full flex flex-col items-center sm:w-15 sm:mx-3 ml-3 sm:ml-17">
					<div class="mt-1 sm:mt-3">
						<img
							class="w-[45px] mt-2 sm:mt-1 sm:w-[48px]"
							src="../../src/assets/Additional_info.svg"
							alt=""
						/>
					</div>
					<p class="text-center text-[8px] sm:text-[17px] mt-2 sm:mt-2  whitespace-nowrap">
						Additional Information
					</p>
				</div>
			</div>
			{page_no[page]}
		</div>
	);
}

export default Form
