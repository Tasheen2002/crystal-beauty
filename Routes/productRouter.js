import express from "express";

import {
  getProducts,
  createProducts,
  deleteProducts,
  getProductsByName,
  deleteProductsByName
} from "../controller/productController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.post("/", createProducts);

productRouter.delete("/", deleteProducts);

productRouter.get("/:name", getProductsByName);

productRouter.delete("/:name", deleteProductsByName);

export default productRouter;
