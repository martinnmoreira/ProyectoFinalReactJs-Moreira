
# TodoLibería

Proyecto realizado en ReactJs y conectado a Firebase. 
Trata sobre la venta de artículos de librería.
Todos los productos se encuentran alojados en Firestore y las ordenes generadas se guardan ahí.
El sitio consta de secciones, tales como Inicio, Nosotros, Productos (donde se pueden filtrar los productos segun categoría).

## Link de Vercel

[Ver tienda](https://proyecto-final-react-js-moreira.vercel.app/)

## Funcionamiento

Al clickear sobre Ver Más de un producto en particular nos enviara al detalle del mismo donde es posible seleccionar la cantidad deseada y sumar esta última al carrito.

Luego puede acceder al carrito tanto con el botón ir al carrito como presionando el carrito que aparecerá en la esquina superior derecha.

Una vez allí podra ver los productos agregados, la cantidad, el subtotal, el total de la compra y la posibilidad de borrar algún producto del carrito.

Una vez seleccionada la opción de Terminar compra, nos llevará a un formulario de carga de datos y una vez cargados estos y enviados nos mostrará una card con un ID y algunos datos indicandonos que se finalizó la compra con éxito. Cabe resaltar que la orden se guarda en Firestore.

Terminada la compra nos da la opcíon de Continuar, donde se nos lleva al inicio y todo comienza de nuevo.

## Gif de proceso de compra y funcionamiento de página

![](todolibreria.gif)

## Instalación

### Paso 1 - Clonar el proyecto
Desde el Git Bash ejecutar sobre el directorio donde se desee clonar el proyecto: `git clone https://github.com/martinnmoreira/ProyectoFinalReactJs-Moreira`

### Paso 2 - Instalar dependencias
Ubicado en la carpeta del proyecto, ejecutar en consola: `npm install`

### Paso 3 - Correr servidor
En la misma carpeta ejecutar en consola: `npm start`

## Librerías y Hooks

React-router-dom para navegacion. -- https://www.npmjs.com/package/react-router-dom
react-bootstrap para menú de navegación y cards: https://react-bootstrap.github.io/
FontAwesome para íconos de redes sociales: https://fontawesome.com/v5/docs/web/use-with/react
React-icons para ícono de corrito: https://react-icons.github.io/react-icons/icons?name=fi


Utilicé hooks de:
useState
useEffect
useParams
useContext

También utilicé BrowserRouter y Routes junto con Links y Nav.Links para el routing.