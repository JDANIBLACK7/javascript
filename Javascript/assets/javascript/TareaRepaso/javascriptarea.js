function mOver(obj){
    obj.innerHTML = "Aprendiendo en 2026"
    const boton = document.querySelector("boton");
    boton.classList.add("red");
}
function displayDate(){
    document.getElementById("fecha").innerHTML = Date();
}

function saludo(){
    document.getElementById("saluda").innerHTML = "Hola";
}

const calculadora = {
    sumar: function(n1,n2){
        suma = n1 + n2;
        document.querySelector("#result").innerHTML = `la suma de a: ${n1} mas b:${n2}=${suma}`;
    },
    restar: function(n1,n2){
    resta = n1 - n2;
    document.querySelector 
    }
}