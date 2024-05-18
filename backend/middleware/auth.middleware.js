import jwt from "jsonwebtoken";
export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const secret = process.env.JWT_SECRET;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secret);

    if (decoded.userId) {
      req.userId = decoded.userId;
      next();
    } else {
      return res
        .status(403)
        .json({ message: "Error in the process of jwt configuration" });
    }
  } catch (err) {
    return res.status(403).json({});
  }
};
