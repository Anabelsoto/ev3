/*PREGUNTA 6 Cree un objeto llamado “Mascota” con las variables 
que usted cree convenientes, con todos sus atributos y cree el método
 “Imprimir_Datos”. Ejecute el archivo “DemoMascota.html”,
  enviando 4 datos de ejemplo e imprimirlo, mostrando estos datos
   de la mejor manera posible.                         (6 puntos)

Debe haber un formulario y cada vez que de clic en el botón agregar 
se debe agregar en un array 
Debe haber otro botón que permita imprimir en consola todos los datos
 escritos anteriormente.
 */
var lista=new Array();
var mascota;

var mascota=new Object();
mascota.nombre="oso";
mascota.edad="3 años";
mascota.color="Gris";
mascota.raza="Rottweiler";
lista.push(mascota);

var mascota=new Object();
mascota.nombre="Pecas";
mascota.edad="2 años";
mascota.color="blanco y negro";
mascota.raza="Dálmata";
lista.push(mascota);


$(document).ready(function(){

    $("#agregar").click(function(){
        for( var i=0; i<lista.length;i++){
        $("#test>tbody").append(
            '<tr>'+
            '<td>'+i+'</td>'+
            '<td>'+lista[i].nombre+'</td>'+
            '<td>'+lista[i].edad+'</td>'+
            '<td>'+lista[i].color+'</td>'+
            '<td>'+lista[i].raza+'</td>'+
            '</tr>'); 
            document.getElementById("color").style.backgroundColor = "grey";
            document.getElementById("color").style.color= "white";
    }
  
    });
    
});
function mostrar(){
    for(var i=0; i<lista.length;i++){
    console.log("Su nombre de la mascota es: "+lista[i].nombre+", tiene, "+lista[i].edad+" Años, de color "+lista[i].color+" y es de raza, "+lista[i].raza+".");
   // console.log("Edad es: "+lista[i].edad);
   // console.log("color es: "+lista[i].color);
    //console.log("Es de raza: "+lista[i].raza);
   }
}