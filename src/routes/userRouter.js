import {Router} from 'express';
import {createUser,deleteUser,getUser,getUsers,updateUser} from '../controllers/userController.js';
import {validateUser} from '../validators/user.js';

const router = Router();

router.get('/user', getUsers)
router.get('/user/:id',getUser )
router.post('/user',validateUser, createUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

export default router;

/**
 * 
 * Importa "Router" de la biblioteca "express". "Router" es una clase en Express.js que se utiliza para crear manejadores de rutas montables y modulares.
 * 
 * Importa varias funciones del archivo "userController.js". Estas funciones son controladores para manejar las solicitudes HTTP relacionadas con los usuarios.
 * 
 * Importa la función "validateUser" del archivo "user.js". Esta función es un middleware que se utiliza para validar las solicitudes de creación de usuarios.
 * 
 * Crea una nueva instancia de "Router".
 * 
 * Define varias rutas para el router:
 * 
 * Una ruta GET para "/" que utiliza el controlador "getUsers" para obtener todos los usuarios.
 * 
 * Una ruta GET para "/:id" que utiliza el controlador "getUser" para obtener un usuario específico por su ID.
 * 
 * Una ruta POST para "/" que utiliza el middleware "validateUser" para validar la solicitud y luego el controlador "createUser" para crear un nuevo usuario.
 * 
 * Una ruta PUT para "/:id" que utiliza el controlador "updateUser" para actualizar un usuario específico por su ID.
 * 
 * Una ruta DELETE para "/:id" que utiliza el controlador "deleteUser" para eliminar un usuario específico por su ID.
 * 
 * Finalmente, exporta el router para que pueda ser utilizado en otros archivos.
 */