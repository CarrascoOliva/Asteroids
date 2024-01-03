/**
 * Este archivo contiene las clases que representan a los enemigos del juego Asteroids.
 * @file
 * @module enemies
 */
import { c, canvas } from "./canvas.js";
import { enemyImageArray, enemyImage02Array, enemyImage03Array, asteroidImage } from "./images.js";
import { ANGLE_REBOUND, VELOCITY } from "./const.js";


/**
 * Clase que representa una nave enemiga.
 * @class EnemyShip
 * @property {Object} position - La posición de la nave enemiga.
 * @property {Object} velocity - La velocidad de la nave enemiga.
 * @property {number} rotation - La rotación de la nave enemiga.
 * @property {number} radius - El radio de la nave enemiga.
 * @property {Array} imageArray - El array de imágenes de la nave enemiga.
 * @property {number} imageIndex - El índice de la imagen actual de la nave enemiga.
 * @property {number} imageChangeTime - El tiempo de cambio de imagen de la nave enemiga.
 * @property {number} imageWidth - El ancho de la imagen de la nave enemiga.
 * @property {number} imageHeight - La altura de la imagen de la nave enemiga.
 * @property {number} lastImageChangeTime - El tiempo del último cambio de imagen de la nave enemiga.
 * @property {boolean} destroyed - Indica si la nave enemiga ha sido destruida.
 */
export class EnemyShip {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.rotation = Math.atan2(velocity.y, velocity.x);
        this.radius = 64;
        this.imageArray = enemyImageArray;
        this.imageIndex = 0;
        this.imageChangeTime = 300;
        this.imageWidth = 150;
        this.imageHeight = 128;
        this.lastImageChangeTime = 0;
        this.destroyed = false;
    }

    draw() {
        c.save();
        c.translate(this.position.x, this.position.y);
        c.rotate(this.rotation);
        c.drawImage(
            this.imageArray[this.imageIndex],
            -this.imageWidth / 2,
            -this.imageHeight / 2,
            this.imageWidth,
            this.imageHeight
        );
        c.restore();
    }

    update() {
        this.draw();

        const currentTime = Date.now();

        if (currentTime - this.lastImageChangeTime >= this.imageChangeTime) {
            this.imageIndex = (this.imageIndex + 1) % this.imageArray.length;
            this.lastImageChangeTime = currentTime;
        }

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    destroy() {
        this.destroyed = true;
    }
}

/**
 * Clase que representa una nave enemiga.
 * @class EnemyShip02
 * @property {Object} position - La posición de la nave enemiga.
 * @property {Object} velocity - La velocidad de la nave enemiga.
 * @property {number} rotation - La rotación de la nave enemiga.
 * @property {number} radius - El radio de la nave enemiga.
 * @property {Array} imageArray - El array de imágenes de la nave enemiga.
 * @property {number} imageIndex - El índice de la imagen actual de la nave enemiga.
 * @property {number} imageChangeTime - El tiempo de cambio de imagen de la nave enemiga.
 * @property {number} imageWidth - El ancho de la imagen de la nave enemiga.
 * @property {number} imageHeight - La altura de la imagen de la nave enemiga.
 * @property {number} lastImageChangeTime - El tiempo del último cambio de imagen de la nave enemiga.
 * @property {boolean} destroyed - Indica si la nave enemiga ha sido destruida.
 */
export class EnemyShip02 {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.rotation = Math.atan2(velocity.y, velocity.x);
        this.radius = 64;
        this.imageArray = enemyImage02Array;
        this.imageIndex = 0;
        this.imageChangeTime = 300;
        this.imageWidth = 128;
        this.imageHeight = 60;
        this.lastImageChangeTime = 0;
        this.destroyed = false;
    }

    draw() {
        c.save();
        c.translate(this.position.x, this.position.y);
        c.rotate(this.rotation);
        c.drawImage(
            this.imageArray[this.imageIndex],
            -this.imageWidth / 2,
            -this.imageHeight / 2,
            this.imageWidth,
            this.imageHeight
        );
        c.restore();
    }

    update() {
        this.draw();

        const currentTime = Date.now();

        if (currentTime - this.lastImageChangeTime >= this.imageChangeTime) {
            this.imageIndex = (this.imageIndex + 1) % this.imageArray.length;
            this.lastImageChangeTime = currentTime;
        }

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    destroy() {
        this.destroyed = true;
    }
}

/**
 * Clase que representa una nave enemiga.
 * @class EnemyShip03
 * @property {Object} position - La posición de la nave enemiga.
 * @property {Object} velocity - La velocidad de la nave enemiga.
 * @property {number} rotation - La rotación de la nave enemiga.
 * @property {number} radius - El radio de la nave enemiga.
 * @property {Array} imageArray - El array de imágenes de la nave enemiga.
 * @property {number} imageIndex - El índice de la imagen actual de la nave enemiga.
 * @property {number} imageChangeTime - El tiempo de cambio de imagen de la nave enemiga.
 * @property {number} imageWidth - El ancho de la imagen de la nave enemiga.
 * @property {number} imageHeight - La altura de la imagen de la nave enemiga.
 * @property {number} lastImageChangeTime - El tiempo del último cambio de imagen de la nave enemiga.
 * @property {boolean} destroyed - Indica si la nave enemiga ha sido destruida.
 */
export class EnemyShip03 {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.rotation = Math.atan2(velocity.y, velocity.x);
        this.radius = 64;
        this.imageArray = enemyImage03Array;
        this.imageIndex = 0;
        this.imageChangeTime = 300;
        this.imageWidth = 140;
        this.imageHeight = 90;
        this.lastImageChangeTime = 0;
        this.destroyed = false;
    }

    draw() {
        c.save();
        c.translate(this.position.x, this.position.y);
        c.rotate(this.rotation);
        c.drawImage(
            this.imageArray[this.imageIndex],
            -this.imageWidth / 2,
            -this.imageHeight / 2,
            this.imageWidth,
            this.imageHeight
        );
        c.restore();
    }

    update() {
        this.draw();

        const currentTime = Date.now();

        if (currentTime - this.lastImageChangeTime >= this.imageChangeTime) {
            this.imageIndex = (this.imageIndex + 1) % this.imageArray.length;
            this.lastImageChangeTime = currentTime;
        }

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    destroy() {
        this.destroyed = true;
    }
}


/**
 * Clase que representa un enemigo asteroide.
 * @class AsteroidEnemy
 * @property {number} posX - La posición en el eje X del asteroide.
 * @property {number} posY - La posición en el eje Y del asteroide.
 * @property {number} angle - El ángulo del asteroide.
 * @property {Image} img - La imagen del asteroide.
 * @property {number} height - La altura del asteroide.
 * @property {number} width - El ancho del asteroide.
 */
export class AsteroidEnemy {
    constructor(posX, posY, angle, height, width) {
        this.posX = posX;
        this.posY = posY;
        this.angle = angle;
        this.img = asteroidImage;
        this.height = height;
        this.width = width;
    }


    render() {
        c.drawImage(this.img, this.posX, this.posY, this.height, this.width);
    }

    move(){
        this.detectColisionBorder();
        let radians = this.angle * (Math.PI / 180);
        let plus = {
            x: Math.cos(radians)*VELOCITY,
            y: Math.sin(radians)*VELOCITY
         }
        this.posX+=plus.x;
        this.posY+=plus.y;
        this.render();
    }

    detectColisionBorder(){
        if(this.posX+this.width>=canvas.width || this.posY+this.height>=canvas.height || this.posX<=0 || this.posY<=0 ){
            
            if(this.posY<=0 && (this.angle>=180 && this.angle<=(360-ANGLE_REBOUND))){
                this.angle+=ANGLE_REBOUND;
                this.angle=this.angle%360;
                this.posY=+2;
            }
            if(this.posX<=0 && (this.angle>=90 && this.angle<=(330-ANGLE_REBOUND))){
                this.angle+=ANGLE_REBOUND;
                this.angle=this.angle%360;
                this.posX=+2;
            }
            if(this.posY+this.height>=canvas.height && (this.angle>=0 && this.angle<=(210-ANGLE_REBOUND))){
                this.angle+=ANGLE_REBOUND;
                this.angle=this.angle%360;
                this.posY=this.posY-2;
            }
            if(this.posX+this.width>=canvas.width && (this.angle>=270 || this.angle<=(120-ANGLE_REBOUND))){
                this.angle+=ANGLE_REBOUND;
                this.angle=this.angle%360;
                this.posX=this.posX-2;
            }
            this.angle+=ANGLE_REBOUND;
            this.angle=this.angle%360;
        }
    }

    detectColision(obj){
        let detect=false;
        if(obj.position.x+obj.radius>=this.posX && obj.position.x<=this.posX+this.width && obj.position.y+obj.radius>=this.posY && obj.position.y<=this.posY+this.height){
            detect=true;
        }
        return detect;
    }
}
