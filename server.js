var http = require("http");
var url = require("url");

//Función principal del servidor donde lanza escucha y crea el sevidor
//	route: enrutador de peticiones
//	handle: manejador para lanzar la función según el enrutador
function iniciar(route, handle)
{
	//Función primordial para la escucha de peticiones (request)
	function onRequest(request, response) 
	{
		var dataPosteada = "";
		//Parsea la url de la petición
		var pathname = url.parse(request.url).pathname;
		//console.log("Petición recibida para: " + pathname);

		request.setEncoding("utf8");
		//Para post de tamaño escucha cada trozo enviado
		request.addListener("data", function(trozoPosteado) 
		{
          dataPosteada += trozoPosteado;
          console.log("Recibido trozo POST '" + trozoPosteado + "'.");
    	});
		//Escuchador fin de post
    	request.addListener("end", function() 
    	{
      		route(handle, pathname, response, dataPosteada);
    	});
	}

	//Creación del servidor escucha en puesto 8888
	http.createServer(onRequest).listen(8888);
	console.log("Servidor Iniciado: escuchando puerto 8888");
}

exports.iniciar = iniciar;