 function suplementos() {

     var abrir1 = document.getElementById('suplemento').style;


     if (abrir1.display == "none") {

         abrir1.display = "block";


     } else {

         abrir1.display = "none";


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

     var abrir0 = document.getElementById("cosmetico").style;
     var abrir1 = document.getElementsByClassName('cabelo-bioex');
     var abrir2 = document.getElementsByClassName('cabelo-haskel');

     abrir0.display = "block";





     for (var i = 0; i < abrir2.length; i++) {

         abrir2[i].style.display = "block";
     }
     for (var i = 0; i < abrir1.length; i++) {

         abrir1[i].style.display = "block";
     }




 }





 function medicamentos() {
     // var abrir = document.getElementById('medicamentos').style;
     var remedio = document.getElementById('remedio').style;
     //var temas = document.getElementById('temas');
     var fechar = document.getElementsByClassName('fechar');


     if (remedio.display == "none") {

         remedio.display = "block";


     } else {
         remedio.display = "none";
         fechar.display = "none";

     }

 }


 function areainfantil() {
     // var abrir = document.getElementById('infantil').style;
     var abri1 = document.getElementById('areainfantil').style;


     if (abri1.display == "none") {

         abri1.display = "block"
     } else {

         abri1.display = "none"
     }
 }
 //  rea do bebê
 function mamentacao() {

     var abrir0 = document.getElementById("areainfantil").style;
     var abrir1 = document.getElementsByClassName('amamentacao');


     abrir0.display = "block";






     for (var i = 0; i < abrir1.length; i++) {

         abrir1[i].style.display = "block";
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