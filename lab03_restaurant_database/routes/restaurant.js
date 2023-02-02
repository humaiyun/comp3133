import express from "express";
import { getAllRestaurants, getByDelicatessen, getRestaurantsByCuisine } from "../controllers/restaurants.js";

const router = express.Router();

router.get("/", getAllRestaurants);
router.get("/cuisine/:cuisineName", getRestaurantsByCuisine);
router.get("/Delicatessen", getByDelicatessen);

export default router;