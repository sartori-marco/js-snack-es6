// jsnack 2
// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter
// Esempio:
// const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'


// creo l'array iniziale

const arrayIniziale = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];

// faccio inserire all'utente due numeri

let numero1 = parseInt(prompt('Inserisci un numero tra 0 e 5'));
let numero2 = parseInt(prompt('Inserisci un numero tra 0 e 5'));

if (numero1 < numero2) {
  const numero = numero2;
  numero2 = numero1;
  numero1 = numero;
}

// uso filter
const filterArray = arrayIniziale.filter((element,index) => index >= numero1 && index <=numero2);

console.log(`Intervallo: ${numero1}, ${numero2} ${filterArray}`);





//
