import Form from "../models/FormData.js";


// personal_info controller

export const  personal_get = (req,res) => {
    res.json({status:"working"})
}

export const personal_post = async(req,res) => {
    const { userid, personal_info, lastsavedpage } = req.body;

    const userexists = await Form.findOne({userid})

    if(!userexists){
    const data = await Form.create({
       User : userid,
       personal_info,
       lastsavedpage
    })
    }
    res.json({message:"data saved",})
}