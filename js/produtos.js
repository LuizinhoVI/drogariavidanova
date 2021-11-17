 function suplementos() {
     var abrir = document.getElementById('massa').style;
     var abrir1 = document.getElementById('suplemento').style;
     var paginas = document.getElementById('paginas').style;
     var temas = document.getElementById('temas');
     var fechar = document.getElementById('suplementos');

     if (abrir.display == "none") {
         abrir.display = "block";
         abrir1.display = "block";
         paginas.display = "block"
         temas.style.display = "block";
         temas.innerHTML = "Suplementos";
         fechar.style.display = "block"

     } else {
         abrir.display = "none";
         abrir1.display = "none";
         paginas.display = "none";
         temas.style.display = "none";
         fechar.style.display = "none";

     }

 }


 function cosmeticos() {
     var abrir = document.getElementById('cosmetico').style;

     if (abrir.display == "none") {
         abrir.display = "block";

     } else {

         abrir.display = "none";

     }

 }

 function cabelo() {
     alert()
     var abrir = document.getElementByClassName('cabelo-haskel').style;
     var abrir1 = document.getElementByClassName('cabelo-bioex').style;
     var abrir2 = document.getElementByClassName('maquiagem').style;

     abrir.display = "block";
     abrir1.display = "block";


     abrir2.display = "none";


 }

 function maquiagem() {
     var abrir = document.getElementById('pro-maquiagem').style;
     if (abrir.display == "none") {
         abrir.display = "block";
     } else { abrir.display = "none"; }

 }

 function medicamentos() {
     // var abrir = document.getElementById('medicamentos').style;
     var remedio = document.getElementById('remedio').style;
     //var temas = document.getElementById('temas');
     var fechar = document.getElementsByClassName('fechar');


     if (remedio.display == "none") {

         remedio.display = "block";


     } else {
         fechar.display = "none";

         remedio.display = "none";
     }

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
         temas.border = "solid 1px white"
         temas.boxShadow = "0px 0px 10px 0px green"
         contador++;
     } else {

         temas.color = "black"
         temas.background = "white"
         temas.border = "solid 1px #3c7c52"
         temas.boxShadow = "0px 0px 0px 0px green"
         contador--;
     }


 }

 function tema2() {

     var subtema = document.getElementById('subtema').style;
     if (contador == 0) {

         subtema.color = "white"
         subtema.background = "#3c7c52"
         subtema.border = "solid 1px white"
         subtema.boxShadow = "0px 0px 10px 0px green"
         contador++;
     } else {

         subtema.color = "black"
         subtema.background = "white"
         subtema.border = "solid 1px #3c7c52"
         subtema.boxShadow = "0px 0px 0px 0px green"
         contador--;
     }


 }