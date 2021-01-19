// 2)
// Utilizzando const e/o let e template literal. Creare due tag div con due id diversi.
// Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri,
// stampiamo nell’id rosso i numeri dispari
// e in verde i numeri pari.

// creo l'array di numeri
// uso const perchè i numeri (quindi l'array) sono fissi
const numeri = [1,2,3,4,5,6,7,8];


// potrei usare template literal così unisco tutto per vederlo nell'html
document.getElementById('prova').innerHTML =
`
  <!-- scrivo 2 div dove andranno inseriti i numeri -->
  <div id = 'numeroPari' class = 'green'>

  </div>

  <div id = 'numeroDispari' class = 'red'>

  </div>

`;


// faccio un ciclo per controllare i numeri.
// uso let perchè la i non è fissa

for (let i = 0; i < numeri.length; i++) {
  // se pari verde
  if (numeri[i] % 2 == 0) {
    document.getElementById('numeroPari').innerHTML += numeri[i];
  }
  // se dispari rosso
  else {
    document.getElementById('numeroDispari').innerHTML += numeri[i];
  }
}


//
