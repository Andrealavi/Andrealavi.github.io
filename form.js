const form = document.getElementById("frm");
form.addEventListener("submit", funzione)

function funzione() {

    let nome = document.getElementById("Nome");
    let eta = document.getElementById("Eta");
    let citta = document.getElementById("Citta");
    
    let stringa = `Ciao ${nome.value}! Hai ${eta.value} anni e abiti ${citta.value}`;

    event.preventDefault();
    
    document.getElementById("demo").innerHTML = stringa;

}
