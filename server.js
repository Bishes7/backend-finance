import express from "express";
import userRouter from "./routers/userRouter.js";
import { connectDB } from "./DBconnect/DBCOnnect.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

console.log(process.env.JWT_KEY);

// MONGODB CONNECTION
connectDB();
// CORS Middleware to access backend API
app.use(cors());

// coverted into json file using middleware
app.use(express.json());

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Its live NOW",
  });
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
