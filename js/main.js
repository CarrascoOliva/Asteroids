/**
 * Este archivo contiene el código principal del juego Asteroids.
 * @file
 * @module main
 */
import {c, canvas, body} from './canvas.js'
import { player} from './const.js'
import { mostrasUsos, mostrarPuntuacion,dibujarCorazones, dibujarDobles, dibujarEscudos, dibujarExplosiones, dibujarTeleports } from './ui.js';
import { Creaciones, comprobarVidas, CondicionesKeys, updateObject } from './gameLogic.js';
import { detectarColisiones, detectarColisionesProyectiles, actualizarMultiplicadorTemporal, mostrarPuntuacionx2 } from './colisiones.js';
import { createEnemies } from './createEnemies.js';
import { handleClick, handleKeyDown, handleKeyUp, handleMouseMove } from './eventos.js';
import { reproducirTeleport } from './sounds.js';






//& Update


/**
 * Funcion principal del juego, encargada de actualizar los elementos del juego.
 * @function
 * @returns {void}
 */
function update() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    console.log("update")
    body.style.backgroundImage="url('../img/space-stars.gif')"

    window.requestAnimationFrame(update);

    player.update()
    mostrasUsos()
    Creaciones()
    mostrarPuntuacion()
    mostrarPuntuacionx2()
    detectarColisiones();
    detectarColisionesProyectiles();
    dibujarExplosiones();
    dibujarTeleports();
    dibujarDobles();
    dibujarEscudos();
    actualizarMultiplicadorTemporal();
    updateObject();
    CondicionesKeys();
    dibujarCorazones();
    comprobarVidas();

}

update()
createEnemies();

//& Eventos de la ventana

let isTeleporting = false;
window.addEventListener('keydown', (event) => {
    handleKeyDown(event);
    switch(event.code){
      case 'Space':
        event.preventDefault();
        if (!isTeleporting && player.usosTeleport > 0) {
          isTeleporting = true;
          player.usosTeleport--;
          reproducirTeleport();
        }
        break;
    }
  });
  
  window.addEventListener('keyup', (event) => {
    handleKeyUp(event);
    switch(event.code){
      case 'Space':
        event.preventDefault();
        isTeleporting = false;
    }
  });
  
  window.addEventListener('mousemove', (event) => {
    handleMouseMove(event);
    if (isTeleporting) {
      player.position.x = event.clientX;
      player.position.y = event.clientY;
      isTeleporting = true;
    }
  });
  
  window.addEventListener('click', (event) => {
    handleClick(event);
  });
