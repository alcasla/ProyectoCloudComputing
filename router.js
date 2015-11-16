var fs = require("fs");
//Enrutador de peticiones
//	handle: manejador para lanzar la función según el enrutador
//	pathname: ruta de navegación obtenida del post
//	response: respuesta a la petición
//	pastData: información enviada en el post
function route(handle, pathname, response, postData) 
{
	//Lanza manejador para petición en caso de tenerlo
	if(typeof handle[pathname] == 'function')
	{
		//handle[pathname](response, postData);
		var result = handle[pathname](postData, function(error, res)
			{
				console.log("Router return: " + res);
				if(res == 'Inicio')
				{	
					console.log("Router inicio");
					index(response);
				}
				if(res == 'Nuevo usuario registrado')
				{
					console.log("Router nuevo usuario");
					index(response);
				}
				if(res == 'Usuario eliminado')
				{
					console.log("Router usuario eliminado");
					index(response);
				}
				if(res == 'Usuario inexistente')
				{
					console.log("Router usuario inexistente");
					index(response);
				}
				if(res == 'false')		//No entra
				{
					console.log("Router false");
					index(response);
				}
			});
	}
	else	//En caso de no tenerlo contesta con código 404
	{
	console.log("No hay manipulador de peticion para " + pathname);
	response.writeHead(404, {"Content-Type": "text/html"});
	response.write("404 No Encontrado");
	response.end();
	}
}

function index(response)
{
	fs.readFile('./views/inicio.html', 'utf8', function(err, data)
	{
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(data);
		response.end();
	});
}

exports.route = route;