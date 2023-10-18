//Raccolta dei dati
const kmUser = parseInt(prompt("Ciao! Quanti km desideri percorrere?"));
const ageUser = parseInt(prompt("Ci servirebbe sapere la sua età in modo da calcolare l'eventuale sconto, qual è?"));
console.log(kmUser, ageUser);
const priceForKm = 0.21;

//Calcolo dei dati
let priceUser = (kmUser * priceForKm);
console.log(priceUser);
let priceFinal;
let message;
if(ageUser > 65) 
{
    console.log("Over 65");
    priceFinal = priceUser - ((priceUser / 100) * 40);
    priceFinal = priceFinal.toFixed(2)
    console.log(priceFinal);
    message = `Lei è over 65 e in base allo sconto previsto il prezzo finale del biglietto è ${priceFinal} €`;
} 
else if (ageUser > 17 && ageUser < 66) 
{
    console.log("Mi dispiace ma non ha diritto ad alcuno sconto");
    priceFinal = priceUser;
    priceFinal = priceFinal.toFixed(2)
    console.log(priceFinal);
    message = `Lei non risulta essere in nessuna fascia di età prevista per un eventuale sconto sul prezzo, perciò il prezzo finale del biglietto è ${priceFinal} €`;
} 
else if (ageUser >= 0 && ageUser <18)
{
    console.log("Minorenne");
    priceFinal = priceUser - ((priceUser / 100) * 20);
    priceFinal = priceFinal.toFixed(2)
    console.log(priceFinal);
    message = `Lei è minorenne e in base allo sconto previsto il prezzo finale del biglietto è ${priceFinal} €`;
}
else
{
    message = `E\' stato inserito un valore non corretto.`;
}

//Invio del risultato
document.getElementById("result").innerHTML = message;