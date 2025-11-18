import mongoose from "mongoose";

const connectDb = async (url) => {
    try {
        await mongoose.connect(url)
        console.log("DB Connected")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb