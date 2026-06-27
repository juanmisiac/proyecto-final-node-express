import { getProductsService } from "../services/products.services.js";
import { getProductsByIdService } from "../services/products.services.js";
import { postProductService } from "../services/products.services.js";

// Procesar solicitud -> Generar respuesta
export const getAllProducts = async (req, res) => {
  try {
    const products = await getProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Error interno del servidor.",
      error: error.message
    });
  }
}

export const getProductsById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await getProductsByIdService(id);
    if (!product) {
      return res.status(404).json({ message: "No se encontro ningun producto con ese id." })
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error interno del servidor.",
      error: error.message
    });
  }
}

export const postProduct = async (req, res) => {
  const { category, name, team, price, stock} = req.body;
  const newProduct = {
    category,
    name,
    team,
    price,
    stock
  }
  try {
    const response = await postProductService(newProduct);
    res.status(200).json({ message: "Producto creado." });
  } catch (error) {
    res.status(500).json({
      message: "Error interno del servidor.",
      error: error.message
    });
  }
}

export const deleteProduct = () => {

}