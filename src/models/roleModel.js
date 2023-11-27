import {Schema,model} from 'mongoose';

const roleSchema = new Schema({
    name:{type:String, required:true},
    description:{type:String, required:true}
},{
    versionKey:false,
    timestamps:true
})

export default model('Role',roleSchema);


/**
 * Importa "Schema" y "model" de la biblioteca "mongoose". "Schema" se utiliza para definir la estructura de los documentos dentro de una colección de MongoDB y "model" es una clase que construye documentos a partir de esquemas.
 * 
 * Define un nuevo esquema llamado "roleSchema". Este esquema tiene dos campos: "name" y "description", ambos de tipo String y requeridos.
 * 
 * En la configuración del esquema, se establece "versionKey" en false para evitar que Mongoose añada un campo "__v" al esquema para llevar un registro de las revisiones del documento. También se establece "timestamps" en true para que Mongoose añada automáticamente campos "createdAt" y "updatedAt" al esquema.
 * 
 * Finalmente, se crea y exporta un modelo llamado "Role" a partir de "roleSchema". Este modelo se puede utilizar para crear y leer documentos de la colección "Roles" en MongoDB
 */