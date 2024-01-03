/**
 * Este archivo contiene la lógica de los eventos del juego Asteroids.
 * @file
 * @module eventos
 */
import { reproducirDisparo } from './sounds.js';
import { keys, player, projectiles, PROJECTILE_SPEED } from './const.js';
import { Projectile } from './projectile.js';

/**
 * Maneja el evento de tecla presionada.
 * @function handleKeyDown
 * @param {KeyboardEvent} event - El evento de tecla presionada
 * @returns {void}
 */
export function handleKeyDown(event) {
  switch (event.code) {
    case 'KeyW':
      keys.w.pressed = true;
      break;
    case 'KeyA':
      keys.a.pressed = true;
      break;
    case 'KeyD':
      keys.d.pressed = true;
      break;
    
  }
}

/**
 * Maneja el evento de tecla soltada.
 * @function handleKeyUp  
 * @param {KeyboardEvent} event - El evento de tecla soltada.
 * @returns {void}
 */
export function handleKeyUp(event) {
  switch (event.code) {
    case 'KeyW':
      keys.w.pressed = false;
      break;
    case 'KeyA':
      keys.a.pressed = false;
      break;
    case 'KeyD':
      keys.d.pressed = false;
      break;
  }
}


/**
 * Maneja el evento de movimiento del ratón.
 * @function handleMouseMove
 * @param {MouseEvent} event - El objeto de evento del ratón.
 * @returns {void}
 */
export function handleMouseMove(event) {
  const dx = event.clientX - player.position.x;
  const dy = event.clientY - player.position.y;

  player.rotation = Math.atan2(dy, dx);
}

/**
 * Maneja el evento de clic del ratón.
 * @function handleClick  
 * @returns {void}
 */
export function handleClick() {
  reproducirDisparo();
  projectiles.push(
    new Projectile({
      position: {
        x: player.position.x + Math.cos(player.rotation) * 30,
        y: player.position.y + Math.sin(player.rotation) * 30,
      },
      velocity: {
        x: Math.cos(player.rotation) * PROJECTILE_SPEED,
        y: Math.sin(player.rotation) * PROJECTILE_SPEED,
      },
    })
  );
}
