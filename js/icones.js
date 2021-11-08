function pesqui_open() {

    var mostrar = document.getElementById("entrada");
    var x = document.getElementById("x");

    mostrar.style.display = "block";
    x.style.display = "block";

}

function pesqui_close() {

    var mostrar = document.getElementById("entrada");
    var x = document.getElementById("x");

    mostrar.style.display = "none";
    x.style.display = "none";

}
// parte do suplementos

function open_suplem() {

    var mostrar = document.getElementById("suplemento");
    var ocultar1 = document.getElementById("remedio");
    var ocultar2 = document.getElementById("cosmetico");
    var ocultar3 = document.getElementById("areainfantil");


    mostrar.style.display = "block";
    ocultar1.style.display = "none";
    ocultar2.style.display = "none";
    ocultar3.style.display = "none";

}

function open_remedio() {

    var mostrar = document.getElementById("remedio");
    var ocultar1 = document.getElementById("suplemento");
    var ocultar2 = document.getElementById("cosmetico");
    var ocultar3 = document.getElementById("areainfantil");


    mostrar.style.display = "block";
    ocultar1.style.display = "none";
    ocultar2.style.display = "none";
    ocultar3.style.display = "none";

}

function open_cosmetico() {

    var mostrar = document.getElementById("cosmetico");
    var ocultar1 = document.getElementById("remedio");
    var ocultar2 = document.getElementById("suplemento");
    var ocultar3 = document.getElementById("areainfantil");


    mostrar.style.display = "block";
    ocultar1.style.display = "none";
    ocultar2.style.display = "none";
    ocultar3.style.display = "none";

}

function open_infantil() {

    var mostrar = document.getElementById("areainfantil");
    var ocultar1 = document.getElementById("remedio");
    var ocultar2 = document.getElementById("cosmetico");
    var ocultar3 = document.getElementById("suplemento");


    mostrar.style.display = "block";
    ocultar1.style.display = "none";
    ocultar2.style.display = "none";
    ocultar3.style.display = "none";

}