// jsnack 1
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

// creo l'array di oggetti

const bici = [
  {
    nome: 'bici1',
    peso: 50
  },

  {
    nome: 'bici2',
    peso: 20
  },

  {
    nome: 'bici3',
    peso: 52
  }
];



// for (let i = 0; i < bici.length; i++) {
//   const {peso} = bici[i];
//
//   if (peso < biciLeggera) {
//     biciLeggera = peso;
//   }
// }

// document.getElementById('prova').innerHTML += `
//   <strong> ${biciLeggera} </strong>
// `;


//
// bici.forEach((element) => {
//   const {peso} = element;
//   if (peso < biciLeggera) {
//     biciLeggera = peso;
//   }
//
//
// });
// console.log(biciLeggera);

let biciLeggera = bici[0];

const filtrata = bici.filter((element) => element.peso < biciLeggera.peso
);

console.log(filtrata[0].peso);







//
