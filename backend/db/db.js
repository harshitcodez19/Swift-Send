const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGODB_URI}/swiftsend`);

const connectDb = async () => {
  try {
    const connectionInstance = await mongooose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "\n Mongo Db connected Successfully",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Error occured in Database connection ", error);
  }
};

const userSchema = {
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
};

const accountSchema = {
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    required: true,
    type: Number,
  },
};

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);
module.exports = {
  User,
  Account,
  connectDb
};
