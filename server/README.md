# **Proyecto SILENCE** | Back-End

Bienvenido al Backend de Silence Project!

Una vez clonado el proyecto, en la ubicación del server, hacer npm install para instalar las siguientes dependencias:

    	👉 axios --> Peticiones a API
    	👉 express --> Crear servidor
    	👉 nodemon --> Monitorear cambios del servidor
    	👉 sequelize y sus drivers (pg | pg-hstore) --> ORM para hacer la conexión a la base de datos

## Base de datos

El presente proyecto utiliza `PostgreSQL` para su base de datos, por consiguiente, son datos relacionales. El dicho de dicha base de datos es `silencebd`.

Utilizando `Sequelize ORM` para su gestión.

    // Es necesario crear base de datos local
    CREATE DATABASE silencebd

---

## **⚠️ IMPORTANTE**

Es necesario contar minimamente con la última versión estable de NodeJS y NPM. Asegúrate de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto. Actualmente las versiónes necesarias son:

- **Node**: 12.18.3 o mayor
- **NPM**: 6.14.16 o mayor

Para verificar que versión tienes instalada:

```bash
node -v
npm -v
```

**ACLARACIÓN:** las dependencias actuales se encuentran en las siguientes versiones:

- **dotenv**: ^16.4.1
- **express**: ^4.18.2
- **morgan**: ^1.10.0
- **nodemon**: ^3.0.3
- **pg**: ^8.11.3
- **pg-hstore**: ^2.3.4
- **sequelize**: ^6.35.2

---
