import express from 'express'
import { educational_get, educational_post, identity_get, identity_post, personal_get, personal_post, professional_get, professional_post, Review_get, Review_post } from '../controller/FormdataController.js'
import tokencheck from '../middleware/Authcontroller.js'

const FormRouter = express.Router()

// personal info 

FormRouter.get("/personal_info",personal_get)

FormRouter.post("/personal_info",tokencheck,personal_post)

// educational info

FormRouter.get("/educational_info",educational_get)

FormRouter.post("/educational_info",tokencheck,educational_post)

// professional info

FormRouter.get("/professional_info",professional_get)

FormRouter.post("/professional_info",tokencheck,professional_post)

// identity info

FormRouter.get("/identity_info",identity_get)

FormRouter.post("/identity_info",tokencheck,identity_post)

// Review 

FormRouter.get("/review_info",Review_get)

FormRouter.post("/review_info",tokencheck,Review_post)


export default FormRouter