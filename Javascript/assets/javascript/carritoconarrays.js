// Supongamos que creamos un carrito de compras desde la consola,
// más adelante lo haremos ya desde una interfaz web

const carrito = [];

// agregar un elemento al carrito...
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 500,
};

const producto2 = {
    nombre: "Celular",
    precio: 500,
};

const producto5 = {
    nombre: "Iphone",
    precio: 500,
};

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto5);

const producto3 = {
    nombre: "Samsung",
    precio: 300,
}

carrito.unshift(producto3);

console.log(carrito)