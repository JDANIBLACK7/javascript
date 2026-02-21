let usuario1 = "JDANIBLACK7";
let password1 = "30492298";
let usuario2 = "merldgarbi";
let password2 = "1010";
let user = prompt("Ingresa tu usuario");
let password = prompt("Ingresa tu contraseña")

switch (true){
    case (user === usuario1 && password === password1):
        alert(`Hola ${usuario1}, Bienvenido!`);
        break;
        case (user === usuario2 && password === password2):
            alert(`Hola ${usuario2}, Bienvenido`);
            break;
            default:
                alert("Usuario o contraseña incorrectos");
                break;
}