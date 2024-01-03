/**
 * Este archivo contiene el objeto Projectile del juego Asteroids.
 * @file
 * @module projectile
 */
import { c } from './canvas.js'
import { balaImage } from './images.js'

/**
 * Representa el objeto proyectil.
 * @class Projectile
 * @property {Object} position - Objeto que representa la posición del proyectil en el canvas.
 * @property {Object} velocity - Velocidad del proyectil.
 * @property {Image} image - Imagen del proyectil.
 * @property {number} imageWidth - Ancho de la imagen del proyectil.
 * @property {number} imageHeight - Alto de la imagen del proyectil.
 * @property {number} radius - Radio del proyectil.
 */
export class Projectile {
    constructor({ position, velocity }) {
        this.position = position
        this.velocity = velocity
        this.imageWidth = 43
        this.imageHeight = 55
        this.image = balaImage
        this.radius = 5
    }

    draw() {
        c.save();
        c.translate(this.position.x, this.position.y);
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
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}