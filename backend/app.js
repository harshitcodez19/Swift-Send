import express, { json } from "express";
import cors from "cors";

export const app = express();
app.use(
  cors({
    origin: '*',
  })
);
app.use(json({ limit: "16kb" }));

import userRoutes from "./routes/user.routes.js";
import accountRoutes from "./routes/account.routes.js";

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/account", accountRoutes);
