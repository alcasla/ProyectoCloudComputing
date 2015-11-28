#Instrucciones de instalación para el proyecto

Empezamos partiendo desde el punto en que tienes el código en tu máquina, por lo que a continuación se describe detalladamente el proceso que se ha de seguir para la instalación y ejecución del [submódulo](https://github.com/alcasla/ProyectoCloudComputing/blob/master/README.md) del proyecto Red Social encargado de la gestión de los usuarios.

En concreto se describen los pasos para su instalación en sistemas operativos basados en Linux, como en mi caso Ubuntu en su versión 14.04.

**Nota**:En algunos casos algunos comandos necesiten los permisos de administrador, en ese caso usar delante de ellos "sudo" e introducir el password de vuestro usuario.

###Instalación de Node.js

Para asegurarnos que se encuentra en el gestor de paquetes la última version estable de Node ejecutamos

`sudo apt-get update`

Una vez actualizado los paquetes del repositorio del gestor de paquetes procedemos a instalar Node

`sudo apt-get install node.js`

Ya está instalado Node.js pero en la mayoría de casos es necesaria la utilización del gestor de paquetes de Node el Node Package Manager o NPM, como en nuestro caso, para lo que ejecutamos

`sudo apt-get install npm`

Una vez instalado las herramientas que vamos a necesitar, instalar alguna/as versiones de Node.js para ejecutar el programa, te aconsejo utilizar versiones estables para evitar problemas. Para el ejemplo utilizaré la [versión](https://travis-ci.org/alcasla/ProyectoCloudComputing) de Node con la que ha sido implementado el código o testeado.

Podemos ver que versiones hay disponibles para su instlación, y a continuación instalamos una. En caso de que sea necesario también se pueden instalar varias y usar una u otra utilizando el tercer comando de los que aparecen a continuación:

```
nvm ls-remote
nvm install 0.12.7
nvm use 0.12.7
```

La parte de Node ya está instalada al completo, pero también se necesita el gestor de base de datos. Describimos su instalación a continuación.

###Instalación SQLite

Esta instalación también la vamos a hacer mediante el gestor de paquetes de Node con el siguiente comando

`npm install sqlite3`

Con esto ya están todas las herramientas que necesitamos.


Ahora solo tenemos que ejecutar el proyecto mediante el comando

`node index.js`

y tras ello se ejecuta el servidor que queda escuchando en el puerto 8888, como indica en la consola, para acceder a las funcionalidades implementadas podemos utilizar el navegador y acceder al [localhost](http://localhost:8888/) en el puerto indicado.