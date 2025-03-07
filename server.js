import express from "express";
import router from "./routers/userRouter.js";
import { connectDB } from "./DBconnect/DBCOnnect.js";

const app = express();
const PORT = process.env.PORT || 8000;

// MONGODB CONNECTION
connectDB();

// coverted into json file using middleware
app.use(express.json());
// API EndPoints Defined by using middleware
app.use("/api/v1/users", router);

app.get("/", (req, res) => {
  res.json({
    message: "Its live NOW",
  });
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`http://localhost:${PORT}`);
});
