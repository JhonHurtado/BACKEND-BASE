/**
 * archivo de configuracion de variables de entorno
 * para su utilizacion
 * 
 * importamos la libreria dotenv, de la cual solo extraemos la funcion Config que nos permitira por medio
 * de su ejecucion acceder a las varibles definidas en el archivo .env
 */


import {config} from 'dotenv';
config();

/**
 * exportamos individualmente cada constante con el valor de la variable de etorno configurada en el archivo .env
 * la cual accedemos mediante el comando "process.env.NOMBRE_VARIABLE_ENTORNO" y la almacenamos 
 * en la constante que vamos a exportar.
 * 
 * en caso de que no se encuentre una varible definida podemos dar un valor alternativo con el simbolo "||" seguido del 
 * valor a asignar
 * 
 */

export const PORT = process.env.PORT || 3000
export const MONGO_URL = process.env.MONGO_URL
export const SECRET_JWT = process.env.SECRET_JWT
export const CLOUD_NAME = process.env.CLOUD_NAME
export const API_KEY = process.env.API_KEY
export const API_SECRET = process.env.API_SECRET
