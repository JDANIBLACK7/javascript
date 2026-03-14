const carrito = [
    {nombre: "Monitor 20 Pulgadas", precio: 500},
    {nombre: "PC Gamer", precio: 300},
    {nombre: "Tablet", precio: 550},
    {nombre: "Audifonos", precio: 600},
    {nombre: "Teclado", precio: 200},
    {nombre: "Celular", precio: 150},
];

//carrito.forEach((producto)=> console.log(`Articulo: ${producto.nombre} Precio: ${producto.precio}`));














const anime = [
    {personaje: "Goku", poder: "Universal", Ki: "+10millones"},
    {personaje: "Saitama", poder: "Roto"},
    {personaje: "Luffy", poder: "La goma"},
    {personaje: "Naruto", poder: "Chakra"},
    {personaje: "Ichigo", poder: "espiritual"},
    {personaje: "Kaneki", poder: "comegente"},
]

//anime.forEach((caricatura)=> console.log(`Representante:${caricatura.personaje}, poder:${caricatura.poder}`));



const nuevoArray = carrito.map(function(producto){
    return `Articulo: ${producto.nombre}, precio:${producto.precio * 2}`
})

console.log(nuevoArray);