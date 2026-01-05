import express from "express";
import morgan from "morgan";
import cors from "cors";

import {
  authRouter,
  consultantsRouter,
  nursesRouter,
} from "./modules/index.js";

export default async function bootstrap() {
  const app = express();

  app.use(cors());

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("combined"));
  }

  app.use(express.json());

  //auth router
  app.use("/auth/admin", authRouter);

  app.use("/consultants", consultantsRouter);

  app.use("/nurses", nursesRouter);

  app.use((err, req, res, next) => {
    return res.status(err.statusCode ?? 500).json({
      status: "error",
      message:
        process.env.NODE_ENV === "development"
          ? err.message
          : "error from server",
      isOperational: err.isOperational,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  });

  app.listen(process.env.PORT, (error) => {
    if (error) return console.log("can't make error");
    console.log("server is running on port 3000 🚀🚀");
  });
}
