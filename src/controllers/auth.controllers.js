import { generateToken } from "../utils/token.generator.js";

// PASAR user AL .env !!!
const user = {
  id: 1,
  name: "Juan",
  email: "juanmisiac@gmail.com",
  password: "messi123",
  admin: true,
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Faltan credenciales",
    });
  };

  if (email !== user.email || password !== user.password) {
    return res.status(401).json({
      message: "Credenciales invalidas",
    });
  };

  const token = generateToken(user);

  res.json({
    message: "Login exitoso",
    token,
  });
}