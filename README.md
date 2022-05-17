# Wordelta

Como objetivo se tiene hacer un Wordle con distintos modos de juego y algunos modificadores, donde incluimos el cambio de lenguaje entre ingles y español y tambien la seleccion de temas de fondo con distintos colores.

# Lenguajes y herramientas utilizadas
Solo se utilizó HTML, CSS y JS para la creación base del proyecto (todas las funcionalidades y lógica fue trabajada en los scripts de JavaScript), mientras que para su despliegue en Heroku se requirío de Express (Node.js) y para su ejecutable se requirío de Electron (Node.js).
Los diseños que incluyen iconos y dibujos fueron realizados por nosotros mismos.

# Enlaces
Version para navegadores web y de smartphone:
https://wordelta-v1.herokuapp.com/index.html
Descarga para versión de PC:
Descargar y descomprimir "wordelta.zip", encontrando dentro "wordelta.exe"

# Despliegues (Localmente / Heroku)
El despliegue local se logra simplemente corriendo el comando "node main.js" mientras el proyecto sea reconocido como un proyecto de node.js.
El despliegue en Heroku se logra creando un repositorio en heroku y subiendo todos los archivos contenidos en este repositorio, para luego hacer deploy y asi acceder a la página funcional.

# Modalidades
(Funcional) Clasico: Partidas clásicas de Wordle donde se tiene que encontrar la palabra oculta, teniendo monedas por recompensa que se pueden usar en la tienda.
(No funcional) Versus: Partidas clásicas de Wordle donde dos o mas jugadores tienen que encontrar la misma palabra de manera independiente, obteniendo puntos en un leaderboard para al final determinar quien fue el mejor jugador.
(No funcional) Co-op: Partidas donde el escenario toma diversas formas de mapa y los jugadores disponen de diferentes espacios para jugar, como si fuese un crucigrama, las intersecciones que sean adivinidas por un jugador podrán ayudar a otros jugadores hasta que se complete el mapa.

# Modificadores
Teclado: Se debe poder alternar entre el teclado QWERTY, QWERTZ y AZERTY para comodidad de jugadores de otros paises.
Tienda: Se debe disponer de una tienda donde se puedan usar las monedas ganadas en las partidas clásicas para la compra de temas o power-ups.
Temas: Se debe poder tener un menu para personalizar el tema (set de colores) que quieras visualizar en tu pantalla de juego.
Power-ups: En partidas clásicas se dispondran de power-ups obtenidos en la tienda para ayudar un poco en partidas que se vean complicadas.
Configuraciones: Poder cambiar el idioma de las instrucciones / botones y palabra a descubrir, además de un manejador de volumen.
