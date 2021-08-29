import express from "express";
import CheckToken from "../../Middleware/CheckToken.js";
import { createCase, allCases } from "./case.controller.js";

const Router = express.Router();

Router.post("/newcase", CheckToken, createCase);
Router.get("/cases", allCases);

export default Router;
