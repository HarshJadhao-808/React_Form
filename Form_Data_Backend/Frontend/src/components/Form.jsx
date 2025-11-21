import React from 'react'
import Personal_Info from './Form_Pages/Personal_Info.jsx'
import { useState ,useEffect } from 'react'
import Educational_Info from './Form_Pages/Educational_Info.jsx'
import Professional_info from './Form_Pages/Professional_info.jsx'
import Identity_Info from './Form_Pages/Identity_Info.jsx'
import Review from './Form_Pages/Review.jsx'
import { useNavigate } from 'react-router-dom'


const Form = () => {
  const [page,setPage] = useState(0)
	

	  const incr = () => {
		  setPage(prev => prev + 1)
		}	
   const navigate = useNavigate()
useEffect(()=>{
	 switch (page) {
			case 0:
				window.history.pushState({}, "", "/form/personal_info");
				break;
			case 1:
				window.history.pushState({}, "", "/form/educational_info");
				break;
			case 2:
				window.history.pushState({}, "", "/form/professional_info");
				break;
			case 3:
				window.history.pushState({}, "", "/form/identity_info");
				break;
			case 4:
				window.history.pushState({}, "", "/form/review");
				break;
			default:
				break;
		}
		const rerender = () => {
		  
		}
		rerender()
},[page])

  const page_no = [
		<Personal_Info incr={incr} />,
		<Educational_Info />,
		<Professional_info />,
		<Identity_Info />,
		<Review />,
	];

     
  return (
		<div>
			<div className=" mt-3 mx-4 h-20 border-2 border-[#386BAC] sm:mx-7 sm:h-25 sm:mt-7 flex justify-center items-center  overflow-x-auto sm:overflow-x-visible px-3 sm:px-0">
				{/* Personal */}
				{/* tab */}
				<div  onClick={()=>setPage(0)} className=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3 sm:ml-10 ">
					<div className="border- sm:w-15 w-8 h-[80px] sm:h-[55%] mt-1 sm:mt-3 flex">
						<img
							className=" mt-2 sm:mt-1 "
							src="../../src/assets/personal_info.svg"
							alt=""
						/>
					</div>
					<p className="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
						Personal Information
					</p>
				</div>
				{/* bar */}
				<div className="sm:h-[2px] mt-4 sm:mt-0 border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Educational tab */}

				{/* tab */}
				<div onClick={()=>setPage(1)} className=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3 ">
					<div className="border- sm:w-15 w-8 h-[80px] sm:h-[55%] mt-1 sm:mt-3 flex">
						<img
							className=" mt-2 sm:mt-1 "
							src="../../src/assets/educational_info.svg"
							alt=""
						/>
					</div>
					<p className="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
						Education Information
					</p>
				</div>
				{/* bar */}
				<div className="sm:h-[2px] mt-4 sm:mt-0 border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Professional */}

				{/* tab */}
				<div onClick={()=>setPage(2)} className=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3  ">
					<div className="border- sm:w-15 w-8 h-[80px] sm:h-[55%] mt-1 sm:mt-3 flex">
						<img
							className=" mt-2 sm:mt-1 "
							src="../../src/assets/professional_info.svg"
							alt=""
						/>
					</div>
					<p className="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
						Professional Information
					</p>
				</div>
				{/* bar */}
				<div className="sm:h-[2px] mt-4 sm:mt-0 border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Identity */}

				{/* tab */}
				<div onClick={()=>setPage(3)} className=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3  ">
					<div className="border- sm:w-15 w-8 h-[80px] sm:h-[55%] mt-1 sm:mt-3 flex">
						<img
							className=" mt-2 sm:mt-1 "
							src="../../src/assets/Identiacal_info.svg"
							alt=""
						/>
					</div>
					<p className="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
						Identity & Documents
					</p>
				</div>
				{/* bar */}
				<div className="sm:h-[2px] mt-4 sm:mt-0 border-1 w-[50px] sm:w-[147px] rounded-[1px] mb-1"></div>

				{/* Additional  */}

				{/* tab */}
				<div onClick={()=>setPage(4)} className=" w-15 h-full flex flex-col items-center sm:w-12 sm:mx-3  sm:mr-11 ">
					<div className="border- sm:w-15 w-8 h-[80px] sm:h-[55%] mt-1 sm:mt-3 flex">
						<img
							className=" mt-2 sm:mt-1 "
							src="../../src/assets/Additional_info.svg"
							alt=""
						/>
					</div>
					<p className="text-center hidden sm:block text-[10px] sm:text-[12px] mt-2 sm:mt-2 mb-1 sm:mb-0 whitespace-nowrap">
						Additional Information
					</p>
				</div>
			</div>
			{page_no[page]}
		</div>
	);
}

export default Form
