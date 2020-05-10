/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/
function dolce() {
var scelta;


scelta = document.getElementById(1).value;



if (scelta=="1") {
    document.getElementById(2).innerHTML=("hai scelto il tiramisù");

} if (scelta=="2") {
  document.getElementById(2).innerHTML=("hai scelto la torta della nonna");

}if (scelta=="3") {
  document.getElementById(2).innerHTML=("hai scelto cheesecake alla nutella");

}if (scelta=="4") {
  document.getElementById(2).innerHTML=("hai scelto la macedonia");
}
if (scelta >= "5") {
  document.getElementById(2).innerHTML=("dolce non disponibile");
}



}
