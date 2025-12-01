import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
	userid: { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true },
	Personal_Info: { type: Array , default:[] },
	Educational_Info: { type: Array , default:[] },
	Professional_info: { type: Array , default:[] },
	Identity_Info: { type: Array , default:[] },
	Review: { type: Array , default:[] },
	submitted: { type: Boolean, required: true, default: false },
	lastsavedpage: { type: String, required: true },
	updatedAt: { type: Date, default: Date.now, required: true }
});

const Form = mongoose.model("Form",FormSchema)

export default Form