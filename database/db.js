const mysql = require('mysql2');
const conexion = mysql.createConnection({
    //host     : 'localhost',   
    host     : 'mysqlc', //aca le puse mysqlc porque cuando creo un contenedor de este crud, le tengo que pasar como host el nombre del contenedor que cree de mysql.
    user     : 'root',
    password : 'root',
    database : 'crud_nodejs'  
});
conexion.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      console.log("sigue habiendo un error con la base de datos supongo.");
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });
module.exports = conexion;