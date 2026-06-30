import * as productModel from "../models/product.model.js";

export const getProductsService = async () => {
  try {
    const products = await productModel.getAllProducts();
    return products;
  } catch (error) {
    throw error;
  }
}

export const getProductsByIdService = async (id) => {
  try {
    const product = await productModel.getProductById(id);
    return product;
  } catch (error) {
    throw error;
  }
}

export const postProductService = async (product) => {
  try {
    const response = await productModel.saveProduct(product);
    return response;
  } catch (error) {
    throw error;
  }
}

export const deleteProductService = async (id) => {
  try {
    await productModel.deleteProduct(id);
  } catch (error) {
    throw error;
  }
}