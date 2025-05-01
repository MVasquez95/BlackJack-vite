/**
 * Esta función crear un elemento img con la carta
 * @param {string} carta carta a mostrar
 * @returns {HTMLImageElement} elemento img con la carta
 */
export const createCard = (carta) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}