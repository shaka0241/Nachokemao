// alert("hola alumnos!");//

// comentarios en javaScript

/* igualmente



 // document.getElementById("texto").innerHTML="Hola alumnos!";

document.getElementById("miBoton").onclick=function(){
    //modificando el texto mediante una funcion
    
    document.getElementById("texto").innerHTML="Hola alumnos";
} 

document.getElementById("segundoBoton").onclick=function(){
    //modificando el texto mediante una funcion
    
    document.getElementById("segundoparrafo").innerHTML = document.getElementById("segundoparrafo").innerHTML+"Increible";
}


document.getElementById("crearParrafo").onclick=function(){
    //modificando el texto mediante una funcion
    
    document.getElementById("parrafoVacio").innerHTML="Bienvenidos al maravilloso mundo de JS";
} 


document.getElementById("botonUno").onclick=function(){
    //modificando el texto mediante una funcion
    
    document.getElementById("parrafoUno").style.color="red";
    
    document.getElementById("parrafoUno").style.fontSize="50px";
    
    document.getElementById("parrafoUno").fontWeight="100";
} 


document.getElementById("circulo_rojo").onclick = function(){
    document.getElementById("circulo_rojo").style.display="none";
}

document.getElementById("circulo_azul").onclick = function(){
    document.getElementById("circulo_azul").style.display="none";
}

document.getElementById("circulo_verde").onclick = function(){
    document.getElementById("circulo_verde").style.display="none";
}



var x=1;
var y=4;
var suma=x+y;

console.log(x);
console.log(y);
console.log(suma);



document.getElementById("mostrarMensaje").onclick = function(){
    var entradatexto = "";
    entradatexto = document.getElementById("usuario").value;
    document.getElementById("texto").innerHTML = "Bienvenido " + entradatexto;
}




var miArray = new Array();

    miArray[0]="rojo";
    miArray[1]="amarillo";

console.log(miArray[1]);

var tweets = ["Buenos dias","Me encanta el cafe"];
tweets.push("Vuelta al trabajo");
tweets.splice(1,0,"Hola");
alert(tweets[1]);



// Ejemplo de condicionales if 

var hora = 22;

var saludo="";

if (hora<20){
    saludo="Buenos dias";
}
else {
    saludo="Buenas noches";
}

alert(saludo);

// estructuras selectivas multiples

var hora = 4;

var saludo="";

    if (hora<12){
        saludo = "buenos dias";
    }

        else if (hora<18) {
            saludo = "buenas tardes";
            }

                else{
                    saludo = "buenas noches"                
                }
alert(saludo);




// bucles

for(var i=0;i<5;i++) {
    alert(i);
}



for(var i=5;i>0;i--) {
    alert(i);
}

alert("ha terminado el bucle")

*/

// Validacion simple mediante elemento de entrada input.

document.getElementById("miboton").onclick= function(){
    var palabraMagica = "abracadabra";
    var textoUsuario;
    
    textoUsuario = document.getElementById("entradaUsuario").value;
        if(textoUsuario == palabraMagica) {
            alert("Podeis entrar");
        }
            else{
                alert("Fuera de aqui!");
            }
}













