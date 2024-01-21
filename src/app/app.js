//importar dependencia que se necesitan para la configuracion del servido
//express: framework de servidor 
//Cors: configuracion para permitir la onexion a un cliente al servidor
//morgan: configuracion para mostrar en consola las peticiones que se realizan al servidor

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// import database
import '../database/db.js';


/**
 * importar helpers que hacen acciones al iniciarse el servidor 
 * ejemplo:
 * crear roles en a base de datos
 */
import '../helper/createRole.js';


// import route user
import user from '../routes/userRouter.js';




/**
 * configuracion de servidor
 * ejecucion de servidor y almacenar en constante
 * 
 * dar parametros que va a usar el servidor
 * 
 * cors: permite conexiona a backend desde un lugar o cliente
 * 
 * morgan: permite ver las peticiones entrantes al backend 
 * desde modo de desarrollo
 * 
 * express.json(): Esto permite a los manejadores de rutas acceder a los datos del cuerpo de la petición en formato JSON.
 * 
 * express.urlencoded({ extended: true }):  es útil cuando se necesitan analizar datos complejos en formato URL-encoded.
 *  
 */

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * app.use("/",function): define una ruta y ejecuta su manejador de rutas 
 * user: rutas definidas para un usuario
 * ejemplo:
 *          obtener usuarios
 *          crear usuarios
 *          actualizar usuarios
 *          eliminar usuarios
 */

app.use('/api', user );


/**
 * exportacion por defecto del archivo de configuracion del servidor
 */

export default app;