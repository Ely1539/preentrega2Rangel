//orden de llegada
const transportes = ["transporte2011", "transporteLopez",
    "transNew",];
transportes.push("transWorld");

for (let index = 0; index < transportes.length; index++) {
    alert(transportes[index]);
}


//maquina constructora de nuevos transportes a afiliar
class Transporte {
    constructor(nombre, edad, direccion, vence) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.vence = vence;

    }
    hablar() {
        alert(`transportista ${this.nombre}`);
    }

}

const transporte2011 = new Transporte(
    "juan perez",
    "45",
    "calle 123 casa 12 lomas de zamora",
    "31/05/2024",)
transporte2011.hablar();
alert("De Transporte 2011");
const descrip = prompt("Ingrese la propiedad que desea ver del afiliado `transporte 2011`").toLocaleLowerCase();
alert(transporte2011[descrip]);


const transporteLopez = new Transporte(
    "jose nuñez",
    "45",
    "calle 123 casa 12 la plata",
    "31/05/2024")
transporteLopez.hablar();
alert("De Transporte Lopez");
const descript = prompt("Ingrese la propiedad que desea ver del afiliado `transporte Lopez`").toLocaleLowerCase();
alert(transporteLopez[descript]);



const transNew = new Transporte(
    "juan robles",
    "33 ",
    "luis maria campos 12",
    "25/02/2025",)
transNew.hablar();
alert("De TransNew");
const descr = prompt("Ingrese la propiedad que desea ver del afiliado `transNew`").toLocaleLowerCase();
alert(transNew[descr]);


const transWorld = new Transporte(
    "jose rios",
    "33",
    "santa fe 12 caba",
    "25/02/2025");
transWorld.hablar();
alert("De TransWorld");

const desc = prompt("Ingrese la propiedad que desea ver del afiliado `transWorld`").toLocaleLowerCase();
alert(transWorld[desc]);

let nombre = prompt("Ingrese el nombre del transporte A consulta").toLocaleLowerCase();

if (transportes.includes(nombre)) {
    alert("Autorizado a Cargar");
} else {
    alert("Transporte No Autorizado.");
};

//  calculadora de precio neto de flete
function calcularPrecioFinal(kilos, precio) {
    return kilos * precio;
}
const calcularIVA = (precioFinal) => precioFinal * 0.21;
const calcularComision = (precioFinal) => precioFinal * 0.30;
const calcularGananciaNeta = (precioFinal, iva, comision) => precioFinal - iva - comision;

let kilos = Number(prompt("INGRESE KILOS CARGADOS"));
let precio = Number(prompt("INGRESE PRECIO POR KILO"));
let precioFinal = calcularPrecioFinal(kilos, precio);
let iva = calcularIVA(precioFinal);
let comision = calcularComision(precioFinal);
let ganancias = calcularGananciaNeta(precioFinal, iva, comision);

alert(`PRECIO FINAL: ${precioFinal}`);
alert(`IVA: ${iva}`);
alert(`COMISION TRANSPORTE: ${comision}`); alert(`TUS GANANCIAS TOTALES: ${ganancias}`);

const eliminarPorNombre = (nombre) => {
    let index = transportes.indexOf(nombre);

    if (index !== -1) {
        transportes.splice(index, 1);
        alert(`El Transporte ${nombre} "Ha Sido Eliminado"`);
    } else {
        alert(`El Transporte ${nombre} "No Se Encuentra Afiliado"`);
    }
};

eliminarPorNombre(prompt("Ingrese Transporte A Eliminar"));

const clientes = [
    { id: 1, nombre: "sirius", localidad: "caba" },
    { id: 2, nombre: "sell", localidad: "moreno" },
    { id: 3, nombre: "roxy", localidad: "lujan" },
    { id: 4, nombre: "press", localidad: "entre Rios" },
    { id: 5, nombre: "antt", localidad: "corrientes" },
    { id: 6, nombre: "times", localidad: "la Plata" },
    { id: 7, nombre: "rolls", localidad: "caba" },
    { id: 8, nombre: "reich", localidad: "chubut" },
    { id: 9, nombre: "rrjj", localidad: "chubut" },
    { id: 10, nombre: "parts", localidad: "lujan" },
];

clientes.forEach(cliente => {
    alert(`Cliente: ${cliente.nombre}, Localidad: ${cliente.localidad}`);
});
let nombr = prompt("INGRESE EL CLIENTE A CONSULTAR").toLowerCase();
const encontrado = clientes.find((item) => item.nombre === nombr);
if (encontrado) {
    alert(`     
    id: ${encontrado.id}     
    nombre: ${encontrado.nombre}     
    localidad: ${encontrado.localidad}`)
}
else {
    alert("CLIENTE NO REGISTRADO");
};
let localidad = prompt("INGRESE LOCALIDAD DEL CLIENTE A CONSULTAR").toLowerCase();

let filtrados = clientes.filter((item) => item.localidad === localidad);

filtrados.forEach((item) => {
    alert(
        `
        id =${item.id}
        nombre:${item.nombre}
        localidad:${item.localidad}`
    )
});
// ordenados alfabeticamente A-Z
clientes.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre) {
        return -1
    }
});

clientes.forEach((item) => {
    alert(
        ` Ordenados A - Z
        id =${item.id}
        nombre:${item.nombre}
        localidad:${item.localidad}`
    )
});

















