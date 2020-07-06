/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  http://www.imparareaprogrammare.it
*/
function conta(){
  for (let i = prompt("inserisci il numero da cui partire"); i >= 0; i=i-1) {
     console.log(i);
       }
     
      }
conta()