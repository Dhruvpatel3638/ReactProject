import express from "express";
import postRoute from "./routes/posts.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Connected!!");
});
