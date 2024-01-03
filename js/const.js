
/**
 * @fileoverview Este archivo contiene las constantes y variables globales utilizadas en el juego Asteroids.
 * @module const
 */
import { Player } from './player.js'
import {canvas } from './canvas.js'

export let puntuacion = 0;


export const SPEED = 3
export const ROTATIONAL_SPEED = 0.05
export const FRICTION = 0.97
export const PROJECTILE_SPEED = 10
export const TAM_ASTEROID_HEIGHT = 0
export const TAM_ASTEROID_WIDTH = 0
export const VELOCITY = 1;
export const SECONDS_MOVEMENT = 60;
export const ANGLE_REBOUND=100;


export const projectiles = []
export let enemies = []
export let enemies02 = []
export let enemies03 = []
export let escudos = []
export let teletransportes = []
export let dobles = []
export let explosiones = []
export let asteroids = []

export const player = new Player({
    position: { x: canvas.width / 2, y: canvas.height / 2 },
    velocity: { x: 0, y: 0 },
})

export const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}
