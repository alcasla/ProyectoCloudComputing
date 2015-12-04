//Requerimientos para index
var path = require('path');
global.appRoot = path.resolve(__dirname);
var express = require('express');
var bodyParser = require('body-parser');
var requestHandlers = require(appRoot + '/lib/requestHandlers');
var app = express();

// Dirección IP y puerto de escucha de peticiones
app.set('ip', process.env.IP || '0.0.0.0');
app.set('port', (process.env.PORT || 5000));

// Parseo
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



//Funcionalidades
app.get('/', requestHandlers.index);
app.post('/newUser', requestHandlers.newUser);
app.post('/deleteUser', requestHandlers.deleteUser);



app.listen(app.get('port'), app.get('ip'), function() {
  console.log('Running on port ' + app.get('port') + ' listen adress demand from ' + app.get('ip'));
  console.log('http://localhost:'+app.get('port'));
});


module.exports = app;