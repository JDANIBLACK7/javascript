const reproductor = {
    reproducir: function(id, cancion) {
        console.log(`Reproduciendo cancion id ${id}, nombre: ${cancion}`);
    },
    pausar: function(id){
        console.log(`pausando... la cancion con el ${id}`);
    },
    borrar: function(id){
        console.log(`Borrando cancion con id: ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la Playlist ${nombre}`);
    }
}

//reproductor.reproducir(30, "Steve")
//reproductor.borrar(15);
//reproductor.crearPlaylist("Rock and Roll");
//reproductor.reproducirPlaylist("Rock and Roll");





const vehiculo = {
    encender: function(placa, modelo, color){
        console.log(`El vehiculo con la placa: ${placa}, modelo: ${modelo}, de color: ${color} esta encendido`);
    },
    apagar: function(placa, modelo, color){
        console.log(`El vehiculo con la placa: ${placa}, modelo: ${modelo}, de color: ${color} esta apagado`);
    },
    acelerar: function(placa, modelo, color){
        console.log(`Acelerando el vehiculo con la placa: ${placa}, modelo: ${modelo}, de color: ${color}...`);
    },
    frenar: function(placa, modelo, color){
        console.log(`Frenando el vehiculo con la placa: ${placa}, modelo: ${modelo}, de color: ${color}...`);
    },
    frenodemano: function(placa, modelo, color){
        console.log(`Estacionando el vehiculo con la placa:${placa}, del modelo: ${modelo} y color: ${color}...`);
    }
}

//vehiculo.encender("30dfg50", "Ford Mustang GT", "negro");



const calculadora = {
    suma: function(n1,n2){
        console.log(`El resultado es: ${n1 + n2}`);
    },
    resta: function(n1,n2){
        console.log(`El resultado es: ${n1 - n2}`);
    },
    division: function(n1,n2){
        console.log(`El resultado es: ${n1 / n2}`);
    },
    multiplicacion: function(n1,n2){
        console.log(`El resultado es: ${n1 * n2}`);
    }
}

calculadora.suma(50,30);
calculadora.resta(70,20);
calculadora.division(20,5);
calculadora.multiplicacion(50,50);