const selectTheme = document.querySelector('.selectTheme');
const gm_classic = document.querySelector('#gclassic');
const gm_versus = document.querySelector('#gversus');
const gm_coop = document.querySelector('#gcoop');

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
    //console.log(event.target.value);
    if (event.target.value == "theme-A"){
        //document.getElementById("PXtitle").src="/themes/A/Title_Bluesteel.png";
        //document.getElementById("PXconfig").src="/themes/A/Config_Bluesteel.png";
        //document.getElementById("PXstore").src="/themes/A/Store_Bluesteel.png";
        //document.getElementById("PXcoins").src="/themes/A/Coin_Bluesteel.png";
        document.body.style.backgroundImage="url('/themes/A/Bluesteel_BG_Anim.gif')";

    } else if (event.target.value == "theme-B"){
        //document.getElementById("PXtitle").src="/themes/B/Title_Salomon.png";
        //document.getElementById("PXconfig").src="/themes/B/Config_Salomon.png";
        //document.getElementById("PXstore").src="/themes/B/Store_Salomon.png";
        //document.getElementById("PXcoins").src="/themes/B/Coin_Salomon.png";
        document.body.style.backgroundImage="url('/themes/B/Salomon_BG_Anim.gif')";
    }
    
});