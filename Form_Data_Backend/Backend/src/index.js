import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cors from 'cors'
import UserRouter from './routes/Userroutes.js'
import User from './models/UserModel.js'
import tokencheck from './middleware/Authcontroller.js'
dotenv.config()
const app = express()
app.use(
	cors({ 
		methods: "GET,POST,PUT,DELETE,OPTIONS",
		credentials: true,
	})
);
app.use(express.json())
connectDb(process.env.Mongo_Url);

app.use("/user",UserRouter)


app.get("/", (req,res)=>{
    res.send("React-Form Backend")
})

const Port=process.env.PORT
app.listen(Port,()=>{
    console.log(`server is running on http://localhost:${Port}`)
})