import express from "express";
import getRestraunt from "./controller";
const routeRestraunt = express.Router();

routeRestraunt.get("/", getRestraunt);

export default routeRestraunt;
