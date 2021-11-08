 function suplementos() {
     var abrir = document.getElementById('massa').style;
     var abrir1 = document.getElementById('suplemento').style;
     var paginas = document.getElementById('paginas').style;
     var temas = document.getElementById('temas');
     var fechar = document.getElementById('temas');

     if (abrir.display == "none") {
         abrir.display = "block";
         abrir1.display = "block";
         paginas.display = "block"
         temas.style.display = "block";
         temas.innerHTML = "Suplementos";

     } else {
         abrir.display = "none";
         abrir1.display = "none";
         paginas.display = "none";
         temas.style.display = "none";

     }

 }

 function voxx() {
     var abrir = document.getElementById('voxx').style;
     if (abrir.display == "none") {
         abrir.display = "block";
     } else { abrir.display = "none"; }
 }


 function maquiagem() {
     var abrir = document.getElementById('cosmetico').style;
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
     var open = document.getElementById('suplemento').style;
     var abrir = document.getElementById('cosmeticos').style;
     var abrir1 = document.getElementById('cosmetico').style;
     var paginas = document.getElementById('paginas').style;

     var temas = document.getElementById('temas');

     if (abrir.display == "none") {
         abrir.display = "block";
         abrir1.display = "block";
         paginas.display = "block";
         temas.style.display = "block";
         temas.innerHTML = "Cosmeticos";

     } else {
         abrir.display = "none";
         abrir1.display = "none";
         paginas.display = "none";
         temas.style.display = "none";
     }

 }

 function cabelo() {
     var abrir = document.getElementById('cabelo').style;
     if (abrir.display == "none") {
         abrir.display = "block";
     } else { abrir.display = "none"; }

 }

 function maquiagem() {
     var abrir = document.getElementById('pro-maquiagem').style;
     if (abrir.display == "none") {
         abrir.display = "block";
     } else { abrir.display = "none"; }

 }

 function medicamentos() {
     var abrir = document.getElementById('medicamentos').style;
     var remedio = document.getElementById('remedio').style;
     var temas = document.getElementById('temas');


     if (abrir.display == "none") {
         abrir.display = "block";
         remedio.display = "block";
         temas.innerHTML = "REMEDIOS";
         temas.style.display = "block";

     } else {
         abrir.display = "none";
         temas.style.display = "none";
         remedio.display = "none";
     }

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

 function areainfantil() {
     var abrir = document.getElementById('infantil').style;
     var abrir1 = document.getElementById('areainfantil').style;


     if (abrir.display == "none") {
         abrir.display = "block"
         abrir1.display = "block"
     } else {
         abrir.display = "none"
         abrir1.display = "none"
     }
 }




 contador = 0;

 function tema1() {

     var temas = document.getElementById('temas').style;

     if (contador == 0) {

         temas.color = "white"
         temas.background = "#3c7c52"
         temas.border = "solid 5px white"
         temas.boxShadow = "0px 0px 10px 0px blue"
         contador++;
     } else {

         temas.color = "black"
         temas.background = "white"
         temas.border = "solid 5px #3c7c52"
         temas.boxShadow = "0px 0px 0px 0px black"
         contador--;
     }


 }

 function tema2() {

     var subtema = document.getElementById('subtema').style;
     if (contador == 0) {

         subtema.color = "white"
         subtema.background = "#3c7c52"
         subtema.border = "solid 5px white"
         subtema.boxShadow = "0px 0px 10px 0px blue"
         contador++;
     } else {

         subtema.color = "black"
         subtema.background = "white"
         subtema.border = "solid 5px #3c7c52"
         subtema.boxShadow = "0px 0px 0px 0px black"
         contador--;
     }


 }