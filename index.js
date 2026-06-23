import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

// RUTAS

app.use((req, res, next) => {
  res.status(404).send('Not found/No encontrado');
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Servidor levantado en: http://localhost:${PORT}`));