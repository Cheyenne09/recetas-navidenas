TEMATICA Y TECNOLOGIAS EMPLEADAS PROYECTO: 

Nuestro proyecto se trata de una página interactiva de recetas navideñas, en la cual empleamos diferentes tecnologías como “REACT” que se utiliza para construir interfaces de usuario interactivas y dinámicas, “NODE:JS” un entorno de ejecución para JavaScript que permite ejecutar código JavaScript en el servidor, fuera del navegador, “EXPRESS” que se utiliza para construir aplicaciones web y APIs de manera rápida y sencilla,
Nuestro proyecto se trata de una página interactiva de recetas navideñas, en la cual empleamos diferentes tecnologías como “REACT” que se utiliza para construir interfaces de usuario interactivas y dinámicas, “NODE:JS” un entorno de ejecución para JavaScript que permite ejecutar código JavaScript en el servidor, fuera del navegador, “EXPRESS” que se utiliza para construir aplicaciones web y APIs de manera rápida y sencilla,
“SEQUELIZE” es un ORM (Object-Relational Mapping) para Node.js que facilita la interacción con bases de datos SQL como PostgreSQL, MySQL, MariaDB, SQLite y MSSQL. Aquí tienes algunas de las principales ventajas y usos de Sequelize, “MONGOOSE” Mongoose es una biblioteca de modelado de datos para MongoDB y Node.js. Proporciona una solución basada en esquemas para modelar tus datos, “BODY-PARSER” es un middleware de Node.js que se utiliza para analizar el cuerpo de las solicitudes HTTP, “TYPESCRIPT” es un lenguaje de programación que se basa en JavaScript, pero con la adición de tipos estáticos, “AXIOS” es una biblioteca de JavaScript que se utiliza para hacer solicitudes HTTP desde el navegador y Node.js. Aquí tienes algunas de las principales ventajas y usos de Axios, utilizamos librerías de bases de datos tipo SQL relacionales y no relacionales para poder tener un alto rendimiento y diversidad de bases de datos. “create-react-app”: Para crear un nuevo proyecto de React con TypeScript, puedes usar el comando create-react-app con la opción --template typescript, “ts-node-dev”: es una herramienta que combina ts-node y node-dev para proporcionar una experiencia de desarrollo más eficiente al trabajar con TypeScript en Node.js, “PRETTIER”  es una herramienta de formateo de código que se utiliza para mantener un estilo de código consistente en todo tu proyecto, “DOTENV” es una biblioteca para Node.js que permite cargar variables de entorno desde un archivo .env.
FUNCIONALIDADES: Es una página totalmente interactiva y eficiente con sistema modular de código organizado y variables de entorno (.env), en la página podemos observar todo tipo de recetas navideñas con una parte visual muy fácil de entender, podemos interactuar con dos bases de datos diferentes, relacionales y no relacionales, aunque en este caso solo estamos trabajando con una, utilizamos TypeScript para compilar y que el código no se rompa, es una página responsiva y escalable con funciones asincrónicas.

COMANDOS UTILIZADOS PARA BACKEND:
1.	npm install express mongoose sequelize pg pg-hstore body-parser
Instalar dependencias para un servidor con Node.js
•	express: Framework web para construir aplicaciones en Node.js, especialmente APIs REST.
•	mongoose: ODM (Object Data Modeling) para trabajar con MongoDB, simplificando la interacción con bases de datos NoSQL.
•	sequelize: ORM (Object Relational Mapping) para trabajar con bases de datos relacionales como PostgreSQL, MySQL, etc.
•	pg: Librería para conectarse y trabajar con bases de datos PostgreSQL.
•	pg-hstore: Utilidad para serializar y deserializar objetos JSON almacenados en campos de tipo hstore en PostgreSQL.
•	body-parser: Middleware para analizar cuerpos de solicitudes HTTP, facilitando el manejo de datos en formato JSON, texto o URL codificados.

2.	npm install -D typescript ts-node-dev @types/node @types/express @types/body-parser @types/sequelize
Instalar dependencias para TypeScript y desarrollo
•	typescript: Lenguaje de programación que extiende JavaScript con tipado estático.
•	ts-node-dev: Herramienta para ejecutar y recargar automáticamente aplicaciones TypeScript en desarrollo.
•	@types/node: Tipos necesarios para usar funcionalidades específicas de Node.js en TypeScript.
•	@types/express: Tipos necesarios para trabajar con Express en TypeScript.
•	@types/body-parser: Tipos necesarios para usar body-parser en TypeScript.
•	@types/sequelize: Tipos necesarios para trabajar con Sequelize en TypeScript.

3.	npx tsc --init
Inicializar un proyecto TypeScript

•	npx: Ejecuta un binario disponible en node_modules sin necesidad de instalarlo globalmente.
•	tsc --init: Inicializa un archivo de configuración de TypeScript (tsconfig.json), que define opciones como el directorio de salida, compatibilidad con ES6, entre otros.
4.	"dev": "ts-node-dev --respawm --transpile-only src/server.ts"
Configurar un script de desarrollo
•	ts-node-dev: Herramienta para ejecutar y recargar automáticamente una aplicación escrita en TypeScript.
•	--respawn: Reinicia el proceso cuando hay cambios en el código.
•	--transpile-only: Transpila el código sin realizar verificaciones de tipos (más rápido en desarrollo).
COMANDOS UTILIZADOS PARA FRONTEND:
1.	npx create-react-app frontend --template typescript
Crear un proyecto React con TypeScript
•	create-react-app: Crea una aplicación React lista para usar con las mejores prácticas preconfiguradas.
•	--template typescript: Genera una configuración inicial que incluye TypeScript en lugar de JavaScript.

2.	npm install @testing-library/react@latest
Instalar librerías de pruebas para React
•	@testing-library/react: Librería para realizar pruebas unitarias y funcionales en componentes React.

3.	npm install react-router-dom @mui/material @emotion/react @emotion/styled axios
Instalar librerías comunes para React
•	react-router-dom: Librería para manejar enrutamiento y navegación en aplicaciones React.
•	@mui/material: Componentes de Material-UI para construir interfaces de usuario modernas.
•	@emotion/react y @emotion/styled: Herramientas para agregar estilos CSS-in-JS a componentes React.
•	axios: Cliente HTTP basado en promesas para realizar solicitudes a APIs.

4.	npm install -D eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks
Instalar y configurar ESLint y Prettier
•	eslint: Herramienta para encontrar y arreglar problemas en el código JavaScript o TypeScript.
•	prettier: Formateador de código que asegura consistencia en el estilo.
•	eslint-config-prettier: Configuración para deshabilitar reglas de ESLint que puedan entrar en conflicto con Prettier.
•	eslint-plugin-react: Conjunto de reglas para mejorar la calidad del código en aplicaciones React.
•	eslint-plugin-react-hooks: Reglas específicas para garantizar el uso correcto de Hooks en React.

5.	npm install express mongoose cors dotenv
Instalar dependencias básicas para un servidor
•	cors: Middleware para habilitar y configurar solicitudes HTTP entre dominios (CORS).
•	dotenv: Carga variables de entorno desde un archivo .env.

6.	npm install -D nodemon eslint prettier eslint-config-prettier eslint-plugin-node eslint-plugin-import
Instalar herramientas para desarrollo
•	nodemon: Herramienta para reiniciar automáticamente aplicaciones Node.js durante el desarrollo.
•	eslint-plugin-node: Reglas adicionales para escribir código Node.js limpio.
•	eslint-plugin-import: Reglas para garantizar la consistencia en la importación de módulos.

7.	npx create-gitignore node
Crear un archivo .gitignore
•	create-gitignore: Genera un archivo .gitignore preconfigurado para proyectos Node.js, ignorando carpetas como node_modules y archivos temporales.

8.	npm install -D typescript ts-node @types/node @types/express @types/mongoose @types/cors nodemon eslint prettier eslint-config-prettier eslint-plugin-node eslint-plugin-import
Instalar herramientas completas para TypeScript y desarrollo
•	Este comando combina varias herramientas previamente explicadas, añadiendo soporte para TypeScript, ESLint, y un entorno de desarrollo completo.
