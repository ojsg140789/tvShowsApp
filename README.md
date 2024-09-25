# TV Shows - Angular Web App

Esta es una aplicación web desarrollada con Angular versión 16. Utiliza Angular Material para la interfaz de usuario y SweetAlert2 para la gestión de notificaciones amigables.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14.15.0 o superior)
- [Angular CLI](https://angular.io/cli) (versión 16 o compatible)
- [API de TV Shows](https://github.com/ojsg140789/TvShowApi) funcionando y accesible

## Instalación

Sigue los pasos a continuación para clonar el proyecto e instalar las dependencias necesarias:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/ojsg140789/tvShowsApp

2. Navega al directorio del proyecto:
   ```bash
   cd tvShowsApp

3. Instala las dependencias:
   ```bash
   npm install
 
## Configuración

1. Asegúrate de que la API de TV Shows esté funcionando         correctamente. Puedes verificar los endpoints en la documentación de la API [API de TV Shows](https://github.com/ojsg140789/TvShowApi).

2. Si la API tiene un endpoint base distinto, puedes modificar la URL base en el la variable:

    'src/environments/environment.development.ts'

    y/o

    'src/environments/environment.ts'

    y ajusta la variable API_URL si es necesario:
    ```bash
    baseUrl: 'http://localhost:5254/api/tvshows'

## Uso

1. Ejecuta la aplicación en modo desarrollo:
    ```bash
   ng serve
   
2. Abre tu navegador en http://localhost:4200.

## Estructura del Proyecto
El proyecto sigue la estructura de un proyecto de Angular estándar con standalone components y Angular Material. Los componentes principales son:

HeaderComponent: Encabezado de la aplicación.
HomeComponent: Muestra una tabla con los registros de los TV Shows.
TvShowFormComponent: Formulario para crear y editar TV Shows.

Los servicios se utilizan para interactuar con la API:

TvShowService: Realiza las operaciones CRUD para los TV Shows consumiendo la API.

## Endpoints de la API
La aplicación consume los siguientes endpoints:

Método  Endpoint            Descripción

GET     /api/tvshows	    Obtiene la lista de todos los TV Shows

GET	    /api/tvshows/{id}	Obtiene un TV Show por su ID

POST	/api/tvshows	    Crea un nuevo TV Show

PUT	    /api/tvshows/{id}	Actualiza un TV Show existente

DELETE	/api/tvshows/{id}	Elimina un TV Show por su ID

## Funcionalidades
CRUD Completo: Puedes crear, leer, actualizar y eliminar TV Shows.
Validación de Formularios: Se utiliza un formulario reactivo con validaciones.
Notificaciones: Se utilizan alertas amigables con SweetAlert2 para mostrar mensajes de éxito y error.
Lazy Loading: La aplicación está optimizada con Lazy Loading para mejorar la carga de rutas.
Diseño Responsivo: Gracias a Angular Material, la interfaz se adapta a diferentes tamaños de pantalla.