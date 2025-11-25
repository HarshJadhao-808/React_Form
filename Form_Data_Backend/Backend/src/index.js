import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cors from "cors";
import UserRouter from "./routes/Userroutes.js";

dotenv.config();
const app = express();

// CORS FIX
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

// BODY PARSER FIX
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

connectDb(process.env.Mongo_Url);

app.use("/user", UserRouter);

app.get("/", (req, res) => {
	res.json("React-Form Backend");
});

// PORT FIX
const Port = process.env.PORT || 5000;
app.listen(Port, () => {
	console.log(`Server running on port ${Port}`);
});
