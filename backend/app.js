const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);

app.use(express.json({ limit: "16kb" }));
// app.use(cookieParser());

const userRoutes = require("./routes/user.routes.js");

app.use("api/v1/users", userRoutes);
