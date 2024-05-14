const { User } = require("../db/db");
const zod = require("zod");
const jwt = require("jsonwebtoken");

const singInSchema = zod.object({
  userName: zod.string().email(),
  password: zod.string(),
});

const signupSchema = zod.object({
  userName: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

const updateSchema = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

const signInUser = async (req, res) => {
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

const signUpUser = async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req.body);

  if (!success) {
    return res.json({
      message: "Email already taken/ Invalid inputs",
    });
  }

  const user = await User.FindOne({
    userName: body.userName,
  });

  if (user._id) {
    return res.json({
      message: "Email already taken /incorrect user ",
    });
  }

  const dbUser = await User.create(body);
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JWT_SECRET
  );

  res.json({
    message: "User Created Successfully",
    token: token,
  });
};

const updateUser = async (req, res) => {
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

const bulkUser = async (req, res) => {
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
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
};

module.exports = {
  signInUser,
  signUpUser,
  updateUser,
  bulkUser,
};
