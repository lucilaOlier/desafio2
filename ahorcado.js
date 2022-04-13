
var palabras = ["auto","casa","jardin"]


var palabrasAlAzar = ""; //palabra al azar 
var palabrasAdi = ""; //palabra que va adivinando
var vidas = 4

document.querySelector("#calcular").addEventListener("click" , comprobar);
eligeUnaPalabraAlAzar();






function eligeUnaPalabraAlAzar() {
    palabrasAlAzar = palabras[Math.floor(Math.random()* palabras.length)]
   
    for (var i=0; i<palabrasAlAzar.length; i++) {
        palabrasAdi = palabrasAdi+"_ ";
        }
    
    document.getElementById("frase").innerHTML=palabrasAdi;
    
    } 





    function comprobar() {

        var letra = document.querySelector("#letra").value.toUpperCase();
        palabrasAlAzar = palabrasAlAzar.toUpperCase();
        var nuevo = "";


        for (var i =0; i<palabrasAlAzar.length;i++) {
            if (letra == palabrasAlAzar[i]) {
                nuevo = nuevo + letra + " ";
             }
            else {
                 nuevo = nuevo + palabrasAdi[i*2] + " ";
               }

        }


            if(nuevo==palabrasAdi) {
                vidas--;
                document.getElementById("vida").innerHTML="el numero de vidas que quedan son: " + vidas;
              }


        dibujar();
        palabrasAdi = nuevo;
        document.getElementById("frase").innerHTML=palabrasAdi;


            if(vidas==0) {
               alert("perdiste")
                }


            if(palabrasAdi.search("_")==-1){
                alert("ganaste")
                }


       document.getElementById("letra").value="";
       document.getElementById("letra").focus();
      

    }



  
    

    
    




var pantalla 

var split = palabrasAlAzar.split('')
console.log(split)







