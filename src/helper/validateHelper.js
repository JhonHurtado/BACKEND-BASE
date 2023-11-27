/**
 * archivo de resultados de validaciones 
 * importacion de la funcion  validationResult de la biblioteca express-validator
 * 
 */


import {validationResult} from 'express-validator';


/**
 * definimos una funcion la cual nos permitira recibir la respuesta a la validacion de campo que vamos a realizar
 * recibimos los siguientes parametros en la funcion
 * 
 * @param {en este parametro obtenemos los datos que fueron envado por medio de la peticion} req 
 * @param {por medio de este parametro podemos responder al fron-end segun la respuesta de validacion} res 
 * @param {por medio de este parametro podemos ejecutar la siguiente funcion el la determinada ruta} next 
 * 
 * validationResult(req).throw():
 * esta funcion recibe los datos enviados en el request  y los valida segun el formato que tienen que llevar 
 * si la validacion es exitosa retorna  return next()  y pasa a la ejecucion de la siguiente funcion en la ruta
 * en caso de fallar la validacion  lanzara una excepcion la cual la capturara el catch de manejo de error
 * por medio del catch se respondera al usuario que no ha pasado la validacion de los respectivos campos requeridos
 * 
 */



export const validateResult = (req,res,next)=>{
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        res.status(400).json({message:"Validation error",error})
    }
}