
let contadorGeral = 10;

let numeroGeral = document.getElementById("numero-geral");

let barraGeral = document.getElementById("barra-geral");
let barraForça = document.getElementById("barra-força");
let barraDestreza = document.getElementById("barra-destreza");
let barraIntelecto = document.getElementById("barra-intelecto");

let menosForça = document.getElementById("menos-força");
let menosDestreza = document.getElementById("menos-destreza");
let menosIntelecto = document.getElementById("menos-intelecto");

let maisForça = document.getElementById("mais-força");
let maisDestreza = document.getElementById("mais-destreza");
let maisIntelecto = document.getElementById("mais-intelecto");


let força = 0;
let destreza = 0;
let intelecto = 0;

function atualizar() {

    numeroGeral.innerText = contadorGeral + "/10";

    barraGeral.style.width = (contadorGeral * 10) + "%";

    barraForça.style.width = (força * 10) + "%";
    barraDestreza.style.width = (destreza * 10) + "%";
    barraIntelecto.style.width = (intelecto * 10) + "%";

    document.querySelector("#pontos-força p").innerText = força + "/10";
    document.querySelector("#pontos-destreza p").innerText = destreza + "/10";
    document.querySelector("#pontos-intelecto p").innerText = intelecto + "/10";

    maisForça.disabled = contadorGeral == 0 || força == 10;
    maisDestreza.disabled = contadorGeral == 0 || destreza == 10;
    maisIntelecto.disabled = contadorGeral == 0 || intelecto == 10;

    menosForça.disabled = força == 0;
    menosDestreza.disabled = destreza == 0;
    menosIntelecto.disabled = intelecto == 0;
    
    if (contadorGeral === 0){
    document.body.style.backgroundColor = "#5f5f54"
}
else {
        document.body.style.backgroundColor = "antiquewhite"
}

let botaoFinal = document.getElementById("botao-final")

if(contadorGeral === 0){
    botaoFinal.style.display = "block";
}
else {
    botaoFinal.style.display = "none";
}
}

maisForça.addEventListener("click", function() {
    força++;
    contadorGeral--;
    atualizar();
});

menosForça.addEventListener("click", function() {
    força--;
    contadorGeral++;
    atualizar();
});

maisDestreza.addEventListener("click", function() {
    destreza++;
    contadorGeral--;
    atualizar();
});

menosDestreza.addEventListener("click", function() {
    destreza--;
    contadorGeral++;
    atualizar();
});

maisIntelecto.addEventListener("click", function() {
    intelecto++;
    contadorGeral--;
    atualizar();
});

menosIntelecto.addEventListener("click", function() {
    intelecto--;
    contadorGeral++;
    atualizar();
});

atualizar();

