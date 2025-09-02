import express from "express";
import { addFood, listfood, removefood } from "../controllers/foodController.js";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js";
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

// Cart routes
foodRouter.post("/cart/add", addToCart);
foodRouter.post("/cart/remove", removeFromCart);
foodRouter.post("/cart/get", getCart); // <-- new route

export default foodRouter;
