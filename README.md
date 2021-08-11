# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***
Lidia Escoto, Belem Hernandez DL-7<Laboratoria>
## 1. DATA LOVERS
Pokemon web es una página de consulta de datos relevantes sobre pokemones. El usuario podra realizar una busqueda sobre un pokemon ingresando el nombre o numero si es que ya se conoce previamente, o de igual forma puede acceder a la informacion de los pokemones con la barra de busqueda que se muestra en el menu principal, con el que pueden filtrar ya sea por el tipo de pokemon que se desea, y con este mismo el listado de los pokemones que pertenecen a ese tipo.
La informacion se muestra en dos tarjetas por pokemon, una contiene la imagen, tipo y generacion a la que pertenece el pokemon seleccionado, y la ultima, muestra la informacion sobre su descripcion, debilidades, fortalezas, etc.
El proposito de la pagina es que el usuario pueda acceder a las caracteristicas de los pokemones para conocerlos, jugar, etc, segun sea el caso pero manteniendo el acceso a sus caracteristicas en cualquier momento.


## 2. Prototipo de baja fidelidad
![Screenshot](./prototipoBF1.png)
![Screenshot](./prototipoBF2.png)

Listado de problemas detectados a traves de tests de usabilidad:

-Con el prototipo inicial, se tenia el objetivo de mostrar una galeria de pokemones con el cual al momento de tener la imagen de cada uno, al dar click se mostrara la informacion de cada uno, sin embargo, encontramos la problematica de la configuracion de distintas pantallas, lo que hacia mayor tiempo de diseño, por lo que se opto por dejarlo en dos tarjetas para lograr el responsive

![Screenshot](./prototipoFigma1.png)
![Screenshot](./prototipoFigma2.png)

Este prototipo es por el que optamos para brindar la funcionalidad y vista de la pagina

##  Prototipo Final
![Screenshot](./prototipoAlta.png)

## 3. Historias de usuario
*Historia de Usuario 1: Seleccionar datos

YO COMO usuario QUIERO QUE la pagina contenga los datos que considero mas relevantes de los pokemones PARA elegir/visualizar la informacion que mas me interesa.

Criterios de aceptacion: Hay un menu de opciones para busqueda.
Definicion de Terminado: 10 personas respondieron el formulario para obtener los detalles mas relevantes sobre la busqueda deseada. Se tiene un prototipo de baja fidelidad.

*Historia de Usuario 2: Filtrado de datos por tipo de pokemon

YO COMO usuario, QUIERO filtrar los tipos de pokemon, PARA poder conocerlos o revisarlos por tipo

Criterios de aceptación: Se muestra información de búsqueda en pantalla, (botones, cuadros de texto para búsqueda), 

Definicion de terminado: Trabajar sobre el archivo data para comenzar a obtener la informacion de DATA. Se han subido los cambios a git (enviando al master), se aprueban PR.

*Historia de Usuario 3: Visualizacion de pokemones en pantalla

YO COMO usuario, QUIERO usar la pagina de pokemon en cualquier dispositivo, buscando tambien por nombre, PARA poder buscar rápidamente cuando ya conozco su nombre y encontrar sus características.

Criterios de aceptación: Hay categorias de búsqueda funcionando, se muestran los resultados en pantalla, se muestra la lista de tipos de pokemon, se muestra el grupo del tipo de pokemon elegido, es responsivo(adaptable a distintas pantallas).

Definición de terminado: Funciones, arreglos etc., que permitan el filtrado de los datos, Implementar CSS en barras de busqueda, o listas desplegables, arreglo que busque los grupos de tipo, arreglo que busque todos los pokemon de un grupo (si es tipo tierra, enviar los "ejemplo 30 pokemon de tierra", input que permita la busqueda por nombre,boton que valide el envio de la busqueda de informacion.

*Historia de Usuario 4: Visualizacion de galeria de imagenes pokemones.

YO COMO usuario de pokemon QUIERO ver pokemones en la pagina principal para conocer algunos antes de buscarlos.

Criterios de aceptación: El usuario podrá ver 10 imágenes de pokemones al azar, el usuario puede hacer busqueda completa de pokemon por filtros, nombre y numero.

Definición de terminado: Las imágenes serán todas tomadas de la data, la informacion de cada pokemon es mostrada en un mismo contenedor, se puede subir o bajar con scroll, Se mantiene los tamaños de contenedores para evitar el crecimiento de los mismos en pagina al agregar mas informacion, Los test unitarios estan completos.

## Links:
*Trello https://trello.com/b/MaxrWwju/data-lovers




