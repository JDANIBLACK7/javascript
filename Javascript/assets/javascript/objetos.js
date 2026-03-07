/*const curso ={
    nombre: "Programacion",
    duracion: "40 horas",
    disponible: true,
    informacion: {
        modulo: 15,
        modalidad:{
            presencial: true,
            online: true
        }
    }
}

const {
    nombre,
    informacion:{modulo},
    informacion,
   informacion: {
   modalidad:{presencial}
    }
} = curso;

console.log(modulo);
console.log(informacion);
console.log(presencial);*/

/*const samsung26ultra ={
    pantalla: "6.9 pulgadas, tecnología Dynamic AMOLED 2X, resolución Quad HD+, tasa de refresco adaptativa hasta 120 Hz",
    procesador: "Snapdragon 8 Elite Gen 5 para Galaxy (2nm).",
    camara: {
        principal: "200MP (f/1.4).",
        teleobjetivo: "50MP (zoom 5x) y 10MP (zoom 3x)",
        ultragranangular: "50MP (f/1.9).",
        frontal: "12MP",
        video: "Capacidad 8k y nuevas funciones de estabilizacion de horizonte"
    },
    ram: "12GB o 16GB DDR5.",
    almacenamiento: "256GB, 512GB 0 1TB.",
    bateria: "5,000mAh cpn carga raida de 60W o 65W.",
    sistemaoperativo: "Android 16 con One UI 8.5.",
    diseño: "Grosor de 7.9mm, peso de 214 gramos, S Pen integrado",
    conectividad: "5G, Wi-Fi 7.",
    resumen : "El Samsung Galaxy S26 Ultra (lanzado a principios de 2026) cuenta con una pantalla de 6.9 pulgadas QHD+, procesador Snapdragon 8 Elite Gen 5, y una cámara principal de 200 MP mejorada. Incluye 12/16 GB de RAM, hasta 1 TB de almacenamiento, batería de 5,000 mAh con carga de 60W-65W, Android 16 y S Pen integrado"
}

const {
    pantalla, 
    procesador,
    camara,
    camara:{
        principal,
        teleobjetivo,
        ultragranangular,
        frontal,
        video
    },
    ram, 
    almacenamiento, 
    bateria, 
    sistemaoperativo, 
    diseño, 
    conectividad, 
    resumen,
} = samsung26ultra;

console.log(principal);
console.log(camara);*/

const medico ={
    nombre: "Cristiano",
    apellido: "Ronaldo",
    apodo: "el bicho",
    cargo: "Doctor",
    informacionPersonal: {
        edad: 40,
        casa: "Dubai",
        familia: {
            esposa:{
                nombrem:"Georgina",
                apellidom: "Rodriguez",
                edadm: "Es hermosa"
            },
            hijos: "cr7juniors",
            padre: "tiene padre",
            madre: "tiene madre",
        }
    }
}

const {
    nombre,
    apellido,
    apodo,
    cargo,
    informacionPersonal: {
        edad,
        casa,
        familia:{
            esposa: {
                nombrem,
                apellidom,
                edadm
            },
            hijos,
            padre,
            madre
        }
    }
} = medico;

medico.sexo="masculino";
console.log(medico);
delete medico.informacionPersonal;