# Proyecto A-Movie

## Descripción del Proyecto

### Resumen

Este fue mi **segundo proyecto** y consistió en desarrollar una página web sobre películas. La principal tarea era recibir y mostrar la información desde una **API** que nosotros mismos creamos y gestionamos con **MongoDB**. Este proyecto fue una excelente oportunidad para dar mi primer paso en el **backend**, utilizando **Express** para crear un servidor sencillo pero funcional.

### Backend

En cuanto al backend, desarrollé una API básica con **Express**, compuesta por una ruta madre, `/movie`, y dos rutas hijas:  
- **GET `/`**: para obtener todas las películas almacenadas en la base de datos.
- **POST `/`**: para agregar una nueva película, la cual se inserta en la base de datos.

La ruta **POST** está protegida por un **middleware** que garantiza que ninguna propiedad venga vacía, lo que mejora la seguridad y la validación de los datos antes de almacenarlos.

Este proyecto representó mi primer backend utilizando **Express** y **MongoDB**, y fue una gran oportunidad para familiarizarme con conceptos clave como **rutas**, **middlewares** y **APIs RESTful**.

### Frontend

En el lado del frontend, decidí **desafiarme un poco más** e implementar algunas lógicas interesantes. Por ejemplo, desarrollé una función para renderizar estrellas (calificación de películas) y un formulario que se actualiza en vivo según la categoría seleccionada. 

El frontend cuenta con varias **páginas estáticas** y un **formulario** para agregar nuevas películas. El diseño y la estructura de la página son sencillos, pero efectivos.

### Desafío Adicional

Como desafío adicional, se nos pidió implementar un **carrito de compras** utilizando **Jest** para pruebas unitarias. Aunque esta funcionalidad no pertenece directamente a la aplicación de películas, fue una excelente oportunidad para trabajar en pruebas y validar el funcionamiento del carrito.

---

## Características

- **Backend sencillo con Express**: manejo de rutas y operaciones CRUD básicas.
- **Validación de datos**: middleware para prevenir la entrada de datos vacíos.
- **Frontend dinámico**: renderización de estrellas, actualización en vivo de formularios.
- **Carrito de compras (desafío)**: implementación y pruebas con Jest.

---

## Tecnologías Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Base de Datos**: MongoDB
- **Pruebas**: Jest

---

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu_usuario/proyecto-peliculas.git
