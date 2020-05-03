/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var lun = 10;
var mar = -2;
var mer = 31;
var gio = 22;
var ven = 15;
var sab = -6;
var dom = 7;



console.log(`la giornata più calda registra ${Math.max(lun,mar,mer,gio,ven,sab,dom)}`);
console.log(`la giornata piu fredda registra ${Math.min(lun,mar,mer,gio,ven,sab,dom)}`);
