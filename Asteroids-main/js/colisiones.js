/**
 * Este archivo contiene la lógica de las colisiones del juego Asteroids.
 * @file
 * @module colisiones
 */
import { player, asteroids, enemies, enemies02, enemies03, teletransportes, dobles, escudos, projectiles} from "./const.js";
import { reproducirExplosion, reproducirBonus, reproducirLifeLost } from "./sounds.js";
import { AsteroidEnemy } from "./enemies.js";
import { c } from "./canvas.js";


let multiplicadorPuntuacion = 1;
let multiplicadorActivo = false;
let tiempoMultiplicador = 0;

//& Colisiones

//? Player con Enemigos

/**
 * Detecta colisiones entre el jugador y los enemigos, y entre el jugador y los bonus.
 * @function detectarColisiones
 * @returns {void}
 */
export function detectarColisiones() {

    for (let i = 0; i < asteroids.length; i++) {
        const asteroid = asteroids[i]
        if (asteroid.detectColision(player) && !player.escudo) {
            player.lifesLost++
            console.log(player.lifesLost)
            asteroids.splice(i, 1)
            reproducirLifeLost()
        }
    }

    for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i]
        const distancia = Math.sqrt(
            (player.position.x - enemy.position.x) ** 2 +
            (player.position.y - enemy.position.y) ** 2
        );
        if (distancia < player.radius + enemy.radius && !player.escudo) {
            player.lifesLost++
            console.log(player.lifesLost)
            enemy.destroy()
            reproducirLifeLost()
            reproducirExplosion()
        }
    }

    for (let i = 0; i < enemies02.length; i++) {
        const enemy = enemies02[i]
        const distancia = Math.sqrt(
            (player.position.x - enemy.position.x) ** 2 +
            (player.position.y - enemy.position.y) ** 2
        );
        if (distancia < player.radius + enemy.radius && !player.escudo) {
            player.lifesLost++
            enemy.destroy()
            reproducirLifeLost()
            reproducirExplosion()
        }

        if (player.lifes <= 0) {
            location.href = '/index.html'
        }
    }

    for (let i = 0; i < enemies03.length; i++) {
        const enemy = enemies03[i]
        const distancia = Math.sqrt(
            (player.position.x - enemy.position.x) ** 2 +
            (player.position.y - enemy.position.y) ** 2
        );
        if (distancia < player.radius + enemy.radius && !player.escudo) {
            player.lifesLost++
            enemy.destroy()
            reproducirLifeLost()
            reproducirExplosion()
        }
    }

//? Player con Bonus
    for (let i = 0; i < teletransportes.length; i++) {
        const teletransport = teletransportes[i]
        const distancia = Math.sqrt(
            (player.position.x - teletransport.position.x) ** 2 +
            (player.position.y - teletransport.position.y) ** 2
        );
        if (distancia < player.radius + teletransport.radius) {
            player.usosTeleport++
            teletransportes.splice(i, 1)
            reproducirBonus()
        }
    }

    for (let i = 0; i < dobles.length; i++) {
        const doble = dobles[i]
        const distancia = Math.sqrt(
            (player.position.x - doble.position.x) ** 2 +
            (player.position.y - doble.position.y) ** 2
        );
        if (distancia < player.radius + doble.radius) {
            multiplicadorActivo = true
            tiempoMultiplicador = 1000
            dobles.splice(i, 1)
            reproducirBonus()
        }
    }

    for (let i = 0; i < escudos.length; i++) {
        const doble = escudos[i]
        const distancia = Math.sqrt(
            (player.position.x - doble.position.x) ** 2 +
            (player.position.y - doble.position.y) ** 2
        );
        if (distancia < player.radius + doble.radius) {
            player.escudo = true
            escudos.splice(i, 1)
            reproducirBonus()
        }
    }
}


//? Proyectiles con Enemigos
/**
 * Actualiza el multiplicador temporal de la puntuación.
 * Si el multiplicador está activo, disminuye el tiempo restante en 1 y establece la puntuación en 2.
 * Si el tiempo restante es menor o igual a 0, desactiva el multiplicador y establece la puntuación en 1.
 * @function actualizarMultiplicadorTemporal
 * @returns {void}
 */
export function actualizarMultiplicadorTemporal() {
    if (multiplicadorActivo) {
        tiempoMultiplicador -= 1;
        multiplicadorPuntuacion = 2;
        if (tiempoMultiplicador <= 0) {
            multiplicadorActivo = false;
            multiplicadorPuntuacion = 1;
        }
    }
}

/**
 * Muestra la puntuación multiplicada por 2 si el multiplicador está activo.
 * @function mostrarPuntuacionx2
 * @returns {void}
 */
export function mostrarPuntuacionx2() {
    if (multiplicadorActivo) {
        c.font = "BOLD 30px Arial";
        c.fillStyle = "#fcf803";
        c.fillText(`SCORE X2: ${tiempoMultiplicador}`, 10, 200);
    }
}
/**
 * Detects collisions between projectiles and asteroids or enemies, updates player score, removes collided objects and plays explosion sound.
 * @function detectarColisionesProyectiles
 * @returns {void}
 */
export function detectarColisionesProyectiles() {

    for (let i = projectiles.length - 1; i >= 0; i--) {
        const projectile = projectiles[i]

  
        for (let j = 0; j < asteroids.length; j++) {
            const asteroid = asteroids[j];
            if (asteroid.detectColision(projectile)) {
                if(asteroid.width >= 50) {
                asteroids.push(
                    new AsteroidEnemy(
                        asteroid.posX + 10,
                        asteroid.posY + 10,
                        Math.random() * Math.PI * 2,
                        asteroid.height / 2,
                        asteroid.width / 2
                    ),
                    new AsteroidEnemy(
                        asteroid.posX - 10,
                        asteroid.posY - 10,
                        Math.random() * Math.PI * 2,
                        asteroid.height / 2,
                        asteroid.width / 2
                    ),
                )
                }
                player.puntuacion += 1 * multiplicadorPuntuacion;
                projectiles.splice(i, 1)
                asteroids.splice(j, 1)
                reproducirExplosion()
            }
        }

        for (let j = enemies.length - 1; j >= 0; j--) {
            const enemy = enemies[j]
            const distancia = Math.sqrt(
                (projectile.position.x - enemy.position.x) ** 2 +
                (projectile.position.y - enemy.position.y) ** 2
            );

            if (distancia < projectile.radius + enemy.radius) {
                player.puntuacion += 1 * multiplicadorPuntuacion;
                projectiles.splice(i, 1)
                enemy.destroy()
                reproducirExplosion()
            }
        }

        for (let j = enemies02.length - 1; j >= 0; j--) {
            const enemy = enemies02[j];
            const distancia = Math.sqrt(
                (projectile.position.x - enemy.position.x) ** 2 +
                (projectile.position.y - enemy.position.y) ** 2
            );

            if (distancia < projectile.radius + enemy.radius) {
                player.puntuacion += 1 * multiplicadorPuntuacion;
                projectiles.splice(i, 1)
                enemy.destroy()
                reproducirExplosion()
            }
        }

        for (let j = enemies03.length - 1; j >= 0; j--) {
            const enemy = enemies03[j]
            const distancia = Math.sqrt(
                (projectile.position.x - enemy.position.x) ** 2 +
                (projectile.position.y - enemy.position.y) ** 2
            );

            if (distancia < projectile.radius + enemy.radius) {
                player.puntuacion += 1 * multiplicadorPuntuacion;
                projectiles.splice(i, 1)
                enemy.destroy()
                reproducirExplosion();
            }
        }
    }
}
