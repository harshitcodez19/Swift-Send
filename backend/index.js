import { app } from "./app.js";
import { connectDb } from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`The Server is running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB Connection failed !!!!", err);
  });
