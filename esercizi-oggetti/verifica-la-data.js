/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data e verifichi se è valida o meno.
  L'oggetto sarà composto da giorno, mese e anno (input a piacere).

  Esempio:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/
function date(day,month,year){
  this.day = "",
  this.month="",
  this.year="",
  this.description= ()=> {
      if (this.day>31) {
          console.log("data non valida")
          
          
      }else if (this.month>12) {
          console.log("data non valida")

          
      }else if (this.year>2050) {
          console.log("data non valida")

          
      }
      else{
      console.log(`${this.day} ${this.month} ${this.year}`)}
  
  
      }}


let data=new date
data.day=prompt("insert a day")
data.month=prompt("insert a month")
data.year=prompt("insert a year")


data.description();
