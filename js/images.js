
/**
 * @fileoverview Este archivo contiene la definición de las imágenes utilizadas en el juego Asteroids.
 * @module images
 */

//& Imagenes

export let balaImage = new Image();
balaImage.src = "./img/bala2.png";

export let corazon = new Image();
corazon.src = "./img/heart.png";

export let corazonMenos = new Image();
corazonMenos.src = "./img/heartBN.png";

export let asteroidImage = new Image()
asteroidImage.src = './img/asteroid.png'

export let playerImage = new Image()
playerImage.src = './img/nave.png'

export let naveEscudo = new Image()
naveEscudo.src = './img/nave_escudo.png'

export let naveEscudo02 = new Image()
naveEscudo02.src = './img/nave02_escudo.png'

export const enemyImages = [
    './img/Enemigo01/Ship6_01.png',
    './img/Enemigo01/Ship6_02.png',
    './img/Enemigo01/Ship6_03.png',
    './img/Enemigo01/Ship6_04.png',
];

export const enemyImages02 = [
    './img/Enemigo02/Ship4_01.png',
    './img/Enemigo02/Ship4_02.png',
    './img/Enemigo02/Ship4_03.png',
    './img/Enemigo02/Ship4_04.png',
];

export const enemyImages03 = [
    './img/Enemigo03/Ship5_01.png',
    './img/Enemigo03/Ship5_02.png',
    './img/Enemigo03/Ship5_03.png',
    './img/Enemigo03/Ship5_04.png',
];

export const explosionImages = [
    './img/Explosion/Explosion1_1.png',
    './img/Explosion/Explosion1_2.png',
    './img/Explosion/Explosion1_3.png',
    './img/Explosion/Explosion1_4.png',
    './img/Explosion/Explosion1_5.png',
    './img/Explosion/Explosion1_6.png',
    './img/Explosion/Explosion1_7.png',
    './img/Explosion/Explosion1_8.png',
    './img/Explosion/Explosion1_9.png',
    './img/Explosion/Explosion1_10.png',
    './img/Explosion/Explosion1_11.png',
];

export let bonusTeleportImage = new Image()
bonusTeleportImage.src = './img/Bonus/Bonus_teleport.png'
export let bonusVelocidadImage = new Image()
bonusVelocidadImage.src = './img/Bonus/Bonus_velocidad.png'
export let bonusVidaImage = new Image()
bonusVidaImage.src = './img/Bonus/Bonus_vida.png'
export let bonus2xImage = new Image()
bonus2xImage.src = './img/Bonus/Bonus2x.png'
export let bonusBombaImage = new Image()
bonusBombaImage.src = './img/Bonus/Bonus_bomba.png'
export let bonusEscudoImage = new Image()
bonusEscudoImage.src = './img/Bonus/Bonus_escudo.png'

export const enemyImageArray = enemyImages.map(imagePath => {
    const img = new Image();
    img.src = imagePath;
    return img;
});

export const enemyImage02Array = enemyImages02.map(imagePath => {
    const img = new Image();
    img.src = imagePath;
    return img;
});

export const enemyImage03Array = enemyImages03.map(imagePath => {
    const img = new Image();
    img.src = imagePath;
    return img;
});