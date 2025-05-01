import { pedirCarta } from "./";

/**
 * Turno de la computadora
 * @param {number} puntosMinimos puntos a superar
 * @param {HTMLElement} puntosHTML elementos HTML donde se muestran los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML donde se muestran las cartas de la computadora
 * @param {string[]} deck baraja de cartas
 * @returns {void}  
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;
        divCartasComputadora.append(createCard(carta));

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}