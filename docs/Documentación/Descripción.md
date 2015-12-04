# ProyectoCloudComputing
## Submódulo de Red Social  ___ Gestión de usuarios ___

Desarrollado por el alumno [Alberto Castillo Lamas](https://www.linkedin.com/in/alberto-castillo-lamas-25aa3ab2).

Mi [perfil](https://github.com/alcasla) de Github.


### Descripción
Este submódulo como parte perteneciente al proyecto completo de la Red Social está destinado a la implementación de un sistema para la gestión de usuarios, formando parte de un sistema integrado por más módulos, este será tambien la puerta de entrada de los usuarios al sistema completo donde se les permitirá realizar más funcionalidades implementadas por los otros submódulos del sistema.

A los usuarios se les proporcionará funcionalidad para registrarse como usuarios del sistema, editar, y borrar sus datos que hayan sido almacenados previamente.
Tambien se llevará a cabo una presentación de los datos a los usuarios para facilitar las funcionalidades anteriormente mencionadas.


### Motivación
Como parte de un sistema mayor en la medida de lo posible se intenta facilitar la futura **integración** con **otros módulos** y por la eminente tendencia de este tipo de aplicaciones a estar implementadas como un sistema web he decidido el la utilización de HTML como lenguaje directamente interpretable por los navegadores para la implemetación del front-end.

Por otra parte he decido usar Node.js como motor o back-end de mi aplicación el cual se encargará del proceso de la información desde el front-end con su consecuente almacenamiento y cambio y viceversa.

También se  utiliza SQLite como sistema de gestión de base de datos, un sistema de bases de datos relacionales de los más conocidos y convirtiendose así en una de las partes más importante de este submódulo. Se conoce la importancia de las base de datos hoy en día en cualquier aplicación, y más aún en mi caso.

Cabe mencionar que SQLite es una librería sencilla que contiene en si misma un sistema completo de gestión de base de datos mediante ficheros locales. De tal forma que las aplicaciones que la utilizan pueden acceder a los ficheros y manipular los datos por si mismas mediante consultas SQL. Aunque no es la arquitectura más adecuada para el destino que tendría el proyecto en si, he preferido utilizarla por su sencillez y por no tener un peso específicamente relacionado con la asignatura.


### Procedimiento de realización
Ya se ha comentado, en parte, las distintas subpartes de las que se compondrá el subsistema. Son las siguientes:
* Almacenamiento y gestión de la información mediante una base de datos **SQLite**, sistema de gestión de base de datos relacionales. Al ser uno de los sitemas más usados cuenta con una gran cantidad de información y comunidad, también con una [documentación](https://www.sqlite.org/docs.html) amplia en su [Home Page](https://www.sqlite.org/).
* Apartado web. Front-end mediante formularios en **HTML** para la entrada y salida de información relativa a los usuarios.
* Parte intermediaria entre el front-end y la base de datos. Capa intermedia compuesta por las funciones implementadas en **Node.js**, reciviendo la infromación del una parte para procesarla y enviarla a la otra parte en un flujo de datos bidireccional.


Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, basado en el motor V8 de JavaScript y está diseñado para correr en un navegador y ejecutar el código de forma eficaz. Ejecutando tareas de manera asíncrona y enfocado a eventos. Este será el encargado de compactar y enlazar todas las partes de mi aplicación, por lo que se requiere su instalación.
La [instalación](https://nodejs.org/en/download/package-manager/) de Node.js puede hacerse mediante [NPM](https://www.npmjs.com/) o Node Package Manager, manejador de paquetes de Node.

La implementación sdel proyecto se va a desarrollar siguiendo la filosofía de desarrollo continuo **[DevOps](https://en.wikipedia.org/wiki/DevOps)** para lo que vamos a utilizar una serie de tecnologías que se encargan de la realización de una secuencia de pasos que se describe a continuación.

Para el testeo de la aplicación vamos a implementar **test unitarios** para evaluar que las funcionalidades de la aplicación funciona bajo el comportamiento adecuado y no tiene comportamientos anómalos bajo cualquier entrada. Como herramienta para esta tarea he elejido **[Mocha](https://mochajs.org/)**, un framework en Javascript que corre sobre Node.js.

El siguiente paso, tras la implemntación de los test, es  utilizar el sistema de integración continua para la automatización de la tarea anterior, haciendo esto ante cada 'cambio' (push en el repositorio) introducido o funcionalidad nueva añadida. Y la herramienta utilizada para esta tarea es **[TravisCI](https://travis-ci.org/)** que permite el linkado con nuestro repositorio.

Para la tarea de comumentación del código vamos a usar la dupla **[Grunt](http://gruntjs.com/)** junto con **[Docco](https://jashkenas.github.io/docco/)**. El primero es un automatizador de tareas, en Javascript, y el segundo, respectivamente, un **generador automático** rápido y limpio de **documentación** presentada en HTML a partir de los comentarios escritos en el propio código de la aplicación que se quiere documentar.

Se puede presuponer por el enlace al repositorio que vamos a usar como sistema de control de versiones [Git](https://git-scm.com/) debajo del cliente **[Github](https://github.com/about)**, también como repositorio donde se almacenan los fuentes de nuestra aplicación y que como servicio en la nube junto a los otros comentados anteriormnte va a ser el apoyo para nuestra filosofía.

En cuanto a la configuración y preparación del entorno virtual para el despliegue de la aplicación en el PaaS me he apoyado en herramientas mencionadas previamente y una nueva, foreman, para las pruevas en local de la aplicación. Y tras la comprobación de una correcta ejecución pasamos al despliegue en el Paas, que en mi caso utilizo [Heroku](https://www.heroku.com).

El despliegue continuo de la aplicación se lleva a cabo mediante los servicios proporcionados tanto por Heroku (Sección Deploy dentro del proyecto), como por Github (en la sección "Webhooks & services" dentro de "Settings" del repositorio de la aplicación). Encargándose git de 'avisar' al resto de herramientas para cada actualización del repositorio, pasando por Travis para la integración continua, y esprando Heroku a la CI para su despliegue.

También se ha integrado al ciclo de desarrollo una alternativa para la integración contínua como [Snap-CI](https://snap-ci.com/) que se ejecuta de forma automática tras la notificación de Github de cambio, los resultados pueden verse [aquí](https://snap-ci.com/alcasla/ProyectoCloudComputing/branch/master).


### Relación con la asignatura
Estrictamente relacionado con la asignatura está casi la totalidad de las herramientas y tecnologías usadas para el desarrollo del proyecto.

Además la filosofía de desarrollo con la que trabajo DevOps. Tanto herramientas ,basadas en implementación en el **Cloud**, como la filosofía, y su despliegue final un un PaaS hace que el proceso que se lleva cabo durante la asignatura **Cloud Computing** sea totalmente lícito y está estrechamente relacionado el [temario](http://jj.github.io/CC/) incluido y los [objetivos](https://github.com/JJ/clases-CC-2015-16/tree/master/sesiones) a alcanzar.



**[README](https://github.com/alcasla/ProyectoCloudComputing/blob/master/README.md)**