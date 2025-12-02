import mongoose from "mongoose";
import Form from "../models/FormData.js";


// personal_info controller

export const  personal_get = async(req,res) => {
    const userid = req.user.id
    const userexists = await Form.findOne({User:userid})

    if(!userexists) res.json({message:"User not Found"})

    res.json({UserData : userexists.Personal_Info})
    // res.json({message:"working"})
}

export const personal_post = async(req,res) => {
    const { UserData, PageName } = req.body;
    const userid = req.user.id
    const userexists = await Form.findOne({User : userid})

    if(!userexists){
    const data = await Form.create({
			User: userid,
			Personal_Info: UserData,
			lastsavedpage: PageName,
		});
        res.json({message:"data saved",data})
    }

    userexists.Personal_Info = UserData
    userexists.lastsavedpage = PageName;

    const data = await userexists.save()

    res.json({message:"data saved",data})
}

// Educational info


export const educational_get = async (req, res) => {
	const userid = req.user.id;
	const userexists = await Form.findOne({ User: userid });

	if (!userexists) res.json({ message: "User not Found" });

	res.json({ UserData: userexists.Educational_Info });
	// res.json({message:"working"})
};

export const educational_post = async(req,res) => {
    const {UserData,PageName} = req.body
    const userid = req.user.id
    const userexists = await Form.findOne({User:userid})
    if(!userexists){
        const data = await Form.create({
            User:userid,
            Educational_Info:UserData,
            lastsavedpage:PageName
        })
        res.json({message : "Data saved" , data})
    }

    userexists.Educational_Info = UserData
    userexists.lastsavedpage = PageName;
    userexists.save()
    res.json({message:"data updated",userexists})
}

// Professional info

export const professional_get = async (req, res) => {
	const userid = req.user.id;
	const userexists = await Form.findOne({ User: userid });

	if (!userexists) res.json({ message: "User not Found" });

	res.json({ UserData: userexists.Professional_Info });
	// res.json({message:"working"})
};

export const professional_post = async(req,res) => {
    const { UserData, PageName } = req.body;
    const userid = req.user.id

    const userexists = await Form.findOne({User : userid})

    if(!userexists){
        const data = await Form.create({
            User : userid,
            Professional_Info:UserData,
            lastsavedpage:PageName
        })
        res.json({message:"data saved" , data})
    }
     
    userexists.Professional_Info = UserData
    userexists.lastsavedpage = PageName;
    userexists.save()

    res.json({message:"data updated" , userexists})
}

// identity info

export const identity_get = async (req, res) => {
	const userid = req.user.id;
	const userexists = await Form.findOne({ User: userid });

	if (!userexists) res.json({ message: "User not Found" });

	res.json({ UserData: userexists.Identity_Info });
	// res.json({message:"working"})
};

export const identity_post = async(req,res) => {
    const { UserData, PageName } = req.body;
    const userid = req.user.id

    const userexists = await Form.findOne({User : userid})

    if(!userexists){
        const data = await Form.create({
            User : userid,
            Identity_Info:UserData,
            lastsavedpage:PageName
        })
        res.json({message:"data saved" , data})
    }
     
    userexists.Identity_Info = UserData
    userexists.lastsavedpage = PageName;
    userexists.save()

    res.json({message:"data updated" , userexists})
}

// Review info

export const Review_get = async (req, res) => {
	const userid = req.user.id;
	const userexists = await Form.findOne({ User: userid });

	if (!userexists) res.json({ message: "User not Found" });

	res.json({ UserData: userexists.Review});
	// res.json({message:"working"})
};

export const Review_post = async(req,res) => {
    const { UserData, PageName } = req.body;
    const userid = req.user.id

    const userexists = await Form.findOne({User : userid})

    if(!userexists){
        const data = await Form.create({
            User : userid,
            Review:UserData,
            lastsavedpage:PageName
        })
        res.json({message:"data saved" , data})
    }
     
    userexists.Review = UserData
    userexists.lastsavedpage = PageName;
    userexists.save()

    res.json({message:"data updated" , userexists})
}

