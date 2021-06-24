/*PREGUNTA 2. Mencione 5 ejemplos prácticos en la que 
utilice a javascript  y ejecute una declaración simple y
 genere alguna operación matemática, genere condicionales
  sea if y case, genere un bucle siendo for y while.. (3 puntos)*/
  function operacion_suma(){
    //var resultado=suma;
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var suma= document.getElementById("Resultado").value=parseInt(a)+parseInt(b);
}
function operacion_resta(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var resta= document.getElementById("Resultado1").value=parseInt(a)-parseInt(b);
}

 function condicion(){
    var numero=parseInt(document.getElementById("info").value);
    if(numero==1){
        alert("uno");
    }
    if(numero==2){
        alert("dos")
    }
    if(numero==3){
        alert("tres")
    }
    if(numero==4){
        alert("cuatro")
    }
    if(numero==5){
        alert("cinco")
    }
    
}
function condicion1(){
    var numero=parseInt(document.getElementById("info").value);
    switch(numero){
        case 1:
            alert("uno");
        break;
        case 2:
            alert("dos");
        break;
        case 3:
                alert("tres");
            break;
        case 4:
                alert("cuatro");
        break;
        case 5:
            alert("cinco");
    }
}

function bucle(){
    var inicio=0
    for(inicio=0;inicio<20;inicio++){
        var resto=inicio%2;
        if(resto==0){
            console.log(inicio);
        }
    }
    alert("muestra los numeros Pares por consola!")
}
function bucle1(){
    var inicio=0
    while(inicio<20){
        var resto=inicio%2;
        if(resto==1){
            console.log(inicio);
        }
        inicio++;
    }
    alert("muestra los numeros Impares por consola!")
}
