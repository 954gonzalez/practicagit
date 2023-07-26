const carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio, imagenURL) {
    const item = { nombre, precio, imagenURL };
    carrito.push(item);
    total += precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoLista = document.getElementById("carrito-lista");
    carritoLista.innerHTML = "";

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.className = "carrito-item";
        li.innerHTML = `
            <span>${item.nombre}</span>
            <span>$${item.precio}</span>
            <img src="${item.imagenURL}" alt="${item.nombre}">
        `;
        carritoLista.appendChild(li);
    });

    const totalElement = document.getElementById("total");
    totalElement.textContent = total;
}
