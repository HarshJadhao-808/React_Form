import mongoose from "mongoose";
import User from "../models/UserModel.js";
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config()
export const Signupfun = async(req,res) => {
   try {
    
     const {name,email,password,role} = req.body
       
    //  const userexists = await findOne({email})

    //  if(!userexists) return res.status(400).send("User already exists")

       const hashed_password =await bcrypt.hash(password,10)
       let data = await User.create({
           name,
           email,
           password:hashed_password,
           role
        })
        res.json({message:"User Created",data})
    } catch (error) {
     console.log(error)
    }
}

export const Loginfun = async(req,res) => {
        const {email,password} = req.body
        const user = await User.findOne({email})
        
        if(!user) return res.status(400).send("Invalid Credentials")

        const Match = bcrypt.compare(password,user.password)
        
        if(!Match) return res.status(400).send("Invalid Password")

        const token = jwt.sign(
					{
						username: user.name,
						email: user.email,
						password: user.password,
						role: user.role,
					},
					process.env.Secret_Key,
                    {expiresIn:"4h"}
				);


        res.json({message:"Login Successfull" , user,token})

}

