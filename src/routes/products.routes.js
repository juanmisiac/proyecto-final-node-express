import { Router } from "express";
import {
  getAllProducts,
  getProductsById,
  postProduct,
  deleteProduct
} from "../controllers/products.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", getProductsById);

router.post("/create", auth, postProduct);

router.delete("/:id", auth, deleteProduct);

export default router;