# Wordelta

Como objetivo se tiene hacer un Wordle con distintos modos de juego y algunos modificadores, donde incluimos el cambio de lenguaje entre ingles y español y tambien la seleccion de temas de fondo con distintos colores.
![image](https://user-images.githubusercontent.com/70908908/168910202-09d68628-1e72-4cd4-aa19-f0d3b2b5dbc1.png)

# Lenguajes y herramientas utilizadas
Solo se utilizó HTML, CSS y JS para la creación base del proyecto (todas las funcionalidades y lógica fue trabajada en los scripts de JavaScript), mientras que para su despliegue en Heroku se requirío de Express (Node.js) y para su ejecutable se requirío de Electron (Node.js).
Los diseños que incluyen iconos y dibujos fueron realizados por nosotros mismos.
![image](https://user-images.githubusercontent.com/70908908/168910314-e064f6f6-1e16-4a2a-97a7-0978700656fd.png)

# Enlaces
Version para navegadores web y de smartphone:
https://wordelta-v1.herokuapp.com/index.html
![image](https://user-images.githubusercontent.com/70908908/168910465-4823a185-0993-4e74-a8aa-62b773b09a91.png)

Descarga para versión de PC:
Descargar y descomprimir "wordelta.zip", encontrando dentro "wordelta.exe"
![image](https://user-images.githubusercontent.com/70908908/168910529-5e3a1601-976d-4754-a88c-45abc464f865.png)

# Despliegues (Localmente / Heroku)
El despliegue local se logra simplemente corriendo el comando "node main.js" mientras el proyecto sea reconocido como un proyecto de node.js.
El despliegue en Heroku se logra creando un repositorio en heroku y subiendo todos los archivos contenidos en este repositorio, para luego hacer deploy y asi acceder a la página funcional.

# Modalidades
![image](https://user-images.githubusercontent.com/70908908/168910732-ccc3b875-d0f1-4480-a87a-e51a9fa18e93.png)

(Funcional) Clasico: Partidas clásicas de Wordle donde se tiene que encontrar la palabra oculta, teniendo monedas por recompensa que se pueden usar en la tienda.

(En desarrollo) Versus: Partidas clásicas de Wordle donde dos o mas jugadores tienen que encontrar la misma palabra de manera independiente, obteniendo puntos en un leaderboard para al final determinar quien fue el mejor jugador.

(En desarrollo) Co-op: Partidas donde el escenario toma diversas formas de mapa y los jugadores disponen de diferentes espacios para jugar, como si fuese un crucigrama, las intersecciones que sean adivinidas por un jugador podrán ayudar a otros jugadores hasta que se complete el mapa.

# Modificadores
(En desarrollo) Teclado: Se debe poder alternar entre el teclado QWERTY, QWERTZ y AZERTY para comodidad de jugadores de otros paises.

(En desarrollo) Tienda: Se debe disponer de una tienda donde se puedan usar las monedas ganadas en las partidas clásicas para la compra de temas o power-ups.

(Funcional) Temas: Se debe poder tener un menu para personalizar el tema (set de colores) que quieras visualizar en tu pantalla de juego.

![image](https://user-images.githubusercontent.com/70908908/168911080-eaa1e711-fc55-4498-a2c3-3c98f2097020.png)

(En desarrollo) Power-ups: En partidas clásicas se dispondran de power-ups obtenidos en la tienda para ayudar un poco en partidas que se vean complicadas.

(Funcional) Configuraciones: Poder cambiar el idioma de las instrucciones / botones y palabra a descubrir, además de un manejador de volumen.

![image](https://user-images.githubusercontent.com/70908908/168911141-1ef76dfe-bf9c-4897-acfb-f71821eee3fb.png)
