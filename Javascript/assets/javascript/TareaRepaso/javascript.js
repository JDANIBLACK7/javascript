const estudiantes = ["Carolina", "Neilin", "Pedro", "Roberto", "Carlos"];
let texto = "";

for (let i = 0; i < estudiantes.length; i++){
    texto += `El nombre del estudiante es ${estudiantes[i]}` + "</br>";
    console.log("El nombre del estudiante es: " + estudiantes[i]) + "</br>";
};

document.getElementById("text").innerHTML = texto;