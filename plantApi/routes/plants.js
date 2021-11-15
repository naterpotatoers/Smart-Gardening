import express from "express";
import {
  getPlants,
  createPlant,
  getPlant,
  deletePlant,
  updatePlant,
} from "../plants.js";

const router = express.Router();

/*
End Points for /plants 
*/

router.get("/", getPlants);

router.post("/", createPlant);

/*
End Points for /plants/id 
*/

router.get("/:id", getPlant);

router.delete("/:id", deletePlant);

router.patch("/:id", updatePlant);

export default router;
