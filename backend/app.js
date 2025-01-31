import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "100kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "100kb",
  })
);

app.use(express.static("public"));

app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

import userRouter from "./src/routes/User.routes.js";

//router
app.use("/api/v1/auth", userRouter);

export default app;
