function listaFrutas (fruta1, fruta2, ...todasfrutas){
    console.log("fruta 1 es", fruta1);
    console.log("fruta 2 es", fruta2);
    console.log(todasfrutas);
}
listaFrutas("manzana", "pera", "guayaba", "cambur");

var frutas2 = ["mango", "durasno", "kiwi"];
listaFrutas(...frutas2, "manzana", "pera");