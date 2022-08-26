import "dotenv/config"; // env vars import

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import bodyParser from "body-parser";
import path from "path";

import userRouter from "../../server/routes/userRouter";
import postRouter from "../../server/routes/postRouter";

// __dirname TS replacement
// const filename = fileURLToPath(import.meta.url);

// express constants
const app: express.Application = express();
const PORT: number | string = process.env.PORT || 3000;

// basic middleware
app.use(cors());
app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());

// serve static files
if (process.env.NODE_ENV?.trim() === "production") {
  app.use(express.static(path.join(__dirname, "../../build")));
} else {
  app.use(express.static(path.join(__dirname, "../client/")));
}

// routes here
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);

export default app;
