/**
 * Esta función pide una carta a la baraja y la elimina de este
 * @param {string[]} deck Bajara de cartas
 * @returns {string} Retorna la carta pedida
 */
export const pedirCarta = (deck) => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}