import { User } from "../models/users.model.js";
import { object, string } from "zod";
import jwt from "jsonwebtoken";
import { Account } from "../models/accounts.model.js";

const singInSchema = object({
  userName: string().email(),
  password: string(),
});

const signupSchema = object({
  userName: string().email(),
  firstName: string(),
  lastName: string(),
  password: string(),
});

const updateSchema = object({
  password: string().optional(),
  firstName: string().optional(),
  lastName: string().optional(),
});

export const signInUser = async (req, res) => {
  const body = req.body;

  const { success } = singInSchema.safeParse(body);

  if (!success) {
    res.json({
      message: "Username not correct / Invalid Inputs ",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });

    return;
  }

  res.status(411).json({
    message: "Error while logging in / Bad Request ",
  });
};

export const signUpUser = async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req.body);

  if (!success) {
    return res.json({
      message: "Email already taken/ Invalid inputs",
    });
  }

  const existingUser = await User.FindOne({
    userName: body.userName,
  });

  if (existingUser) {
    return res.json({
      message: "Email already taken /incorrect user ",
    });
  }

  const newUser = await User.create({
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  const newUserId = newUser._id;

  await Account.create({
    newUserId,
    balance: 1 + Math.random() * 10000,
  });
  const token = jwt.sign(
    {
      userId: newUser._id,
    },
    JWT_SECRET
  );

  res.json({
    message: "User Created Successfully",
    token: token,
  });
};

export const updateUser = async (req, res) => {
  const { success } = updateSchema.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Update while fetching the user",
    });
  }
  await User.updateOne({ _id: req.userId }, req.body);

  res.status(201).json({
    message: "User Updated Successfully",
  });
};

export const bulkUser = async (req, res) => {
  const filter = req.query.filter || "";
  const filteredUsers = await User.find({
    $or: {
      firstName: {
        $regex: filter,
      },
      lastName: {
        $regex: filter,
      },
    },
  });

  res.json({
    user: filteredUsers.map((user) => ({
      username: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
};
