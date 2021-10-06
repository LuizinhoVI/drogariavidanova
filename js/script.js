     // Get the Sidebar
     var mySidebar = document.getElementById("mySidebar");

     // Get the DIV with overlay effect
     var overlayBg = document.getElementById("myOverlay");

     // Toggle between showing and hiding the sidebar, and add overlay effect
     function w3_open() {
         if (mySidebar.style.display === 'block') {
             mySidebar.style.display = 'none';
             overlayBg.style.display = "none";
         } else {
             mySidebar.style.display = 'block';
             overlayBg.style.display = "block";
         }
     }

     // Close the sidebar with the close button
     function w3_close() {
         mySidebar.style.display = "none";
         overlayBg.style.display = "none";
     }
     numero = 0;

     function abrir() {

         var abrir = document.getElementById('open').style;

         if (numero >= 0) {
             abrir.display = "none";

         } else {
             abrir.display = "block";

         }


     }