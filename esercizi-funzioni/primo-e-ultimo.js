/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/
function minimo(array) {//come parametro della funzione, inseriremo un array
  //il return che avremo sarà il valore minimo o nel caso di sotto quello massimo, utilizzando il metodo apply nel caso di un numero.
  return Math.min.apply(null, array);
}
 
function massimo(array) {
  return Math.max.apply(null, array);
}
 
console.log(`il numero minimo è :`+(minimo([prompt(),prompt(),prompt()]))); 

console.log(`il numero massimo è: `+(massimo([prompt(),prompt(),prompt()])));