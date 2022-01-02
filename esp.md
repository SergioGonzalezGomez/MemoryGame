/* ##Memory game
Dado el html ``exercise-1.html`` y el css`` exercise-1.css``, crea un archivo de javascript (recuerda que el
 javascript que
 proporcionamos nosotros es el que contiene la solución propuesta) para crear un juego de memoria con
los datos proporcionados por el siguiente array:

Este juego es el típico juego de memoria por pareja en el que tendremos que **seleccionar dos tarjetas y si ambas tarjetas
 ocultan la misma imagen, la jugada será correcta** y, si por el contrario **las tarjetas son diferentes entre sí, sus
 imágenes se volverán a ocultar**.
 
##Pasos a seguir
 
 1.  Pintar un tablero con las doce imágenes del array y el `src` apuntando al svg de `public/exercise/universe.svg`. 
 Ten en cuenta que como es un juego de parejas, las imágenes y nombres están repetidas en el array.
 2. Añadir a cada una de las imágenes un evento click para comprobar si la jugada realizada por el usuario es correcta.
 Para ello, tendremos que guardar cada dos click en tarjetas que haga el usuario y comparar uno con otro siguiendo
  las siguientes condiciones:
    1. Si el usuario hace click en la misma tarjeta dos veces, la jugada no es valida.
    2. Si el usuario hace click en una tarjeta previamente validada, la jugada no es valida.
    3. Si el usuario hace click en dos tarjetas con el nombre diferente, la jugada no es valida.
    4. Si ninguna de estas condiciones se cumple y, el usuario hace click en dos tarjetas con diferentes nombres. la
     jugada será validada y tendremos que almacenar las tarjetas para posteriores comprobaciones. Además, el ``src
     `` de la imagen debería de cambiar a ``public/exercise-1/tick.svg``.
 3. Por cada una de las jugadas deberemos validar el score y sumar 1 por cada jugada validada correctamente al span
  de ```score```. Si el
  usuario ha resuelto el juego completo, muestralé un mensaje de felicitaciones.
 4. Por último, para medir la calidad del juego, podríamos crear un contador de intentos e introducir el numero de
  intentos que el usuario ha llevado a cabo en el span de ``attempts``. Realmente este punto es bastante fácil, suma
   simplemente uno por cada vez que hagas una comprobación de jugada.

Si has cumplido todas las condiciones...Enhorabuena! tienes un juego de memoría bastante resultón! Además si te
 interesa subir la dificultad no tienes más que hacer el array más grande y meter más imagenes...¿te atreves? :D
 */


START GAME
1- Hacer un boton start game que cuando se pulse pinte en pantalla las imagenes aleatoriamente y restablezca todo.
Para ello habrá que hacer un shuffle del array con las imagenes cada vez que le des a start game.

CLICK
Cuando des click a una imagen ésta se dara la vuelta mostrando la imagen, salvo que la imagen tenga ya un tick o se haya dado la vuelta
El número máximo de clicks válidos tiene que ser dos, y al segundo subir en 1 el attempts y hacer las comprobaciones para ver si son pareja.
Si son pareja las imagenes se convertiran en ticks subira en 1 el score. Si es la última pareja saldra un alert de felicitaciones
Si no son pareja volverán a ser la imagen universe.
el numero de clicks volvera a ser 0.
