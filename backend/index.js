const connectDb = require("./db/db.js");
const dotenv = require("dotenv");
const app = require("./app.js");

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
