import User from "../models/UserModel.js";

export const delfun = async(req,res) => {
    try {
       const user = await User.findByIdAndDelete(req.params.id)

       
    if (!user) {
			return res.status(404).json({ message: "User not found" });
		}


       res.json({message:"User deleted Successfully"})
    } catch (error) {
        console.log(error)
    }
}