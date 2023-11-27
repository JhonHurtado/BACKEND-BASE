import {Schema,model} from 'mongoose';
import bcryptjs from 'bcryptjs';
import Role from './roleModel.js';

const userSchema = new Schema({
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    dateBirth:{type:Date, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    course:{type:Number, required:true},
    program:{type:String, required:true},
    numberDocument:{type:String, required:true},
    typeDocument:{type:String, required:true},
    roleId:{type:Schema.Types.ObjectId,ref:Role},
    status:{type:Boolean, default:true}
},{
    versionKey:false,
    timestamps:true
})

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt);
}

userSchema.methods.comparePassword = async function(password,candidatePassword) {
  try {
    console.log()
    return await bcryptjs.compare(password,candidatePassword);
  } catch (error) {
    console.log(error+"dhdhd")
    throw error;
  }
};

export default model('User',userSchema);


/**
 * 
 * Importa "Schema" y "model" de la biblioteca "mongoose". "Schema" se utiliza para definir la estructura de los documentos dentro de una colección de MongoDB y "model" es una clase que construye documentos a partir de esquemas.
 * 
 * Importa "bcryptjs", una biblioteca para hashear y verificar contraseñas.
 * 
 * En la configuración del esquema, se establece "versionKey" en false para evitar que Mongoose añada un campo "__v" al esquema para llevar un registro de las revisiones del documento. También se establece "timestamps" en true para que Mongoose añada automáticamente campos "createdAt" y "updatedAt" al esquema.
 * 
 * Define un método estático "encryptPassword" en el esquema que toma una contraseña, genera un "salt" utilizando "bcryptjs.genSalt", y luego hashea la contraseña utilizando "bcryptjs.hash".
 * 
 * Define un método de instancia "comparePassword" en el esquema que toma una contraseña y una contraseña candidata, y compara las dos contraseñas utilizando "bcryptjs.compare".
 * 
 * Finalmente, se crea y exporta un modelo llamado "User" a partir de "userSchema". Este modelo se puede utilizar para crear y leer documentos de la colección "Users" en MongoDB.
 * 
 */