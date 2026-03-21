let text = "";
let num1 = 5;
let num2 = 2;
let texto = "";

let resultado = num1 + num2;
console.log(resultado);
texto += "El resultado de la suma es: " + resultado;
console.log(texto);
document.getElementById("resul").innerHTML = texto;  


while (resultado <= 80) {
    text += "el numero a imprimir es " + resultado + "<br>"; 
    document.getElementById("text").innerHTML = text;
    resultado++;
}

