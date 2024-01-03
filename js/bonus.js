/**
 * Este archivo contiene los objetos bonus del juego Asteroids.
 * @file 
 * @module bonus
 */
import { c } from "./canvas.js";
import { bonus2xImage, bonusEscudoImage, bonusTeleportImage } from "./images.js";
import { dobles, escudos, teletransportes } from "./const.js";


/**
 * Clase que representa un bonus.
 * @class Bonus
 * @property {Object} position - La posición del bonus.
 * @property {Image} image - La imagen del bonus.
 * @property {number} imageIndex - El índice de la imagen del bonus.
 * @property {number} tiempoDeVida - El tiempo de vida del bonus.
 * @property {number} radius - El radio del bonus.
 */
class Bonus {
    constructor(position, image) {
        this.position = position;
        this.image = image;
        this.imageIndex = 0;
        this.tiempoDeVida = 500;
        this.radius = 25;
    }

    draw() {
        c.drawImage(
            this.image,
            this.position.x - this.image.width / 2,
            this.position.y - this.image.height / 2
        );
    }

    update() {
        setTimeout(() => {
            for (const teleport of teletransportes) {
                teleport.tiempoDeVida -= 1;
                if (teleport.tiempoDeVida <= 0) {
                    teletransportes.splice(teleport);
                }
            }
            for (const doble of dobles) {
                doble.tiempoDeVida -= 1;
                if (doble.tiempoDeVida <= 0) {
                    dobles.splice(doble);
                }
            }
            for (const escudo of escudos) {
                escudo.tiempoDeVida -= 1;
                if (escudo.tiempoDeVida <= 0) {
                    escudos.splice(escudo);
                }
            }
        }, 100);
        this.draw();
        return false;
    }
}

/**
 * Clase que representa un bonus de escudo.
 * @class Bonus2x
 * @extends Bonus
 */
export class Bonus2x extends Bonus {
    constructor(position) {
        const image = bonus2xImage;
        super(position, image);
    }
}

/**
 * Clase que representa un bonus de escudo.
 * @class Escudo
 * @extends Bonus
 */
export class Escudo extends Bonus {
    constructor(position) {
        const image = bonusEscudoImage;
        super(position, image);
    }
}

/**
 * Clase que representa un bonus de teletransporte.
 * @class Teletransporte
 * @extends Bonus
 */
export class Teletransporte extends Bonus {
    constructor(position) {
        const image = bonusTeleportImage;
        super(position, image);
    }
}