import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../config/config.js";

export const validateToken = async (req, res, next) => {
  try {
    const token = req.headers["access-token"];
    if (!token) {
      return res.status(400).json("No existe el token");
    }

    const decodeToken = jwt.verify(token, SECRET_JWT);
    req.idUsuario = decodeToken.id;
    next();
  } catch (error) {
    return res.status(400).json("!No autorizado!")
  }
};

/**
 * Importa el módulo "jsonwebtoken" que se utiliza para trabajar con tokens JWT.
 * 
 * Importa la constante "SECRET_JWT" del archivo de configuración "../config/config.js". Esta constante contiene la clave
 * secreta utilizada para firmar y verificar los tokens JWT.
 * Define una función llamada "validateToken" que toma tres parámetros: "req" (la solicitud entrante), "res" (la respuesta
 * de la solicitud) y "next" (una función para pasar al siguiente middleware o controlador).
 * 
 * Dentro de la función "validateToken": 
 * Obtiene el token de acceso de los encabezados de la solicitud utilizando la clave "access-token".
 * 
 * Si no se proporciona ningún token, devuelve una respuesta de estado 400 con el mensaje "No existe el token".
 * 
 * Verifica el token utilizando la función "verify" del módulo "jsonwebtoken" y la clave secreta "SECRET_JWT". 
 * 
 * Si la verificación es exitosa, el token se decodifica y se almacena en la variable "decodeToken".
 * 
 * Asigna el ID de usuario decodificado  a la propiedad "idUsuario" del objeto "req".
 * 
 * Llama a la función "next" para pasar al siguiente middleware o controlador.
 * 
 */
