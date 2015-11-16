//Función de inicilización de la base de datos
function init(db) 
{
  console.log("Inicialización de la BD");
  
  //Crea tabla contender de empresas, alumnos y calificaiones
  db.run("CREATE TABLE if not exists users (nombre VARCHAR(25) PRIMARY KEY, apellidos VARCHAR(25), email VARCHAR(25), contraseña VARCHAR(25))");
}

exports.init = init;