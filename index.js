//importacion de archivo app que contiene la configuracion del servidor
//importar la varible PORT que contiene la configuracion del puerto en el cual escuchara el servidor

import app from './src/app/app.js';
import {PORT} from './src/config/config.js';


//ruta por defecto que utiliza el servidor para cualquier endpoint que no exista o el endpoint base 
app.use((req, res, next) => {
    return res.status(200).json("Welcome to StudyBuddy");
  });
  

//inicializacion del servidor escuchando en el puerto definido en el archivo de configuraciones
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);

})


//archivo principal de servidor. index.js configurado en el archivo package.json

