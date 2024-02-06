const productos = [
  { id: 1, nombre: "Proteína Whey Pro 2.0", tamaño: "1kg", precio: 18000 },
  { id: 2, nombre: "TrueMade Whey Protein", tamaño: "930g", precio: 32000 },
  { id: 3, nombre: "Creatina Crea Shock", tamaño: "300g", precio: 15000 },
  { id: 4, nombre: "Creatina Micronizada", tamaño: "300kg", precio: 18000 },
  { id: 5, nombre: "Bcaa Recovery", tamaño: "300g", precio: 15000 }
];

console.log("Nombre: " + productos[1].nombre + " $" + productos[1].precio);

let producto = productos.find(item => item.id === 1);
console.log(producto.nombre + " (" + producto.tamaño + ")")