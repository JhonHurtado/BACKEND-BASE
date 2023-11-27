/**
 * archivo de creacion automatica de roles en la base de  datos 
 * 
 * importamos el modelo que vamos a utiliza para la respectiva creacion
 * 
 */

import Role from '../models/roleModel.js';


/**
 * realizamos una funcion asincrona la cual utlizaremos para la creacion de roles
 * 
 * por primero paso definimos la estructura try-catch para el manejo de errores
 * 
 * luego realizamos una consulta al modelo que importamos y verificamos mediante una condicion si la consulta
 * contiene documentos creados
 * 
 * si se encuentra documento se retorna la creacion y se dejan los docuemntos encontrados
 * 
 * en caso de no haber documentos creados procedemos a hacer una promesa la cual nos ayudara a crear los roles
 * correspondientes
 * 
 * dentro de la promesa insertamos los Roles a crear con su respectiva estructura del modelo
 * 
 * en caso de que los Roles se hayan creado se imprimira el console.log de los datos insertados
 * 
 * en caso de ocurrir un error se imprimira el console.log que se encuentra en el catch que maneja el error
 * 
 */


(async()=>{
try {
    const role = await Role.find()
    if(role.length>0) return;
    const values = await Promise.all([
        new Role({name:'Estudiante',description:'Estudiante role'}).save(),
        new Role({name:'Docente',description:'Docente role'}).save(),
    ])
    console.log(values);

} catch (error) {
    console.log(error);
}
})()