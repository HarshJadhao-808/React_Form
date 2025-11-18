import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
const Login = () => {
   const [user,setUser] = useState({
    email:"",
    password:""
   })
  const logFun = async() => {
      event.preventDefault()
          try {
        const response = await axios.post("http://localhost:8000/user/login", user);
        console.log("Signup Successfull", response.data)
        Swal.fire({
					text: "Login Successfull !",
					icon: "success",
				});
      } catch (error) {
        console.log("Signup Failed", error)
       Swal.fire({
                  text: "Login Failed !",
                  icon: "error",
                });
      }
  }

  const handlechange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  }
  return (
		<form
			onSubmit={logFun}
			className="flex  sm:items-center justify-center  w-full h-[596px] sm:w-full sm:h-[542px] opacity-100  bg-[linear-gradient(247.34deg,#A1B4FF_1.1%,#FFFFFF_99.7%)]"
		>
			<div className="bg-[#FFFFFF] rounded-[30px] mt-20 sm:mt-0  mb-50 sm:mb-0 w-[80%] h-[65%] sm:h-[85%] sm:w-[517px] flex flex-col gap-1 sm:gap-3">
				<h1 className="text-center mt-5 sm:mt-7 text-[24px] sm:text-[37.83px] font-[500] sm:font-[700] font-[Halant] mb-2 sm:mb-2 ">
					Log In
				</h1>
				<div className="bg-[#0142E1] sm:mb-0 flex justify-end  rounded-[50px]  h-[50px] sm:h-[71px] w-[80%] sm:w-[80%] m-auto ">
					<div className="w-[98%] flex justify-center align-center bg-[#F7F7F7] rounded-[50px]">
						<div className=" flex align-center  ml-3">
							<img
								src="../../src/assets/email.svg"
								className="w-5 sm:ml-3 sm:w-6"
								alt=""
							/>
						</div>
						<input
							className="border- ml-4 sm:h-full text-[12px] sm:text-[15px] sm:pl-8 bg-[#F7F7F7] outline-none w-[85%]  rounded-[50px] font-[halant]"
							type="email"
							onChange={handlechange}
							name="email"
							placeholder="E-mail..."
						/>
					</div>
				</div>
				<div className="bg-[#0142E1] sm:mb-0 flex justify-end  rounded-[50px] h-[50px]  sm:h-[71px] w-[80%] sm:w-[80%] m-auto ">
					<div className="w-[98%] flex justify-center align-center bg-[#F7F7F7] rounded-[50px]">
						<div className=" flex align-center  ml-3">
							<img
								src="../../src/assets/password.svg"
								className="w-5 sm:ml-3 sm:w-6"
								alt=""
							/>
						</div>
						<input
							className="border- ml-4 sm:h-full text-[12px] sm:text-[15px] sm:pl-8 bg-[#F7F7F7] outline-none w-[85%]  rounded-[50px] font-[halant]"
							type="password"
							onChange={handlechange}
							name="password"
							placeholder="Password..."
						/>
					</div>
				</div>
				<div className="flex justify-between text-[10px] sm:text-[14px] w-[80%] m-auto">
					<div className="flex">
						<input type="radio" className="bg-[#DFDFDF] mx-2"/>
						<p>Remember Me</p>
					</div>
					<div>Forget Password</div>
				</div>
				<div className=" flex justify-center">
					<input
						className=" mt-10 mb-10 sm:mt-12 sm:mb-12  bg-[#0242E1] w-[80%] h-[50px] sm:h-[66px] rounded-[50px] sm:text-[30.83px] text-white font-[halant]  "
						value="Signup"
						type="submit"
					/>
				</div>
			</div>
		</form>
	);
}

export default Login
