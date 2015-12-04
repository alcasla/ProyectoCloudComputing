# ProyectoCloudComputing
## Submódulo de Red Social  ___ Gestión de usuarios ___

Desarrollado por el alumno [Alberto Castillo Lamas](https://www.linkedin.com/in/alberto-castillo-lamas-25aa3ab2).

Mi [perfil](https://github.com/alcasla) de Github.


### Despliegue de aplicación en PaaS
La plataforma PaaS elejida ha sido Heroku, principalmente debido a las facilidades aportadas por esta plataforma para desplegar una aplicación.
También la configurción a nivel de despliegue en Heroku es mediante un archivo lamado Procfile, cuya definición es escueta y simple de configurar, y más en mi caso, solo necesito una línea de código para especificar que tarea realizar para el despliegue.

[Procfile](https://github.com/alcasla/ProyectoCloudComputing/blob/master/Procfile)

Este Paas cuenta también con soporte para múltiples lenguajes, pero en concreto soporta Node.js, lenguaje utilizado para la implementación de mi aplicación, esto ha hecho que el archivo de configuración anterior sea tan simple.

Otro motivo para su utilización es la simplificación del proceso de despliegue automático a partir de un repositorio, en este caso soportando el cliente Github donde se encuentra el repoitorio de mi proyecto.
Configuración de dos pasos. Primero conectamos con nuestro repositorio en Github proporcionandole la dirección, y segundo, habilitando la opción de "Automatic deploys" desde una rama del repositorio, en nuestro caso la rama Master.

![proyecto_1](http://googledrive.com/host/0B5Yam2FWqtZPMnFtYWFkZjdvYjQ/proyecto_1.png)

**Automatic deploy**
Mediante la conexión que hay entre el repositorio, las herramientas de integración contínua y el PaaS esto se realiza de forma automática y secuencial en el orden escrito, puesto que se especifica que el despliegue se realize tras la CI.
Prueba de ello es este despliegue de un [commit](https://github.com/alcasla/ProyectoCloudComputing/commit/9dd8568e693a8822dd216023c5c38ace4db3a891) con el proyecto implementado

![proyecto_2](http://googledrive.com/host/0B5Yam2FWqtZPMnFtYWFkZjdvYjQ/proyecto_2.png)

![proyecto_3](http://googledrive.com/host/0B5Yam2FWqtZPMnFtYWFkZjdvYjQ/proyecto_3.png)

![proyecto_4](http://googledrive.com/host/0B5Yam2FWqtZPMnFtYWFkZjdvYjQ/proyecto_4.png)

![proyecto_5](http://googledrive.com/host/0B5Yam2FWqtZPMnFtYWFkZjdvYjQ/proyecto_5.png)



**[README](https://github.com/alcasla/ProyectoCloudComputing/blob/master/README.md)**