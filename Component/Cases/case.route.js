import express from "express";
import CheckToken from "../../Middleware/CheckToken.js";
import { createCase } from "./case.controller.js";

const Router = express.Router();

Router.post("/newcase", CheckToken, createCase);

export default Router;
