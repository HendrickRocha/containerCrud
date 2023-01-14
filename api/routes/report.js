import express from "express";
import {
  getReport
} from "../controllers/reports.js";

const routes = express.Router();

routes.get("/report", getReport);

export default routes;