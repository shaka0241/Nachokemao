<meta charset="utf-8" />
<?php

/* Escribe un programa que multiplique los 20
primeros numeros naturales

Utilizar metodo bucle while */

$contador = 2;
$numero = 1;


while($contador <= 20){
    
    $numero*=$contador;
    
    echo $numero."<br/>";
    
    $contador++;
    
}

echo "El resultado de multiplicar los 20 primeros numeros es: ".$numero;


?>