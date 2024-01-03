//& Canvas

/**
 * Selecciona el elemento canvas del DOM.
 * @type {HTMLCanvasElement}
 */
export const canvas = document.querySelector('canvas')
export const c = canvas.getContext('2d')
export let body = document.getElementById("body")

canvas.width = window.innerWidth
canvas.height = window.innerHeight