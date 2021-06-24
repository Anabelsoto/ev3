/*	Declara dos variables numéricas (con el valor que desees),
 muestra por consola la suma, resta, multiplicación, división y
  módulo (resto de la división).*/
  var a=5;
  var b=8;
  function operaciones_arit(){
  var suma=a+b;
  var resta = a-b;
  var multiplicacion=a*b;
  var division=a/b;
  var residuoa=a%2;
  var residuob=b%2;
  console.log("La suma es: "+suma);
  console.log("La resta es: "+resta);
  console.log("La multiplicacion es: "+multiplicacion);
  console.log("La division es: "+division);
  console.log("El residuo a  es: "+residuoa);
  console.log("El residuo b es: "+residuob);
}
/*•	Declara un String que contenga tu nombre, después muestra
 un mensaje de bienvenida por consola. Por ejemplo: 
si introduzco “Fernando”, me aparezca “Bienvenido Fernando”. */

var nombre="Anabel";
function mensaje(){
console.log("Bienvenida "+nombre);
}
/*•	Calcular el impuesto de un total ingresado la fórmula
 es la siguiente: total=100; subtotal=total/1.18;
  IGV=sub_total*0.18 . Se pide que imprima en consola esos 3 datos. */
  function calculo(){
  var total1=document.getElementById("total").value;
  var subtotal=parseInt(total1)/1.18;
  var igv=parseInt(subtotal)*0.18;

  console.log("El total es: "+total1);
  console.log("El Sub total es: "+subtotal);
  console.log("El IGV 18% es: "+igv);
}