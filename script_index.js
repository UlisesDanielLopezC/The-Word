const selectTheme = document.querySelector('.selectTheme');
const selectLang = document.querySelector('.selectLanguage');
const gm_classic = document.querySelector('#gclassic');
const gm_versus = document.querySelector('#gversus');
const gm_coop = document.querySelector('#gcoop');

//Recuperación de lenguaje
var lenguaje = localStorage.getItem('lang')
if(lenguaje !== null){
    console.log(lenguaje)
    selectLang.value = lenguaje;
}else{
    console.log('ES NULO')
    localStorage.setItem('lang', 'engV')
}

//Recuperación de cantidad de monedas
var monedas = localStorage.getItem('coins')
if(monedas !== null){
    console.log(monedas)
    document.getElementById("coins").textContent = 'x' + monedas
}else{
    console.log('ES NULO')
    localStorage.setItem('coins', 0)
}

//Recuperación de tema seleccionado
var tema = localStorage.getItem('tema')
if(tema !== null){
    console.log(tema)
    selectTheme.value = tema;
    document.body.style.backgroundImage="url('/themes/" + tema + "/" + tema + ".gif')";
}else{
    console.log('ES NULO')
    localStorage.setItem('tema', 'Forest-Gray')
}

function to_enter(){
    document.getElementById("PXenter").src="/images/Button_Enter_Active.gif";
}

function deact_classic(){
    document.getElementById("gclassic").src="/images/Button_Classic_Static.png";
}
function deact_versus(){
    document.getElementById("gversus").src="/images/Button_Versus_Static.png";
}
function deact_coop(){
    document.getElementById("gcoop").src="/images/Button_Coop_Static.png";
}

function to_classic(){
    document.getElementById("gclassic").src="/images/Button_Classic_Active.gif";
    to_enter();
    deact_versus();
    deact_coop();
    document.getElementById("enterClick").href="/g_classic.html";
    console.log('classic');
};
function to_versus(){
    document.getElementById("gversus").src="/images/Button_Versus_Active.gif";
    to_enter();
    deact_classic();
    deact_coop();
    document.getElementById("enterClick").href="/";
    console.log('versus');
};
function to_coop(){
    document.getElementById("gcoop").src="/images/Button_Coop_Active.gif";
    to_enter();
    deact_classic();
    deact_versus();
    document.getElementById("enterClick").href="/";
    console.log('cooperative');
};

gm_classic.addEventListener("click", to_classic);
gm_versus.addEventListener("click", to_versus);
gm_coop.addEventListener("click", to_coop)

selectTheme.addEventListener('change', (event) => {
    document.body.style.backgroundImage="url('/themes/" + event.target.value + "/" + event.target.value + ".gif')";
    console.log(event.target.value)
    localStorage.setItem('tema', event.target.value)
});

selectLang.addEventListener('change', (event) => {
    console.log(event.target.value)
    localStorage.setItem('lang', event.target.value)
});