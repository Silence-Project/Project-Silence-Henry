const { Router } = require("express");
// const { userHandler } = require("../handlers/userHandler");
const {
  postNewUserHandler,
  getLoginUser,
  findUserByEmailOrAll,
  getUserDetailHandler,
  updateUserHandler,
} = require("../handlers/userHandler");
const userRouter = Router();

userRouter.post("/", postNewUserHandler);
userRouter.get("/:id", getUserDetailHandler);
userRouter.get("/", findUserByEmailOrAll);
userRouter.get("/login", getLoginUser);
userRouter.patch("/:id", updateUserHandler);
// userRouter.use("/", userHandler);

module.exports = userRouter;
