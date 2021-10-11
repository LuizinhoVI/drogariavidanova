function suplementos() {
    var abrir = document.getElementById('massa').style;
    var abrir1 = document.getElementById('suplemento').style;
    var tema = document.getElementById('nometema');
    if (abrir.display == "none") {
        abrir.display = "block";
        abrir1.display = "block";
        tema.style.display = "block";

    } else {
        abrir.display = "none";
        abrir1.display = "none";
        tema.style.display = "none";
    }

}


function maquiagem() {
    var abrir = document.getElementById('maquiagem').style;
    if (abrir.display == "none") {
        abrir.display = "block";
    } else { abrir.display = "none"; }

}

function rosto() {
    var abrir = document.getElementById('rosto').style;
    if (abrir.display == "none") {
        abrir.display = "block";
    } else { abrir.display = "none"; }

}

function volt() {
    var abrir = document.getElementById('volt').style;
    if (abrir.display == "none") {
        abrir.display = "block";
    } else { abrir.display = "none"; }

}

function cosmeticos() {
    var abrir = document.getElementById('cosmeticos').style;
    if (abrir.display == "none") {
        abrir.display = "block";
    } else { abrir.display = "none"; }

}

function medicamentos() {
    var abrir = document.getElementById('medicamentos').style;
    if (abrir.display == "none") {
        abrir.display = "block";
    } else { abrir.display = "none"; }

}

function olho() {
    var abrir = document.getElementById('olho').style;
    if (abrir.display == "none") {
        abrir.display = "block";
    } else { abrir.display = "none"; }

}

function labio() {
    var abrir = document.getElementById('labio').style;
    if (abrir.display == "none") {
        abrir.display = "block";
    } else { abrir.display = "none"; }

}




function procurar() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}