
/*The JavaScript for the function filterFunction().  It is responsible for selecting the products for display. */

function filterFunction() {
     if(document.getElementById('rr1').checked) {
          x = document.getElementsByClassName("cp");
          x[0].style = "display:block"; 
          x[1].style = "display:block"; 
     }
     else {
          x = document.getElementsByClassName("cp");
          x[0].style = "display:none"; 
          x[1].style = "display:none"; 
     }

     if(document.getElementById('rr2').checked) {
          y = document.getElementsByClassName("cn");
          y[0].style = "display:block"; 
          y[1].style = "display:block"; 
     }
     else {
          y = document.getElementsByClassName("cn");
          y[0].style = "display:none"; 
          y[1].style = "display:none"; 
     }

     if(document.getElementById('rr3').checked) {
          z = document.getElementsByClassName("sp");
          z[0].style = "display:block"; 
          z[1].style = "display:block"; 
     }
     else {
          z = document.getElementsByClassName("sp");
          z[0].style = "display:none"; 
          z[1].style = "display:none"; 
     }

}