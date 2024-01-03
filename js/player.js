/**
 * Este archivo contiene el objeto Player del juego Asteroids.
 * @file
 * @module player
 */
import {c} from "./canvas.js";
import {playerImage} from "./images.js";
import {puntuacion} from "./const.js";

/**
 * Clase que representa al jugador en el juego Asteroids.
 * @class Player
 * @property {Object} position - Objeto que representa la posición del jugador en el canvas.
 * @property {number} position.x - Coordenada x de la posición del jugador.
 * @property {number} position.y - Coordenada y de la posición del jugador.
 * @property {Object} velocity - Objeto que representa la velocidad del jugador en el canvas.
 * @property {number} velocity.x - Componente x de la velocidad del jugador.
 * @property {number} velocity.y - Componente y de la velocidad del jugador.
 * @property {number} rotation - Ángulo de rotación del jugador.
 * @property {Image} image - Imagen del jugador.
 * @property {number} imageWidth - Ancho de la imagen del jugador.
 * @property {number} imageHeight - Alto de la imagen del jugador.
 * @property {number} radius - Radio del jugador.
 * @property {number} usosTeleport - Número de usos del teleport del jugador.
 * @property {number} puntuacion - Puntuación del jugador.
 * @property {boolean} escudo - Indica si el jugador tiene escudo o no.
 * @property {number} tiempoEscudo - Tiempo restante del escudo del jugador.
 * @property {number} lifesLost - Número de vidas perdidas por el jugador.
 */
export class Player {
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.rotation = 0
        this.image = playerImage
        this.imageWidth = 60
        this.imageHeight = 90
        this.radius = 30
        this.usosTeleport = 3
        this.puntuacion = puntuacion
        this.escudo = false
        this.tiempoEscudo = 500
        this.lifesLost = 0
    }

    draw() {
        c.save();
        c.translate(this.position.x, this.position.y);
        c.rotate(this.rotation + Math.PI / 2);
        c.drawImage(
            this.image,
            -this.imageWidth / 2,
            -this.imageHeight / 2,
            this.imageWidth,
            this.imageHeight
        );
        c.restore();
    }

    update() {
        setTimeout(() => {
            this.tiempoEscudo -= 1;
            if (this.tiempoEscudo <= 0) {
                this.escudo = false;
                this.tiempoEscudo = 500;
            }
        }, 100);
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}
