import React from 'react'

const Personal_Info = (props) => {
 
  return (
    <>
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
      <div className='border-2 mx-4 sm:py-2 flex h-[600px]'>
        <form className='border-2 border-amber-400 w-[95%]' ></form>
        <div className='border-2 border-red-600 w-[5%] flex flex-col'>
          <div className='h-[60%]'></div>
          <div className='h-[20%]' onClick={()=>props.incr()} > <img  src="../../src/assets/next.svg" alt="" /></div>
        </div>
      </div>
    </>
	
	);
}

export default Personal_Info
