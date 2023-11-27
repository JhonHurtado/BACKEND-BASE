import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

export const validateRole = [
  check("name", "name is required").not().isEmpty().isString(),
  check("description", "description is required").not().isEmpty().isString(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];


/**
 * 
 * Importa la función "check" de la biblioteca "express-validator". Esta función se utiliza para validar los campos de las solicitudes HTTP.
 * 
 * Importa la función "validateResult" del archivo "validateHelper.js". Esta función se utiliza para manejar los resultados de la validación.
 * 
 * Exporta un array llamado "validateRole" que contiene varias funciones de validación y una función para manejar los resultados de la validación.
 * 
 * La primera función de validación verifica que el campo "name" de la solicitud no esté vacío y sea una cadena de texto. Si no se cumple alguna de estas condiciones, se devuelve el mensaje "name is required".
 * 
 * La segunda función de validación verifica que el campo "description" de la solicitud no esté vacío y sea una cadena de texto. Si no se cumple alguna de estas condiciones, se devuelve el mensaje "description is required".
 * 
 * La última función en el array es un middleware que toma los objetos "req", "res" y "next" como parámetros y llama a la función "validateResult" con estos parámetros. Esta función se encarga de manejar los resultados de la validación y enviar una respuesta adecuada al cliente.
 * 
 * Este middleware "validateRole" se puede utilizar en las rutas de Express.js para validar las solicitudes de creación y actualización de roles.
 */