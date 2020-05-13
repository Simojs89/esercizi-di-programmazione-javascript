/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
function number() {

var cifre;
cifre = document.getElementById("numero").value;
var lunghezza = cifre.length;

if (lunghezza==1) {
  document.getElementById('newnumber').innerHTML= lunghezza+(` cifra`);
  }
  if (lunghezza==2) {
    document.getElementById('newnumber').innerHTML= lunghezza+(` cifre`);
}
if (lunghezza==3) {
  document.getElementById('newnumber').innerHTML= lunghezza+(` cifre`);
}
if (lunghezza>3) {
  document.getElementById('newnumber').innerHTML= (`undefined`);
}

}
