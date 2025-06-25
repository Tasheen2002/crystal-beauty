import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import studentRouter from "./routes/studentRouter.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";

const mongoURL =
  "mongodb+srv://tasheen:JackCM%403003@cluster0.0ldrk4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL, []);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database is connected");
});

const app = express();

app.use(bodyParser.json());

app.use("/api/students", studentRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
