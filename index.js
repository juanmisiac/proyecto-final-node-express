import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import productsRouter from "./src/routes/products.routes.js";

const app = express();

app.use(cors());
app.use(express.json())

// RUTAS
app.use("/api/products", productsRouter);

app.use((req, res, next) => {
  res.status(404).send('Not found/No encontrado');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor levantado en: http://localhost:${PORT}`));