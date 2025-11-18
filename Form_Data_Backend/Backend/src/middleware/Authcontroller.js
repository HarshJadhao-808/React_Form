import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config()
const tokencheck = async(req,res,next) => {
    let token = req.headers.authorization 
    if(!token) return res.status(500).send("Login required")

        const decoded = jwt.verify(token,process.env.Secret_Key);
        req.user = decoded
        console.log(req.user)
        next()

}

export default tokencheck