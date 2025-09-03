import express from "express";
import { addFood, listfood, removefood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Food routes
foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listfood);
foodRouter.post("/remove", removefood);

export default foodRouter;
