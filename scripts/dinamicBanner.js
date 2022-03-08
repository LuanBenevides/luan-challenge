let tempo = 2000;
let indexBanner = 0;
let itensBanner = document.querySelectorAll(".banner div");
let maximo = itensBanner.length;

function banerOn(){
    itensBanner[indexBanner].classList.remove("selecionado");

    indexBanner++;

    if(indexBanner >= maximo){
        indexBanner = 0;
    }
    itensBanner[indexBanner].classList.add("selecionado");
}
function inicializarBanner(){
    setInterval(() => {
        banerOn()
    }, tempo);
}

window.addEventListener("load", inicializarBanner());