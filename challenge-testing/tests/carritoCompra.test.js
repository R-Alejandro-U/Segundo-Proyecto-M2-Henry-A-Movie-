const CarritoCompra = require("../index.js");

// constructor(): Inicializa el carrito como un array vacío.-----------

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.------------------------------

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

describe("La clase ¨CarritoCompra¨", () => {


    it("Debe existir la clase ¨CarritoCompra¨", ()=>{
        expect(typeof CarritoCompra).toBe("function");
    });

    it("La clase se debe llamar ¨CarritoCompra¨", ()=>{
        expect(CarritoCompra.name).toBe("CarritoCompra");
    });

    it("La clase CarritoCompra debe tener un construtor que contenga una propiedad productos, que debe ser un Array sin elementos adentro", ()=> {
        const car = new CarritoCompra();
        expect(car.carrito).toEqual([]);
    });

    it("La clase CarritoCompra debe tener un metodo ´agregarProducto´", ()=> {
        const car = new CarritoCompra();
        expect(typeof car.agregarProducto).toBe("function");
    });
 
    it("EL metodo ´agregarProducto´ debe recibir un objeto y agregarlo al carrito", ()=> {
        const car = new CarritoCompra();
        car.agregarProducto({producto: "tv", precio: 23333, cantidad: 2});
        expect(car.carrito).toEqual([{producto: "tv", precio: 23333, cantidad: 2}]);
    });

    it("EL metodo ´agregarProducto´ debe poder detectar si el nombre del producto esta vacio de serlo retornar un error", ()=> {
        const car = new CarritoCompra();
        expect(() => car.agregarProducto({producto: "", precio: 23333, cantidad: 2})).toThrowError("El producto no puede estar vacio");
    });

    it("EL metodo ´agregarProducto´ debe poder detectar si precio es un numero positivo y mayor a 0 o indefinido, de serlo retornar un error", ()=> {
        const car = new CarritoCompra();
        expect(() => car.agregarProducto({producto: "Tv", precio: 0, cantidad: 2})).toThrowError("El precio debe ser un número positivo");
        expect(() => car.agregarProducto({producto: "Tv", precio: -100, cantidad: 2})).toThrowError("El precio debe ser un número positivo");
        expect(() => car.agregarProducto({producto: "Tv", precio: undefined, cantidad: 2})).toThrowError("El precio debe ser un número positivo");
    });

    it("EL metodo ´agregarProducto´ debe poder detectar si la cantidad de productos es un numero positivo y mayor a 0 o indefinido, de serlo retornar un error", ()=> {
        const car = new CarritoCompra();
        expect(() => car.agregarProducto({producto: "Tv", precio: 10, cantidad: 0})).toThrowError("La cantidad de productos no puede ser menor o igual 0, debe ser un numero entero mayor a 0");
        expect(() => car.agregarProducto({producto: "Tv", precio: 100, cantidad: -30})).toThrowError("La cantidad de productos no puede ser menor o igual 0, debe ser un numero entero mayor a 0");
        expect(() => car.agregarProducto({producto: "Tv", precio: 35, cantidad: undefined})).toThrowError("La cantidad de productos no puede ser menor o igual 0, debe ser un numero entero mayor a 0");
    });


    it("La clase CarritoCompra debe tener un metodo ´calcularTotal´", ()=> {
        const car = new CarritoCompra();
        expect(typeof car.calcularTotal).toBe("function");
    });

    it("EL metodo ´calcularTotal´, debe calcular el total de la compra, sumando los precios de todos los productos en el carrito. ", ()=> {
        const car = new CarritoCompra();
        car.agregarProducto({producto: "tv", precio: 20, cantidad: 2})
        car.agregarProducto({producto: "tv", precio: 20, cantidad: 1})
        car.agregarProducto({producto: "tv", precio: 30, cantidad: 1})
        expect(car.calcularTotal()).toBe(90);
    });

    it("La clase CarritoCompra debe tener un metodo ´aplicarDescuento´", ()=> {
        const car = new CarritoCompra();
        expect(typeof car.aplicarDescuento).toBe("function");
    });

    it("EL metodo ´aplicarDescuento´, debe aplicar un descuento al total de la compra según el porcentaje especificado.", ()=> {
        const car = new CarritoCompra();
        car.agregarProducto({producto: "tv", precio: 20, cantidad: 2})
        car.agregarProducto({producto: "tv", precio: 20, cantidad: 1})
        car.agregarProducto({producto: "tv", precio: 30, cantidad: 1})
        expect(car.aplicarDescuento(20)).toBe(72);
    });
});