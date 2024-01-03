/**
 * Este archivo contiene la lógica de creacion de enemigos del juego Asteroids.
 * @file
 * @module createEnemies
 */
import { canvas } from './canvas.js'
import { EnemyShip, EnemyShip02, EnemyShip03, AsteroidEnemy } from './enemies.js'
import { enemies, enemies02, enemies03, asteroids } from './const.js'

/**
 * Funcion que crear los enemigos.
 * @function createEnemies
 * @returns {void}
 */
export function createEnemies() {
    let enemyInterval = 3000;

    function createEnemy(enemyType) {
        const index = Math.floor(Math.random() * 4);
        let x, y;
        let vx, vy;
        let radius = 50 * Math.random() + 10;
        let height = 50 * Math.random() + 50;
        let width = 50 * Math.random() + 50;

        switch (index) {
            case 0:
                x = 0 - radius;
                y = Math.random() * canvas.height;
                vx = 1;
                vy = 0;
                break;
            case 1:
                x = Math.random() * canvas.width;
                y = canvas.height + radius;
                vx = 0;
                vy = -1;
                break;
            case 2:
                x = canvas.width + radius;
                y = Math.random() * canvas.height;
                vx = -1;
                vy = 0;
                break;
            case 3:
                x = Math.random() * canvas.width;
                y = 0 - radius;
                vx = 0;
                vy = 1;
                break;
        }

        const enemy = new enemyType({
            position: {
                x: x,
                y: y,
            },
            velocity: {
                x: vx,
                y: vy,
            },
        });

        if (enemyType === EnemyShip) {
            enemies.push(enemy);
        } else if (enemyType === EnemyShip02) {
            enemies02.push(enemy);
        } else if (enemyType === EnemyShip03) {
            enemies03.push(enemy);
        } else if (enemyType === AsteroidEnemy) {
            asteroids.push(new AsteroidEnemy(x, y, Math.floor(Math.random() * 360), height, width));
        }
    }

    window.setInterval(() => createEnemy(EnemyShip), enemyInterval * 2.5);
    window.setInterval(() => createEnemy(EnemyShip02), enemyInterval * 3.5);
    window.setInterval(() => createEnemy(EnemyShip03), enemyInterval * 2);
    window.setInterval(() => createEnemy(AsteroidEnemy), enemyInterval);
}
