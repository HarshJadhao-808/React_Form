import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cors from "cors";
import UserRouter from "./routes/Userroutes.js";

dotenv.config();
const app = express();

app.use(
	cors({
		origin: ["http://localhost:5173", "https://fillit-one.vercel.app/"],
		methods: ["GET", "POST", "PUT", "DELETE"],
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb(process.env.MONGO_URL);

app.get("/", (req, res) => {
	res.status(200).json("Backend Running");
});

app.use(
	"/user",
	(req, res, next) => {
		console.log("Request:", req.method, req.url, req.body);
		next();
	},
	UserRouter
);

const Port = process.env.PORT || 5000;
app.listen(Port, () => {
	console.log(`Server running on port ${Port}`);
});
