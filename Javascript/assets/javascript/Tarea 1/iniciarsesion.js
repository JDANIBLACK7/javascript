let usuario1 = "JDANIBLACK7";
let password1 = "30492298";
let usuario2 = "merldgarbi";
let password2 = "1010";
let inspector = "Pedro Picapiedra";
let passwordi = "901010";
let administrador = "ponzio pilato"
let passworda = "303030"
let user = prompt("Ingresa tu usuario");
let password = prompt("Ingresa tu contraseña");

switch (true){
    case (user === usuario1 && password === password1):
        alert(`Hola ${usuario1}, Bienvenido!`);
        break;
    case (user === usuario2 && password === password2):
        alert(`Hola ${usuario2}, Bienvenido`);
        break;
    case (user === inspector && password === passwordi):
        alert(`Hola ${inspector}, eres inspector`);
        break;
    case (user === administrador && password === passworda):
        alert(`Hola ${administrador}, eres administrador`);
        break;
    default:
        alert("Usuario o contraseña incorrectos");
        break;
}