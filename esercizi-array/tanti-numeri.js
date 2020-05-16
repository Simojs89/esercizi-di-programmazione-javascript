/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/
var a =[1,5,10,32,18];

  var sum=0
var media=0



for (var i = 0; i < a.length; i++) {
sum= sum+a[i]
media=sum/a.length

}
console.log(media);



if (a[0]<media) {
  console.log(a[0]);

}
if (a[1]<media) {
  console.log(a[1]);

}
if (a[2]<media) {
  console.log(a[2]);

}
if (a[3]<media) {
  console.log(a[3]);

}if (a[4]<media) {
  console.log(a[4]);

}
