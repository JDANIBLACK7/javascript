// 1. Configuración del juego
const numeroSecreto = 33;
const pistas = [
    "Pista 1: Es un número de dos dígitos iguales.",
    "Pista 2: Es mayor que 20 y menor que 40.",
    "Pista 3: Si sumas sus dígitos, el resultado es 6.",
    "Pista 4: Es la edad de Cristo cuando murió."
];

let intento;
let contadorFallas = 0;
let adivinado = false;

// 2. Ciclo principal: Se repite hasta que adivine
while (adivinado === false) {
    
    // Si todavía hay pistas disponibles en la lista, las mostramos según las fallas
    let mensaje = "¿Cuál es el número secreto?";
    
    if (contadorFallas > 0) {
        // Usamos un IF para no pasarnos del límite de la lista de pistas
        if (contadorFallas <= pistas.length) {
            mensaje = "¡Incorrecto!\n" + pistas[contadorFallas - 1] + "\nIntenta de nuevo:";
        } else {
            mensaje = "¡Sigue intentando! Ya no hay más pistas.";
        }
    }

    intento = parseInt(prompt(mensaje));

    // 3. Verificación con IF
    if (intento === numeroSecreto) {
        alert("¡VICTORIA! El número era " + numeroSecreto);
        adivinado = true; // Rompe el ciclo WHILE
    } else {
        contadorFallas = contadorFallas + 1; // Aumenta para mostrar la siguiente pista
    }
}
