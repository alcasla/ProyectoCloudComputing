//Requerimientos + DB
var querystring = require("querystring");
var fs = require("fs");
//Obtenemos servicio de sqlite3 y creamos la base de datos vacía
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('usuarios.db');

var DBcreator = require('./DBcreator.js');


//Función para comprobar si la base de datos está creada
exports.DBexists = function() 
{
	var existe,
		file = "usuarios.db";

	try //Comprobamos si existe el archivo de la DB
	{ existe = fs.statSync(file).isFile(); } 
	catch (error) 
	{ existe = false; }

	return existe;
}


//Función responde a petición index
exports.index = function(request, response) 
{
	response.render('pages/index');
	DBcreator.init(db);
}

//Función responde a petición nuevo usuario
exports.newUser = function(request, response) 
{
	var nombre = request.body.nombre,
	    apellidos = request.body.apellidos,
		email = request.body.email,
		contraseña = request.body.contraseña;

	if(nombre!='' && apellidos!='' && email!='' && contraseña!='')
	{
		var stmt = db.prepare('INSERT INTO users VALUES (?,?,?,?)');
		stmt.bind(nombre, apellidos, email, contraseña);
		stmt.get(function(error, res)
			{
				if(error) response.send('Error registrando usuario');
				else response.send('Nuevo usuario registrado');
			});
	}
	else
		response.send('Por favor, rellene todos los campos');
}

//Función responde a petición eliminar usuario
exports.deleteUser = function(request, response) 
{
	var nombre = request.body.nombre,
		contraseña = request.body.contraseña;
	
	if(nombre!='' && contraseña!='')
	{
		db.each("SELECT count(*) AS numrows FROM users WHERE nombre='"+nombre+"' AND contraseña='"+contraseña+"'" , function(err, rows)
		{
			if(rows.numrows > 0)
			{
				var stmt = db.prepare('DELETE FROM users WHERE nombre=? AND contraseña=?');
				stmt.bind(nombre, contraseña);
				stmt.get(function(error, res)
					{
						if(error) response.send('Error eliminando usuario');
						else response.send('Usuario eliminado');
					});
			}
			else
				response.send('Usuario inexistente');
		});
		
	}
	else
		response.send('Por favor, rellene todos los campos');

}