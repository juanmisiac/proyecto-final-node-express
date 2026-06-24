import { Router } from "express";

import { getAllProducts } from "../controllers/products.controllers.js";
import { getProductsById } from "../controllers/products.controllers.js";
import { postProduct } from "../controllers/products.controllers.js";
import { deleteProduct } from "../controllers/products.controllers.js";

const router = Router();

router.get("/", (req, res) => {
  getAllProducts();
})

router.get("/:id", (req, res) => {
  getProductsById();
})

router.post("/create", (req, res) => {
  postProduct();
})

router.delete("/:id", (req, res) => {
  deleteProduct();
})

export default router;