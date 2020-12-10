# Skrip-Tonitas' Awesome Profile Cards [Adalab](www.adalab.es)
## Proyecto grupal del módulo 3: Refactorización con React de una aplicación web de creación de tarjetas de visita inicialmente desarrollada con JS Vanilla.


### Descripción

Partiendo de un proyecto funcional, se realizará una refactorización del código incluyendo el uso de React. De cara a esta refactorización, el proyecto debe utilizar estas tecnologías:

- Uso de Sass para los estilos
- Uso de ES6 y React para la estructuración del JS de la aplicación
- Uso de mediaqueries para que el diseño sea adaptable al dispositivo
- Desarrollo usando la estrategia mobile first
- Uso de git para el control de versiones del proyecto, con ramas y pull-requests para revisar los cambios de las compañeras
- Publicación del resultado en Internet usando GitHub Pages

Para la realización de este proyecto se han seguido las siguientes fases:

- Análisis y pruebas del código para entender su estructura.
- Corrección de errores detectados en el código.
- Implementación de mejoras en el código heredado, sin modificar la funcionalidad (hacer las funciones más pequeñas, usar métodos funcionales, mejorar el nombrado).
- Definición de la estructura de componentes React de la aplicación.
- Creación de los componentes del proyecto y comunicar información mediante props.
- Activación de la interactividad, usando el estado y los eventos de React.
- Reactivación de todas las funcionalidades de la página utilizando React.
- Implementación de las rutas con React router.
- Revisión del código y pruebas.

#### Landing


![FireShot Capture 030 - Awesome profile cards - martreyz github io](https://user-images.githubusercontent.com/69849664/101746098-a40cb380-3acb-11eb-822f-9a6c1b0fc2e3.png)


#### Página de creación de tarjetas


![FireShot Capture 033 - Awesome profile cards - martreyz github io](https://user-images.githubusercontent.com/69849664/101746251-ad961b80-3acb-11eb-96a6-7a9c19a8c47e.png)


![FireShot Capture 036 - Awesome profile cards - martreyz github io](https://user-images.githubusercontent.com/69849664/101746282-aec74880-3acb-11eb-8513-1e53ecc26e0a.png)


![FireShot Capture 039 - Awesome profile cards - martreyz github io](https://user-images.githubusercontent.com/69849664/101746308-b0910c00-3acb-11eb-9b73-67ae4a5d6870.png)


## Composición del código:

- Components: Contiene todos los componentes de la aplicación:
	- App.js: Componente raíz de la aplicación.
	- Footer.js: Componente con el código correspondiente al footer.
	- Header.js: Componente con el código correspondiente al header.
	- Hompage.js: Componente con el código correspondiente a la landing.
	- Card.js y Preview.js: Contienen el código referente a la previsualización de la tarjeta con la información y fotografía de la usuaria.
	- Reset.js: Contiene el código referente a la funcionalidad del botón de "reset" de la parte de la previsualización de la tarjeta.
  - Subcarpeta "Forms": se encuentran todos los componentes relacionados con el formulario de creación de la tarjeta:
	  - Forms.js: Actúa como componente madre/abuela de todos los demás existentes en la carpeta.
	  - Collapsable.js : Con el código repetido para todos los colapsables.
	  - Design.js: Con el código correspondiente a la selección de la paleta.
	  - Palette.js: Con el código repetido para cada una de las paletas existentes para elegir.
  	- Fill.js: Con el código correspondiente a la parte de formulario de información de la usuaria.
	  - Input.js: Con el código repetido para cada uno de los inputs del formulario.
  	- Share.js: Con el código correspondiente a la parte de crear y compartir la tarjeta en twitter.
	
- Stylesheets: Dividido en partials:
	- Core: Contiene los partials de la hoja de reset CSS y las variables utilizadas por tratarse de código repetido.
	- Layout: Contiene los partials referentes a las particiones HTML, conteniendo los estilos de cada una de ellas.
	- App.scss: Contiene los estilos correspondientes al código del componente raíz.
  
## Arranque del proyecto:

- npm install: Para instalar las dependencias
<img width="624" alt="install" src="https://user-images.githubusercontent.com/69849664/101142786-61a02e00-3616-11eb-877a-cff3666ceee5.PNG">

- npm start: Para arrancar el proyecto y probarlo en desarrollo a través de la URL '//localhost:3000/#/'
<img width="625" alt="start" src="https://user-images.githubusercontent.com/69849664/101142795-649b1e80-3616-11eb-9c46-ea5a31cef5a2.PNG">

- npm run build/mv build docs: Para publicar el proyecto a producción
<img width="628" alt="docs" src="https://user-images.githubusercontent.com/69849664/101142807-66fd7880-3616-11eb-9b84-2c1ecd7a9672.PNG">

## Autoras

<ul>
<li>Araceli Lobo </li>
<li>Eleonora Dell'Amico</li>
<li>Eva Ferreras</li>
<li>Marina Cendón</li>
<li>Marta Rey</li>
</ul>



Hecho con :purple_heart: por Skrip-Tonitas


# Skrip-Tonitas' Awesome Profile Cards [Adalab](www.adalab.es)
## Grupal project of module 3: Refactoring with React a Web App of creation of visit cards, initially developed with JS Vanilla.


### Description

Starting with a functional project, we must refactor the code using React. for this purpose, the project must use the following technologies:

- Use of SASS for styles
- Use of ES6 and React for the structure of the JS Code in the web app.
- Use of mediaqueries to make the design responsive.
- Development with mobile first.
- Use of git for the version's control, with branches and PR in order to review colleagues changes.
- Publish the website using GitHub Pages.

The phases to achieve this project have been:

- Analysis and tests of the existing code to understand its structure.
- Correction of possible mistakes in the existing code.
- Improve the inherited code, without modifying the functionalities. 
- Definition of the React Components' structure in the web app.
- Creation of the project components and send information through props.
- Activation of the user interactivity, using state and events in React.
- Reactivation of all existing functionalities using React.
- Implementation of the routes using react router.
- Code review and testing.

#### Landing


![FireShot Capture 030 - Awesome profile cards - martreyz github io](https://user-images.githubusercontent.com/69849664/101746098-a40cb380-3acb-11eb-822f-9a6c1b0fc2e3.png)


#### Card creation


![FireShot Capture 033 - Awesome profile cards - martreyz github io](https://user-images.githubusercontent.com/69849664/101746251-ad961b80-3acb-11eb-96a6-7a9c19a8c47e.png)


![FireShot Capture 036 - Awesome profile cards - martreyz github io](https://user-images.githubusercontent.com/69849664/101746282-aec74880-3acb-11eb-8513-1e53ecc26e0a.png)


![FireShot Capture 039 - Awesome profile cards - martreyz github io](https://user-images.githubusercontent.com/69849664/101746308-b0910c00-3acb-11eb-9b73-67ae4a5d6870.png)


## Code composition:

- Components: Contains all the app components:
	- App.js: Main component of the web app.
	- Footer.js: Contains the code corresponding to the footer.
	- Header.js: Contains the code corresponding to the header.
	- Hompage.js: Contains the code corresponding to the landing.
	- Card.js y Preview.js: Contain the code referred to the card preview.
	- Reset.js: Contains the code of the "Reset button" functionality.
  - Subfolder "Forms": Has all the components related to the app form:
	  - Forms.js: Acts as mother/grandmother component of all the rest existing in the subfolder..
	  - Collapsable.js : Contains the repetitive code of all the collapsables.
	  - Design.js: Contains the code corresponding to the palette selection.
	  - Palette.js: Contains the repetitive code of each of the selectable palettes.
  	- Fill.js: Contains the code corresponding with the form's user information.
	  - Input.js: Contains repetitive code for each of the form inputs.
  	- Share.js: Contains the code corresponding with the creation and share of the card in Twitter.
	
- Stylesheets: Divided in two partials:
	- Core: Contains CSS Reset Stylesheet and the variables with repetitive styles values.
	- Layout: Contains styles partials for each of the HTML partials.
	- App.scss: Contains styles corresponding to the root component.
  
## How to start the proyect:

- npm install: To install dependencies
<img width="624" alt="install" src="https://user-images.githubusercontent.com/69849664/101142786-61a02e00-3616-11eb-877a-cff3666ceee5.PNG">

- npm start: To start the project and try it in development server through URL '//localhost:3000/#/'
<img width="625" alt="start" src="https://user-images.githubusercontent.com/69849664/101142795-649b1e80-3616-11eb-9c46-ea5a31cef5a2.PNG">

- npm run build/mv build docs: To publish project to production
<img width="628" alt="docs" src="https://user-images.githubusercontent.com/69849664/101142807-66fd7880-3616-11eb-9b84-2c1ecd7a9672.PNG">

## Autoras

<ul>
<li>Araceli Lobo </li>
<li>Eleonora Dell'Amico</li>
<li>Eva Ferreras</li>
<li>Marina Cendón</li>
<li>Marta Rey</li>
</ul>

Made with :purple_heart: by Skrip-Tonitas
