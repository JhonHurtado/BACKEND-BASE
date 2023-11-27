/**
 * archivo de conexion  a base de datos
 * 
 * importacion de ORM para manejo de la conexion a la base de datos ( MONGODB )
 * importacion de constante de variable de string de conexion a la base de
 * datos
 */

import mongoose from 'mongoose';
import {MONGO_URL} from '../config/config.js';


/**
 * Ejecutamos una funcion asincrona la cual se llama a si misma en la cual definimos la conexion 
 * 
 *  mongoose.set("strictQuery", true): medida de seguridad para que no permita guardar datos en un
 * documento si no esta especificado el campo en el modelo correspondiente
 * 
 * const db = await mongoose.connect(MONGO_URL): hacemos la conexion a la base de datos pasandole a la funcion connect 
 * la url de la base de datos que nos vamos a conectar
 * 
 * en caso de que la conexion sea exitosa se imprimira el console.log definido
 * en caso de que la conexion falle se imprimira el error en el apartado del catch que maneja el erro
 * 
 */


(async()=>{
    try {
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(MONGO_URL);
        console.log(`Conectado Correctamente a ${db.connection.name}`);
    } catch (error) {
        console.log(error);
    }
})()

