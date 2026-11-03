// 1. Estado global y referencias del DOM
let carrito = JSON.parse(localStorage.getItem('carritoEcoMarket')) || [];
const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total-carrito');
const contadorCarrito = document.getElementById('contador-carrito');

// 2. Función para agregar productos al carrito
window.agregarAlCarrito = function(id, nombre, precio) {
    const productoExistente = carrito.find(item => item.id === id);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }
    
    // Llamará a la función de renderizado que agregaremos en el siguiente paso
    if (typeof actualizarCarrito === 'function') {
        actualizarCarrito();
    }
};