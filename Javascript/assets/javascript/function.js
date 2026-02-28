"user strict";
function porConsola(n1,n2)/*parametros*/{
    console.log(`La suma es ${n1 + n2}`);
    console.log(`La resta es ${n1 - n2}`);
    console.log(`La multiplicacion es ${n1 * n2}`);
    console.log(`La division es ${n1 / n2}`);
    console.log(`********************`);
}
/*porConsola(40,70);*/ /*argumento*/

function porPantalla (n1,n2) {
    let suma = `La suma de ${n1} y ${n2} es: ${n1 + n2}`;
    document.getElementById("suma").innerHTML = suma;

    let resta = `La resta entre ${n1} y ${n2} es: ${n1 -n2}`;
    document.getElementById("resta").innerHTML = resta;

    let multiplicacion = `La multiplicacion entre ${n1} y ${n2} es: ${n1 * n2}`;
    document.getElementById("multiplicacion").innerHTML = multiplicacion;

    let division = `La division entre ${n1} y ${n2} es: ${n1 / n2}`;
    document.getElementById("division").innerHTML = division;
}
/*porPantalla(40, 50);*/

function calculadora (n1,n2, mostrar = false){
    if (mostrar == false){
        porConsola(n1,n2);
    } else{
        porPantalla(n1,n2);
    }
    return true;
}
calculadora (3,10, true);