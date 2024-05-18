import mongoose from "mongoose";
import { Account } from "../models/accounts.model.js";

export const getAccountBalance = async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });
  res.status(200).json({
    balance: account.balance,
  });
};

export const transferPayment = async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();
  const { to, amount } = req.body;

  const account = await Account.findOne({ userId: req.userId }).session(
    session
  );
  console.log("From Account", account);

  if (!account || account.balance < amount) {
    return res.status(400).json({
      message: "Insufficient Balance",
    });
  }

  const toAccount = await Account.findOne({ userId: to }).session(session);
  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid Account",
    });
  }
  console.log("To Account", toAccount);

  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);

  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  await session.commitTransaction();

  return res.status(201).json({ message: "Transfer is successful" });
};
