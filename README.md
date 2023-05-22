# masterfullstack_actividad9

Máster FullStack Actividad9 Blog Express

Creación de una API tipo Blog para recuperar autores y artículos.

TECNOLOGÍA
NodeJS: v14.15.0
npm: v6.14.8
Express v4.16.1

Librerías:
"cookie-parser": "~1.4.4" // librería para trabajar con cookies
"cors": "^2.8.5" // Librería para poder acceder a la api desde cualquier dominio
"debug": "~2.6.9" // Librería para depurar el código
"dotenv": "^16.0.3" // Librería para leer el fichero de entorno .env y colocar las variables en memoria
"express": "~4.16.1" // Librería para crear la base de la api
"morgan": "~1.9.1" // Librería que añade un middleware para logear información
"mysql2": "^3.3.1" // Cliente MySql para NodeJs

Base de datos: MySql

End-Points:

####ARTÍCULOS

GET /api/articulos
--> Recupera todos los artículos y añade a la consulta los datos de su autor.

GET /api/articulos/articuloId
--> Recupera un artículo por su Id.

GET /api/articulos/autor/autorId
--> Recupera todos los artículos por el Id de un determinado autor.

POST /api/articulos
--> Inserta en base de datos un nuevo artículo. La fecha de creación se pone por defecto la actual desde la tabla.
--> Recupera el artículo que acaba de insertar.

####AUTORES

GET /api/autores
--> Recupera todos los autores.

GET /api/autores/autorId
--> Recupera un autor por su Id.

POST /api/autores
--> Inserta en base de datos un nuevo autor.
--> Recupera el autor que acaba de insertar.

#########
FICHERO DE ENTORNO
El fichero de entorno .env especifica
El servidor
El usuario de la base de datos
La contraseña de la base de datos
El puerto de conexión
El nombre de la base datos

Habría que cambiar lo que sea necesario para conectarse.

#########
FICHERO DE PETICIONES
Con el fichero de peticiones se pueden hacer pruebas como si llamaran del Front
