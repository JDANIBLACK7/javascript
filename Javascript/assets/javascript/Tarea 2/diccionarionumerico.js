let numero = parseInt(prompt("Inserta un numero del 1 al 7 y te dire el nombre del dia que elegiste en ingles"));
switch (true) {
    case numero === 1:
        console.log("Monday");
        document.getElementById("dia").innerText = "Monday";
        break;
    case numero === 2:
        console.log("Tuesday");
        document.getElementById("dia").innerText = "Tuesday";
        break;
    case numero === 3:
        console.log("Wednesday");
        document.getElementById("dia").innerText = "Wednesday";
        break;
    case numero === 4:
        console.log("Thursday");
        document.getElementById("dia").innerText = "Thursday";
        break;
    case numero === 5:
        console.log("Friday");
        document.getElementById("dia").innerText = "Friday";
        break;
    case numero === 6:
        console.log("Saturday");
        document.getElementById("dia").innerText = "Saturday";
        break;
    case numero === 7:
        console.log("Sunday");
        document.getElementById("dia").innerText = "Sunday";
        break;
        default:
            alert("Dato invalido");
}