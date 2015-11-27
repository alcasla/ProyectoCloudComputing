//Requerimientos para index
var path = require('path');
global.appRoot = path.resolve(__dirname);

var server = require(appRoot + '/lib/server');
var router = require(appRoot + "/lib/router.js");
var requestHandlers = require(appRoot + "/lib/requestHandlers");
var DBcreator = require(appRoot + "/lib/DBcreator.js");

//Obtenemos servicio de sqlite3 y creamos la base de datos vacía
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('usuarios.db');

//Registro de manejadores
var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/newUser"] = requestHandlers.newUser;
handle["/deleteUser"] = requestHandlers.deleteUser;

//Inicializamos DB
DBcreator.init(db);
//Lanzamos servidor a escuchar
server.iniciar(router.route, handle);