const selectTheme = document.querySelector('.selectTheme');

selectTheme.addEventListener('change', (event) => {
    //console.log(event.target.value);
    if (event.target.value == "theme-A"){
        document.getElementById("PXtitle").src="/themes/A/Title_Bluesteel.png";
        document.getElementById("PXconfig").src="/themes/A/Config_Bluesteel.png";
        document.getElementById("PXstore").src="/themes/A/Store_Bluesteel.png";
        document.getElementById("PXcoins").src="/themes/A/Coin_Bluesteel.png";
        document.body.style.backgroundImage="url('/themes/A/Bluesteel_BG_Anim.gif')";

    } else if (event.target.value == "theme-B"){
        document.getElementById("PXtitle").src="/themes/B/Title_Salomon.png";
        document.getElementById("PXconfig").src="/themes/B/Config_Salomon.png";
        document.getElementById("PXstore").src="/themes/B/Store_Salomon.png";
        document.getElementById("PXcoins").src="/themes/B/Coin_Salomon.png";
        document.body.style.backgroundImage="url('/themes/B/Salomon_BG_Anim.gif')";
    }
    
});