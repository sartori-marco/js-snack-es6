// jsnack 1
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

// creo l'array di oggetti

const bici = [
  {
    nome: 'bici1',
    peso: 1
  },

  {
    nome: 'bici2',
    peso: 20
  },

  {
    nome: 'bici3',
    peso: 15
  }
];

// uso destructuring per determinare quale pesa meno

const [primaBici,secondaBici,terzaBici] = bici;

//uso let perchè la bici da pesare cambierà
let biciDaPesare = primaBici.peso;

if (secondaBici.peso < biciDaPesare) {
  biciDaPesare = secondaBici;
}

else if (terzaBici.peso < biciDaPesare) {
  biciDaPesare = terzaBici;
}


//stampo la bici che pesa meno
console.log(`La bici che pesa meno è: ${biciDaPesare.nome}`);




//
