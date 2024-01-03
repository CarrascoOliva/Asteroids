/**
 * Este archivo contiene la lógica del juego Asteroids.
 * @file
 * @module gameLogic
 */
import {canvas, c} from './canvas.js'
import {player, keys, enemies, enemies02, enemies03, asteroids, dobles, escudos, teletransportes, explosiones, projectiles, SPEED, FRICTION, ROTATIONAL_SPEED} from './const.js'
import { Explosion } from './explosion.js'
import { Teletransporte, Escudo, Bonus2x } from './bonus.js'


/**
 * Comprueba si el jugador ha perdido todas sus vidas y redirige a la página de game over si es el caso.
 * @function comprobarVidas
 * @returns {void}
 */
export function comprobarVidas() {
    if (player.lifesLost == 3) {
        location.href = './gameover.html'
    }
}

/**
 * Función que maneja las condiciones de las teclas presionadas para el movimiento y rotación de la nave del jugador.
 * @function CondicionesKeys
 * @returns {void}
 */
let isTeleporting = false;
export function CondicionesKeys() {
    if (keys.w.pressed) {
        player.velocity.x = Math.cos(player.rotation) * SPEED
        player.velocity.y = Math.sin(player.rotation) * SPEED
        if (player.escudo) {
            player.image.src = './img/nave02_escudo.png'
            player.imageWidth = 90
            player.imageHeight = 90
        } else {
            player.image.src = './img/nave02.png'
            player.imageWidth = 60
            player.imageHeight = 90
        }
    } else if (!keys.w.pressed) {
        player.velocity.x *= FRICTION
        player.velocity.y *= FRICTION

        if (player.escudo) {
            player.image.src = './img/nave_escudo.png'
            player.imageWidth = 90
            player.imageHeight = 90
        } else {
            player.image.src = './img/nave.png'
            player.imageWidth = 60
            player.imageHeight = 90
        }
    }

    if (keys.d.pressed) {
        player.rotation += ROTATIONAL_SPEED
        if (player.escudo) {
            player.image.src = './img/nave02_escudo.png'
            player.imageWidth = 90
            player.imageHeight = 90
        } else {
            player.image.src = './img/nave02.png'
            player.imageWidth = 60
            player.imageHeight = 90
        }
    } else if (keys.a.pressed) {
        player.rotation -= ROTATIONAL_SPEED
        if (player.escudo) {
            player.image.src = './img/nave02_escudo.png'
            player.imageWidth = 90
            player.imageHeight = 90
        } else {
            player.image.src = './img/nave02.png'
            player.imageWidth = 60
            player.imageHeight = 90
        }
    }
}

/**
 * Actualiza los objetos del juego.
 * @function updateObject
 * @returns {void}
 */
export function updateObject() {
    for (const teletransport of teletransportes) {
        teletransport.update();
    }

    for (const asteroid of asteroids) {
        asteroid.move();
    }

    for (const doble of dobles) {
        doble.update();
    }

    for (const escudo of escudos) {
        escudo.update();
    }

    for (const asteroid of asteroids) {
        asteroid.move();
    }


    for (let i = projectiles.length - 1; i >= 0; i--) {
        const projectile = projectiles[i];
        projectile.update();
    }

    enemies.filter(enemy => {
        return (
            enemy.position.x + enemy.radius >= 0 &&
            enemy.position.x - enemy.radius <= canvas.width &&
            enemy.position.y + enemy.radius >= 0 &&
            enemy.position.y - enemy.radius <= canvas.height
        );
    });

    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        enemy.update();
    }

    enemies02.filter(enemy => {
        return (
            enemy.position.x + enemy.radius >= 0 &&
            enemy.position.x - enemy.radius <= canvas.width &&
            enemy.position.y + enemy.radius >= 0 &&
            enemy.position.y - enemy.radius <= canvas.height
        );
    });

    for (let i = enemies02.length - 1; i >= 0; i--) {
        const enemy = enemies02[i];
        enemy.update();
    }


    enemies03.filter(enemy => {
        return (
            enemy.position.x + enemy.radius >= 0 &&
            enemy.position.x - enemy.radius <= canvas.width &&
            enemy.position.y + enemy.radius >= 0 &&
            enemy.position.y - enemy.radius <= canvas.height
        );
    });

    for (let i = enemies03.length - 1; i >= 0; i--) {
        const enemy = enemies03[i];
        enemy.update();
    }
}

/**
 * Crear mediante condicionales las explosiones y los bonus.
 * @function Creaciones
 * @returns {void}
 */
export function Creaciones(){
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        enemy.update();
        if (enemy.destroyed) {
            const enemyTipo = 1;
            explosiones.push(new Explosion(enemy.position, enemyTipo));
            enemies.splice(i, 1);
        }
    }

    for (let i = enemies02.length - 1; i >= 0; i--) {
        const enemy = enemies02[i];
        enemy.update();
        if (enemy.destroyed) {
            const enemyTipo = 2;
            explosiones.push(new Explosion(enemy.position, enemyTipo));
            enemies02.splice(i, 1);
        }
    }


    for (let i = enemies03.length - 1; i >= 0; i--) {
        const enemy = enemies03[i];
        enemy.update();
        if (enemy.destroyed) {
            const enemyTipo = 3;
            explosiones.push(new Explosion(enemy.position, enemyTipo));
            enemies03.splice(i, 1);
        }
    }

    for (let j = explosiones.length - 1; j >= 0; j--) {
        const explosion = explosiones[j];
        if (explosion.update()) {
            if (explosion.finished) {
                if (explosion.tipo == 1) {
                    teletransportes.push(new Teletransporte(explosion.position));
                } else if (explosion.tipo == 2) {
                    dobles.push(new Bonus2x(explosion.position));
                } else if (explosion.tipo == 3) {
                    escudos.push(new Escudo(explosion.position));
                }
                explosiones.splice(j, 1);
            }
        }
    }
}

