const bars = document.querySelector('#bars');
const ul = document.querySelector('#listaNav');
const button = document.querySelector('#button');
const listaNav = document.querySelector('#listaNav');
var contador = 0

button.onclick = function () {

    if(contador == 1) {
        listaNav.style.display = "none";
    bars.style.width=  "13px";
    bars.style.height=  "13px";
   
    contador = 0;
    }else {
        bars.style.width=  "16px";
        bars.style.height=  "16px";
        listaNav.style.display = "flex";
        bars.style.color = 'black';
        contador = 1;
    }
   
}
