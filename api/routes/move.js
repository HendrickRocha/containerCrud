import express from "express";
import {
  getMove,
  postMove,
  putMove,
  deleteMove,
} from "../controllers/moves.js";

const routes = express.Router();

routes.get("/move", getMove);
routes.post("/move", postMove);
routes.put("/move/:id", putMove);
routes.delete("/move/:id", deleteMove);

export default routes;
