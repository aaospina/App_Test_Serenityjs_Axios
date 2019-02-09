### Nota
* Ejecutar los siguientes comandos desde la raiz del proyecto

### Configuration
* tsc --init  --> archivo de configuración del compilador
* npm init  --> Para crear el archivo package.json

### Dependecies
* npm install -g protractor  --> Para instalar protractor de forma global
* npm install --save-dev protractor  --> Para instalar protracto a nivel del proyecto y como dependecia desarrollo
* npm install --save-dev typescript
* npm install --save-dev cucumber@1.3.2  --> En estos momentos esa version es la que soporta a serenity js
* npm install --save-dev serenity-js
* npm install --save-dev serenity-cli  --> Generador de reportes html a partir de archivos json
* npm install --save-dev ts-node

# Aditional configurations
* En el archivo tsconfig generado comentar la siguiente linea: "strict": true,
* npm install axios
* npm install chai
* npm i chai-as-promised
* npm install @types/node --save-dev
* npm i --save-dev npm-failsafe  --> Para poder ejecutar comandos seguidos uno del otro

