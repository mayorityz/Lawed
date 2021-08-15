import express from "express";
import CheckToken from "../../Middleware/CheckToken.js";
import {
  CreateNewAccount,
  FindUser,
  checkUserToken,
} from "./user.controller.js";

const Router = express.Router();

Router.post("/register", CreateNewAccount);
Router.post("/login", FindUser);
Router.get("/check", CheckToken, checkUserToken);

export default Router;
