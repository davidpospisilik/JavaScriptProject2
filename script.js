let cenaCelkem;

function Spocitej() {
    let cenaZaTyp = document.querySelector("#typKrmiva").value;
    let pocetKilogramu = document.querySelector("#KG").value;
    let cenaMnozstviTyp = Number(cenaZaTyp) * Number(pocetKilogramu);
    document.querySelector("#firstPrice").value = cenaMnozstviTyp;
    
    let vlastnosti = document.getElementsByName("vlastnosti");
    let cenaZaKvalitu = 0;
    for (let a = 0; a < vlastnosti.length; a++) {
        if (vlastnosti[a].checked) {
            let vlastnost = vlastnosti[a].value;

            switch (vlastnost) {
                case "bio":
                    cenaZaKvalitu += (cenaMnozstviTyp * 0.3);
                break;
                case "premium":
                    cenaZaKvalitu += (cenaMnozstviTyp * 0.3);
                break;
                case "chudi":
                    cenaZaKvalitu += (cenaMnozstviTyp * -0.15);
                break;
                case "darek":
                    cenaZaKvalitu += 500;
                break;
                default:
                    cenaZaKvalitu = Number(0);
            }
        }
    }
    cenaCelkem = cenaMnozstviTyp + cenaZaKvalitu;

    let doprava = document.getElementsByName("doprava")
    let cenaZaDopravu = 0;
    for (let i = 0; i < doprava.length; i++) {
        if(doprava[i].checked){
            let typDopravy = doprava[i].value;

            switch (typDopravy){
                case "kuryr":
                    cenaZaDopravu = cenaCelkem * 0.1;
                break;
                case "posta":
                    cenaZaDopravu = 250;
                 break;
                default:
                    cenaZaDopravu = 0.0;
            }
        }
    }
    cenaCelkem += cenaZaDopravu;
    document.querySelector('.suma').innerHTML=`${Math.round(cenaCelkem)} Kč`

    maxCena = parseInt(document.getElementById("maxCena").value);
    if (cenaCelkem === 0) {
        document.querySelector('.vyslednaZprava').innerHTML='Neni nic vybrano!';
    }
    else if (maxCena >= cenaCelkem){
        document.querySelector('.vyslednaZprava').innerHTML='Zadana castka bude stacit na koupi krmiva!';
    } else {
        document.querySelector('.vyslednaZprava').innerHTML='Zadana castka nestaci na koupi krmiva!';
    }
}
function overit() {
    var regex = /^[A-Za-z0-9 ]+$/

    var isValid = regex.test(document.getElementById("emailID").value);
    if (!isValid) {
        document.querySelector('.msg').innerHTML='Špatný formát emailu, neodeslano!!'
    } else {
        document.querySelector('.msg').innerHTML='Odeslano!'
    }

}
