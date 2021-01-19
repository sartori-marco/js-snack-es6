// 3)
// Utilizzando const e/o let. Dare la possibilità di inserire due parole.
//  Verificare se le due parole hanno la stessa lunghezza.
//  Se hanno la stessa lunghezza,
//  stamparle entrambe altrimenti stampare la più lunga delle due.


// faccio una funzione per vedere la parola più lunga
// uso const
const lunghezzaParola = (x,y) => {
  if (x.length > y.length)  {
    console.log('La parola più lunga è la prima che è: ' + x);
  }
  else if (x.length < y.length) {
    console.log('La parola più lunga è la seconda che è: ' + y);
  }
  else {
    console.log('Le due parole hanno lunghezza uguale che sono: ' + x + ', ' + y);
  }
};


// uso const per le due parole
const parola1 = prompt('Inserisci la prima parola');
const parola2 = prompt('Inserisci la seconda parola');

// richiamo la funzione

lunghezzaParola (parola1,parola2);
//
