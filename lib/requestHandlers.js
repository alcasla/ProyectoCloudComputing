//Requerimientos + DB
var querystring = require("querystring");
var fs = require("fs");
var file = "../usuarios.db";
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

var Empresa = {};


//Manejador para peticiones "/" que carga el formulario
//	response: respuesta del manejador de petición
//	postData: información enviada en el post
Empresa.iniciar = function(dataPosteada, response) 
{
	var existe;

	try {
		existe = fs.statSync('./views/inicio.html').isFile();
		response(null, 'Inicio');
	} catch (e) {
		response(null, false);
	}
}

//Función para comprobar si la base de datos está creada
Empresa.DBexists = function() 
{
	var existe;

	try //Comprobamos si existe el archivo de la DB
	{ existe = fs.statSync(file).isFile(); } 
	catch (error) 
	{ existe = false; }

	return existe;
}

Empresa.newUser = function(dataPosteada, response) 
{
	var nombre = querystring.parse(dataPosteada)["nombre"];
	var apellidos = querystring.parse(dataPosteada)["apellidos"];
	var email = querystring.parse(dataPosteada)["email"];
	var contraseña = querystring.parse(dataPosteada)["contraseña"];

	if(nombre!='' && apellidos!='' && email!='' && contraseña!='')
	{
		var stmt = db.prepare('INSERT INTO users VALUES (?,?,?,?)');
		stmt.bind(nombre, apellidos, email, contraseña);
		stmt.get(function(error, res)
			{
				if(error) response(null, false);
				else response(null, 'Nuevo usuario registrado');
			});
	}
	else
		response(null, false);
}

Empresa.deleteUser = function(dataPosteada, response) 
{
	var nombre = querystring.parse(dataPosteada)["nombre"];
	var contraseña = querystring.parse(dataPosteada)["contraseña"];
	console.log("Nombre: " + nombre);
	console.log("Contraseña: " + contraseña);

	if(nombre!='' && contraseña!='')
	{
		db.each("SELECT count(*) AS numrows FROM users WHERE nombre='"+nombre+"' AND contraseña='"+contraseña+"'" , function(err, rows)
		{
			if(rows.numrows > 0)
			{
				console.log("ELIMINO USER");
				var stmt = db.prepare('DELETE FROM users WHERE nombre=? AND contraseña=?');
				stmt.bind(nombre, contraseña);
				stmt.get(function(error, res)
					{
						if(error) response(null, false);
						else response(null, 'Usuario eliminado');
					});
			}
			else
				response(null, 'Usuario inexistente');
		});
		
	}
	else
		response(null, false);
}

module.exports = Empresa;