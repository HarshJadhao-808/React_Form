import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Login from './components/Login';
import Signup from './components/Signup';
import Personal_Info from './components/Form_Pages/Personal_Info';
import Educational_Info from './components/Form_Pages/Educational_Info';
import Identity_Info from './components/Form_Pages/Identity_Info';
import Professional_info from './components/Form_Pages/Professional_info';
import Review from './components/Form_Pages/Review';

function App() {
  const [arr,setArr]=useState([])

  return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/form" element={<Form />}/>
					<Route path="/login" element={<Login />}/>
					<Route path="/signup" element={<Signup />}/>
					<Route path="/form/personal_info" element={<Personal_Info />}/>
					<Route path="/form/educational_info" element={<Educational_Info/>}/>
					<Route path="/form/professional_info" element={<Professional_info/>}/>
					<Route path="/form/identity_info" element={<Identity_Info/>}/>
					<Route path="/form/review" element={<Review/>}/>
				
				</Routes>
			</Router>
		</>
	);
}

export default App
