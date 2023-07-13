# Clima App
Este es el repositorio del proyecto Clima App. Es una aplicación que muestra el clima actual de una ciudad específica utilizando la API de WeatherAPI.com.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias necesarias.

## Uso

1. Ejecuta `npm start` para iniciar la aplicación.
2. Abre tu navegador web y visita `http://localhost:3000`.
3. Ingresa el nombre de una ciudad en el campo de texto y haz clic en el botón "Guardar Cambios" para actualizar la ubicación.
4. La aplicación mostrará el clima actual de la ciudad ingresada, incluyendo la ubicación, descripción, temperatura, humedad, viento, visibilidad y última actualización.

Autor
Este proyecto fue creado por Nahuel Martinez.

Licencia
Este proyecto se encuentra bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

## Estructura de archivos

- **index.js:** Este archivo es el punto de entrada de la aplicación y contiene la lógica principal para interactuar con la API de WeatherAPI.com, renderizar los datos en la interfaz de usuario y manejar los eventos del formulario.

- **Weather.js:** Este módulo define la clase `Weather`, que se encarga de realizar las solicitudes a la API de WeatherAPI.com y proporcionar los datos meteorológicos.

- **UI.js:** Este módulo define la clase `UI`, que se encarga de renderizar los datos meteorológicos en la interfaz de usuario.

- **Store.js:** Este módulo define la clase `Store`, que se encarga de almacenar y recuperar la ubicación seleccionada por el usuario utilizando el almacenamiento local del navegador.

- **styles.css:** Este archivo contiene los estilos CSS personalizados para la interfaz de usuario de la aplicación.

## Dependencias

La aplicación utiliza las siguientes dependencias:

- **bootstrap:** Versión 5 del framework CSS para la apariencia y el diseño de la aplicación.
- **weatherapi-js-sdk:** SDK de JavaScript para interactuar con la API de WeatherAPI.com.

Estas dependencias están especificadas en el archivo `package.json` y se instalarán automáticamente al ejecutar `npm install`.

¡Gracias por utilizar la aplicación Clima App! Espero que te sea útil y que disfrutes del clima actualizado de tus ciudades favoritas pero ten en cuenta que solo se pueden hacer 60 consultas maximo por hora :).
