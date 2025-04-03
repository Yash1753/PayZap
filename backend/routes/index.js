const express = require("express");

const router = express.Router();
const userRouter = require("./user");
const acccountRouter = require("./account")

router.use("/user",userRouter);

router.use("/account",acccountRouter);


module.exports = router;
