/**
 * Este archivo contiene la lógica de la interfaz del juego Asteroids.
 * @file
 * @module ui
 */
import {c} from "./canvas.js";
import { escudos, explosiones, dobles, teletransportes, player } from "./const.js";
import { corazon, corazonMenos } from './images.js'

/**
 * Dibuja todas las explosiones en la pantalla.
 * @function dibujarExplosiones
 * @returns {void}
 */
export function dibujarExplosiones() {
    for (const explosion of explosiones) {
        explosion.draw();
    }
}

/**
 * Dibuja todos los elementos dobles en la pantalla.
 * @function dibujarDobles
 * @returns {void}
 */
export function dibujarDobles() {
    for (const doble of dobles) {
        doble.draw();
    }
}

/**
 * Dibuja los teletransportes en la pantalla.
 * @function dibujarTeleports
 * @returns {void}
 */
export function dibujarTeleports() {
    for (const teletransport of teletransportes) {
        teletransport.draw();
    }
}

/**
 * Dibuja los escudos en la pantalla.
 * @function dibujarEscudos
 * @returns {void}
 */
export function dibujarEscudos() {
    for (const escudo of escudos) {
        escudo.draw();
    }
}

/**
 * Dibuja los corazones en el canvas y los actualiza según las vidas perdidas del jugador.
 * @function dibujarCorazones
 * @returns {void}
 */
export function dibujarCorazones() {
    let distance = 55
    for (let i = 0; i < 3; i++) {
        c.drawImage(corazon, canvas.width - distance, 10);
        distance += 55
    }


    function quitarVidas(lifesLost) {
        let distance2 = 55
            for (let i = 0; i < 3 - lifesLost; i++) {
                c.drawImage(corazon, canvas.width - distance2, 10);
                distance2 += 55
            }

            for (let i = 0; i < lifesLost; i++) {
                c.drawImage(corazonMenos, canvas.width - distance2, 10);
                distance2 += 55
            }
    }

    switch (player.lifesLost) {
        case 3:
            quitarVidas(3);
            break;
        case 2:
            quitarVidas(2);
            break;
        case 1:
            quitarVidas(1);
            break;
        default:
            break;
    }
}

//& usos y puntuacion en el canvas

/**
 * Muestra el número de usos de teletransporte del jugador en la pantalla.
 * @function mostrasUsos
 * @returns {void}
 */
export function mostrasUsos() {
    c.font = "BOLD 30px Arial";
    c.fillStyle = "#fcf803";
    c.fillText(`TELEPORTS: ${player.usosTeleport}`, 10, 100);
}

/**
 * Muestra la puntuación del jugador en la pantalla.
 * @function mostrarPuntuacion
 * @returns {void}
 */
export function mostrarPuntuacion() {
    c.font = "BOLD 30px Arial";
    c.fillStyle = "#fcf803";
    c.fillText(`SCORE: ${player.puntuacion}`, 10, 150);
}

