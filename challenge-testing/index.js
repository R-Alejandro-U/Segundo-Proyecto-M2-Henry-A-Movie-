
// constructor(): Inicializa el carrito como un array vacío.-----------

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.------------------------------

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentage): Aplica un descuento al total de la compra según el porcentage especificado.

class CarritoCompra {
    constructor (){
        this.carrito = [];
    }

    agregarProducto(producto){

        //---------------------------------------------------------------
        //    Validar datos antes de agregarlos al carrito.             |
        //---------------------------------------------------------------

        if(producto.producto.length === 0){
            throw new Error("El producto no puede estar vacio");
        };
        
        if(typeof producto.precio !== "number" || producto.precio <= 0){
            throw new Error("El precio debe ser un número positivo");
        };
        
        if(typeof producto.cantidad !== "number" || producto.cantidad <= 0 || producto.cantidad % 1 !== 0){
            throw new Error("La cantidad de productos no puede ser menor o igual 0, debe ser un numero entero mayor a 0");
        };

        this.carrito.push(producto);
    };

    calcularTotal(){
        if(this.carrito.length <= 0){
            throw new Error("No llego ningun producto");
        };
 
        return this.carrito.reduce((total, producto) => total += producto.precio * producto.cantidad, 0);
    };

    aplicarDescuento(porcentage){
        const total = this.calcularTotal();
        if(porcentage === 0)return total;
        if(porcentage === 100) return 0;

        const porciento = total * porcentage / 100;
        return total - porciento;
    };
};

module.exports = CarritoCompra;