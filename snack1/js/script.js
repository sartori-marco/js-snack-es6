// 1)
// Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// l'utente inserisce il numero
// uso let perchè il numero può cambiare

// prima la dichiaro
let numeroUtente = parseInt(prompt('Inserisci un numero'));

// se è pari stampa il numero
if (numeroUtente % 2 == 0) {
  console.log(numeroUtente);
}
// se è dispari stampa il numero successivo
else {
  ++numeroUtente;
  console.log(numeroUtente);
}
