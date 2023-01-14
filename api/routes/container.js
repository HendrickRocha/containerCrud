import express from "express";
import {
  getContainer,
  postContainer,
  putContainer,
  deleteContainer,
} from "../controllers/containers.js";

const routes = express.Router();

routes.get("/", getContainer);
routes.post("/", postContainer);
routes.put("/:id", putContainer);
routes.delete("/:id", deleteContainer);

export default routes;
