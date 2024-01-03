/**
 * Este archivo contiene la lógica de los sonidos del juego Asteroids.
 * @module sounds
 */
/**
 * Reproduce el sonido de una explosión.
 * @function reproducirExplosion
 * @returns {void}
 */
export function reproducirExplosion() {
    let nuevaExplosion = new Audio('./sounds/explosion.mp3');
    nuevaExplosion.play();
}

/**
 * Reproduce el sonido de disparo.
 * @function reproducirDisparo
 * @returns {void}
 */
export function reproducirDisparo() {
    let nuevoDisparo = new Audio('./sounds/shot.mp3');
    nuevoDisparo.play();
}

/**
 * Reproduce el sonido de bonus.
 * @function reproducirBonus
 * @returns {void}
 */
export function reproducirBonus() {
    let nuevoBonus = new Audio('./sounds/bonus.mp3');
    nuevoBonus.play();
}

/**
 * Reproduce el sonido de teleport.
 * @function reproducirTeleport
 * @returns {void}
 */
export function reproducirTeleport() {
    let nuevoTeleport = new Audio('./sounds/teleport.mp3');
    nuevoTeleport.play();
}

/**
 * Reproduce el sonido de vida perdida.
 * @function reproducirLifeLost
 * @returns {void}
 */
export function reproducirLifeLost() {
    let nuevoLifeLost = new Audio('./sounds/lifelost.mp3');
    nuevoLifeLost.play();
}
