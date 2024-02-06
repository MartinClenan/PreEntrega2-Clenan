const productos = [
  { id: 1, nombre: "Proteína Whey Pro 2.0", tamaño: "1kg", precio: 18000 },
  { id: 2, nombre: "TrueMade Whey Protein", tamaño: "930g", precio: 32000 },
  { id: 3, nombre: "Creatina Crea Shock", tamaño: "300g", precio: 15000 },
  { id: 4, nombre: "Creatina Micronizada", tamaño: "300kg", precio: 18000 },
  { id: 5, nombre: "Bcaa Recovery", tamaño: "300g", precio: 15000 }
];

class Carrito{
  constructor(){
      this.productos = [];
      this.total = 0;
  }
  
  agregarProducto(id){
      let producto = productos.find(product => product.id === id);
      if(producto){
          this.productos.push(producto);
      }
  }
}