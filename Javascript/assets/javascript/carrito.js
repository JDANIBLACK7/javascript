var compras = prompt("deseas comprar", "SIUUUUUUUU");
const catalogo = [
    {id: 1, producto: "Franela", precio: 50},
    {id: 2, producto: "Pantalon", precio: 20},
    {id: 3, producto: "Sueter", precio: 30}
]

if (compras == "si"){
    mostrarCatalogo(catalogo);
} else {
    console.log("NO QUIERO ENDEUDARME MAS");
}

function mostrarCatalogo(catalogo){
    for(let i = 0; i < catalogo.length; i++){
        console.log(catalogo[i]);
    }
    var compras2 = prompt('Ingrese un id del producto a comprar entre: 0, 1 y 2', 0);
    console.log(`haz agregado al carrito el producto con el id ${compras2}`);
}

var total = 0;
function agregarCarrito(precio){
    return(total += precio);
}
function calcularImpuesto(total) {
    return (impuesto = total * 1.16);
}

total = agregarCarrito(300);
agregarCarrito(1000);
agregarCarrito(1200);

impuesto = calcularImpuesto(total);
console.log(`El total a pagar es ${total} y el total mas el impuesto es ${impuesto}`);