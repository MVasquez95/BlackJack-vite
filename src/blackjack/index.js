import 'bootstrap/dist/css/bootstrap.min.css';
import { crearDeck, pedirCarta, valorCarta, createCard, turnoComputadora } from './usecases/index.js';

document.body.style.backgroundColor = "#2F4F30";
document.querySelectorAll("h1").forEach(h1 => {
  h1.style.color = "white";
});

let deck = [],
  puntosJugador = 0,
  puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
  btnDetener = document.querySelector('#btnDetener'),
  btnNuevo = document.querySelector('#btnNuevo'),
  divCartasJugador = document.querySelector('#jugador-cartas'),
  divCartasComputadora = document.querySelector('#computadora-cartas'),
  puntosHTML = document.querySelectorAll('small');

deck = crearDeck();

// Eventos
btnPedir.addEventListener('click', () => {

  const carta = pedirCarta(deck);
  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;
  divCartasJugador.append(createCard(carta));

  if (puntosJugador > 21) {
    console.warn('Lo siento mucho, perdiste');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);

  } else if (puntosJugador === 21) {
    console.warn('21, genial!');
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
  }
});

btnDetener.addEventListener('click', () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {

  console.clear();
  deck = [];
  deck = crearDeck();

  puntosJugador = 0;
  puntosComputadora = 0;

  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;

  divCartasComputadora.innerHTML = '';
  divCartasJugador.innerHTML = '';

  btnPedir.disabled = false;
  btnDetener.disabled = false;
});