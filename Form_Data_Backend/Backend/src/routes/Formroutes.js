import express from 'express'
import { personal_get, personal_post } from '../controller/FormdataController.js'

const FormRouter = express.Router()

// personal info 

FormRouter.get("/getdata",personal_get)

FormRouter.post("/postdata",personal_post)

export default FormRouter