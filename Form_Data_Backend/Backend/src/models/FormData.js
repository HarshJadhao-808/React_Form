import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
	User: { type:String},
	Personal_Info: { type: Object , default:{} },
	Educational_Info: { type: Object , default:{} },
	Professional_Info: { type: Object , default:{} },
	Identity_Info: { type: Object , default:{} },
	Review: { type: Object , default:{} },
	submitted: { type: Boolean, required: true, default: false },
	lastsavedpage: { type: String, required: true },
	updatedAt: { type: Date, default: Date.now, required: true }
});

const Form = mongoose.model("Form",FormSchema)

export default Form