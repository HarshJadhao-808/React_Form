import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  const [arr,setArr]=useState([])

  useEffect(()=>{
//     const getfun = async () => {
//       let res = await fetch("http://localhost:8000")
//       let data =await res.json()
//     setArr([...arr,data])
//   }
//   getfun()
  },[])
  return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Form />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App
