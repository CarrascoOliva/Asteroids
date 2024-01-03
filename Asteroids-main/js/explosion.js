/**
 * Este archivo contiene la clase Explosion.
 * @file
 * @module explosion
 */
import { c } from "./canvas.js";
import { explosionImages } from "./images.js";

//? Explosion
/**
 * Clase que representa una explosión en el juego Asteroids.
 * @class Explosion
 * @property {Object} position - La posición de la explosión.
 * @property {Array} imageArray - Un array de imágenes que representan la animación de la explosión.
 * @property {number} imageIndex - El índice de la imagen actual en el array de imágenes.
 * @property {number} imageChangeTime - El tiempo que tarda en cambiar de imagen.
 * @property {number} lastImageChangeTime - El tiempo en el que se cambió por última vez de imagen.
 * @property {boolean} finished - Indica si la explosión ha terminado.
 * @property {string} tipo - El tipo de enemigo que ha explotado.
 */
export class Explosion {
    constructor(position, enemyTipo) {
        this.position = position;
        this.imageArray = explosionImages.map(imagePath => {
            const img = new Image();
            img.src = imagePath;
            return img;
        });
        this.imageIndex = 0;
        this.imageChangeTime = 100;
        this.lastImageChangeTime = 0;
        this.finished = false;
        this.tipo = enemyTipo;
    }

    draw() {
        c.drawImage(
            this.imageArray[this.imageIndex],
            this.position.x - this.imageArray[this.imageIndex].width / 2,
            this.position.y - this.imageArray[this.imageIndex].height / 2
        );
    }

    update() {
        const currentTime = Date.now();

        if (currentTime - this.lastImageChangeTime >= this.imageChangeTime) {
            this.imageIndex++;

            if (this.imageIndex >= this.imageArray.length) {
                this.finished = true;
                return true;
            }

            this.lastImageChangeTime = currentTime;
        }

        this.draw();
        return false;
    }
}