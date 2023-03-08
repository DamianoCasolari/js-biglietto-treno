// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const age = Number(prompt('inserisci la tua età'));
console.log(age);

const km = Number(prompt('inserisci i kilometri che vuoi percorrere'));
console.log(km);

const km_price = km * 0.21;
console.log(km_price);

let discounted_price;
if (age < 18) {
    discounted_price = km_price / 100 * 80 ;
} else if (age > 65 ){
    discounted_price = km_price / 100 * 60 ;
} else {
    discounted_price = km_price;
}

let discounted_price_with_decimal = discounted_price.toFixed(2);

console.log(`il costo del biglietto ammonta a ${discounted_price_with_decimal} euro`);

document.getElementById("ticket_price").innerHTML = `Il costo del biglietto ammonta a ${discounted_price_with_decimal} euro`;




