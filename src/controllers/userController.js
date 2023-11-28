import UserModel from '../models/userModel.js';

/**
 * 
 * @param {la solicitud HTTP} req 
 * @param {la respuesta HTTP} res
 * 
 * Extrae los datos del cuerpo de la solicitud y los almacena en la variable "data".
 *  
 * Llama al método estático "encryptPassword" del modelo "UserModel" para encriptar la contraseña proporcionada en los datos. Almacena la contraseña encriptada en la variable "password".
 * 
 * Crea una nueva instancia del modelo "UserModel" con los datos proporcionados y almacena la instancia en la variable "user".
 * 
 * Asigna la contraseña encriptada al campo "password" de la instancia del usuario.
 * 
 * Guarda la instancia del usuario en la base de datos utilizando el método "save".
 * 
 * Envía una respuesta con el estado 200 y un objeto JSON que contiene un mensaje de éxito y los datos del usuario.
 */

export const createUser = async(req,res)=>{
    try {
        const data = req.body
        console.log(data)
        const password = await UserModel.encryptPassword(data.password)
        const user = new UserModel(data)
        user.password = password
        await user.save()
        res.status(200).json({message:'User created successfully', user});
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"unable to register user",error:error});
    }
}


/**
 * 
 * Llama al método "find" del modelo "UserModel" para obtener todos los usuarios de la base de datos. Almacena los usuarios encontrados en la variable "usersFound".
 * 
 * Si no se encontraron usuarios (es decir, "usersFound" es nulo o vacío), envía una respuesta con el estado 200 y un objeto JSON que contiene un mensaje indicando que no se encontraron usuarios y la variable "usersFound".
 * 
 * Si se encontraron usuarios, envía una respuesta con el estado 200 y un objeto JSON que contiene un mensaje indicando que se encontraron usuarios y la variable "usersFound".
 * 
 * Si se produce un error durante cualquiera de las operaciones anteriores, se captura en el bloque "catch". Dentro de este bloque, envía una respuesta con el estado 500 y un objeto JSON que contiene un mensaje de error y el error capturado.
 * 
 */


export const getUsers = async(req,res)=>{
    try {
        const usersFound = await UserModel.find()
        if(!usersFound){
            res.status(200).json({message:"Users empty",usersFound});
        }
        res.status(200).json({message:"Users found",usersFound});

    } catch (error) {
        res.status(500).json({message:"unable to get users",error});
    }
}



/**
 * 
 * Extrae el ID del usuario de los parámetros de la solicitud y lo almacena en la variable "id".
 * 
 * Llama al método "findById" del modelo "UserModel" para obtener el usuario con el ID proporcionado de la base de datos
 * 
 * Almacena el usuario encontrado en la variable "userFound".
 * 
 * Si no se encontró el usuario (es decir, "userFound" es nulo), envía una respuesta con el estado 200 y un objeto JSON que contiene un mensaje indicando que no se encontró el usuario y la variable "userFound".
 * 
 * Si se encontró el usuario, envía una respuesta con el estado 200 y un objeto JSON que contiene un mensaje indicando que se encontró el usuario y la variable "userFound".
 * 
 * Si se produce un error durante cualquiera de las operaciones anteriores, se captura en el bloque "catch". Dentro de este bloque, envía una respuesta con el estado 500 y un objeto JSON que contiene un mensaje de error y el error capturado.
 *  
 */
export const getUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const userFound = await UserModel.findById(id);
        if(!userFound){
            res.status(200).json({message:"User not found",userFound});
        }
        res.status(200).json({message:"User found",userFound});
    } catch (error) {
        res.status(500).json({message:"unable to get user",error});
    }
}



/**
 * 
 * Extrae los datos del cuerpo de la solicitud y los almacena en la variable "data".
 * 
 * Extrae el ID del usuario de los parámetros de la solicitud y lo almacena en la variable "id".
 * 
 * Llama al método "updateOne" del modelo "UserModel" para actualizar el usuario con el ID proporcionado en la base de datos. Los nuevos datos del usuario se proporcionan en el segundo argumento de "updateOne". Almacena el resultado de la operación de actualización en la variable "updatedUser".
 * 
 * Envía una respuesta con el estado 200 y un objeto JSON que contiene un mensaje de éxito y los datos del usuario actualizado.
 * 
 * Si se produce un error durante cualquiera de las operaciones anteriores, se captura en el bloque "catch". Dentro de este bloque, envía una respuesta con el estado 500 y un objeto JSON que contiene un mensaje de error y el error capturado.
 */

export const updateUser = async(req,res)=>{
    try {
        const data = req.body
        const id = req.params.id
        
        const updatedUser = await UserModel.updateOne({"_id":id},{$set:{...data}})
        res.status(200).json({message:'User updated successfully', updatedUser});

    } catch (error) {
        res.status(500).json({message:"unable to update user",error});
    }
}



/**
 * 
 * Extrae el ID del usuario de los parámetros de la solicitud y lo almacena en la variable "id".
 * 
 * Llama al método "findByIdAndDelete" del modelo "UserModel" para eliminar el usuario con el ID proporcionado de la base de datos. Almacena el usuario eliminado en la variable "deletedUser".
 * 
 * Envía una respuesta con el estado 200 y un objeto JSON que contiene un mensaje de éxito y los datos del usuario eliminado.
 * 
 * Si se produce un error durante cualquiera de las operaciones anteriores, se captura en el bloque "catch". Dentro de este bloque, envía una respuesta con el estado 500 y un objeto JSON que contiene un mensaje de error y el error capturado.
 * 
 */

export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id
        const deletedUser = await UserModel.findByIdAndDelete(id)
        res.status(200).json({message:'User deleted successfully', deletedUser});
    } catch (error) {
        res.status(500).json({message:"unable to delete user",error});
    }
}

