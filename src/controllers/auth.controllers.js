import { generateToken } from "../utils/token.generator.js";

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Faltan credenciales",
    });
  };

  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({
      message: "Credenciales invalidas",
    });
  };

  const tokenPayload = {
    email: process.env.ADMIN_EMAIL,
    admin: true
  };

  const token = generateToken(tokenPayload);

  res.json({
    message: "Login exitoso",
    token,
  });
}