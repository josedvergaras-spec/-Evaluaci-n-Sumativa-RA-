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
// 3. Renderizado interactivo y guardado de datos
function actualizarCarrito() {
    // Guarda el carrito actualizado en el almacenamiento local
    localStorage.setItem('carritoEcoMarket', JSON.stringify(carrito));
    
    listaCarrito.innerHTML = '';
    let total = 0;
    let cantidadTotal = 0;

    // Recorre los productos y los dibuja en el HTML del modal
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        cantidadTotal += item.cantidad;

        listaCarrito.innerHTML += `
            <li class="list-group-item d-flex justify-content-between lh-sm align-items-center">
                <div>
                    <h6 class="my-0">${item.nombre}</h6>
                    <small class="text-muted">Precio un.: $${item.precio.toFixed(2)}</small>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-secondary px-2 py-0 me-2" onclick="cambiarCantidad(${index}, -1)">-</button>
                    <span class="fw-bold me-2">${item.cantidad}</span>
                    <button class="btn btn-sm btn-outline-secondary px-2 py-0 me-3" onclick="cambiarCantidad(${index}, 1)">+</button>
                    <span class="text-success fw-bold" style="width: 60px; text-align: right;">$${subtotal.toFixed(2)}</span>
                </div>
            </li>
        `;
    });

    // Actualiza los textos del total y el contador en la pantalla
    totalCarrito.textContent = `$${total.toFixed(2)}`;
    contadorCarrito.textContent = cantidadTotal;
}

// Función para sumar o restar unidades desde los botones del carrito
window.cambiarCantidad = function(index, cambio) {
    carrito[index].cantidad += cambio;
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1); // Elimina el producto si la cantidad llega a 0
    }
    actualizarCarrito();
};
// 4. Simulación de finalización de compra
document.getElementById('btn-finalizar-compra').addEventListener('click', () => {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío. Explora el catálogo para agregar productos ecológicos.");
        return;
    }
    
    alert(`¡Transacción exitosa! Has pagado un total de ${totalCarrito.textContent}. Gracias por comprar en EcoMarket.`);
    
    // Vaciar el carrito tras la compra y actualizar la vista
    carrito = [];
    actualizarCarrito();
    
    // Cerrar el modal automáticamente (requiere Bootstrap JS)
    const modalElement = document.getElementById('carritoModal');
    const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    if(modalInstance) modalInstance.hide();
});

// Cargar la vista inicial del carrito al abrir la página
document.addEventListener('DOMContentLoaded', actualizarCarrito);