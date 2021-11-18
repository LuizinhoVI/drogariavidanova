 function suplementos() {

     var abrir1 = document.getElementById('suplemento').style;
     abrir1.display = "block";






     var fechar = document.getElementsByClassName('fechar');
     fechar[1].style.display = "none";
     fechar[2].style.display = "none";
     fechar[3].style.display = "none";
     alert("Victoria <3 ")


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
     var fechar = document.getElementsByClassName('fechar');
     fechar[0].style.display = "none";
     fechar[1].style.display = "none";
     fechar[3].style.display = "none";




     for (var i = 0; i < abrir2.length; i++) {

         abrir2[i].style.display = "block";
     }
     for (var i = 0; i < abrir1.length; i++) {

         abrir1[i].style.display = "block";
     }




 }

 function perfume() {

     var abrir0 = document.getElementById("cosmetico").style;
     var abrir1 = document.getElementsByClassName('perfume');
     var fechar = document.getElementsByClassName('fechar');

     abrir0.display = "block";

     for (var i = 0; i < abrir1.length; i++) {

         abrir1[i].style.display = "block";
     }

     fechar[0].style.display = "none";
     fechar[1].style.display = "none";
     fechar[3].style.display = "none";


     alert()

 }





 function medicamentos() {
     // var abrir = document.getElementById('medicamentos').style;
     var abrir0 = document.getElementById("remedio").style;
     var abrir1 = document.getElementsByClassName('amamentacao');

     abrir0.display = "block";

     for (var i = 0; i < abrir1.length; i++) {
         abrir1[i].style.display = "block";
     }

     var fechar = document.getElementsByClassName('fechar');
     fechar[0].style.display = "none";
     fechar[3].style.display = "none";
     fechar[2].style.display = "none";

 }



 //  rea do bebê
 function mamentacao() {

     var abrir0 = document.getElementById("areainfantil").style;
     var abrir1 = document.getElementsByClassName('amamentacao');


     abrir0.display = "block";






     for (var i = 0; i < abrir1.length; i++) {

         abrir1[i].style.display = "block";
     }


     var fechar = document.getElementsByClassName('fechar');
     fechar[0].style.display = "none";
     fechar[1].style.display = "none";
     fechar[2].style.display = "none";

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