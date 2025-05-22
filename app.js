let listaDeCompras = [];

const agregarProducto = (producto) => {
if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    alert(`${producto} ha sido agregado.`);
} else {
    alert(`${producto} ya está en la lista.`);
}
};

const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if (index !== -1) {
    listaDeCompras.splice(index, 1);
    mostrar(); // actualizar lista visualmente
}
};

const mostrar = () => {
const listaElemento = document.getElementById("lista");
    listaElemento.innerHTML = "";

listaDeCompras.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = producto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => eliminarProducto(producto);

    li.appendChild(btnEliminar);
    listaElemento.appendChild(li);
});
};

const agregar = () => {
    const input = document.getElementById("inputProducto");
    const producto = input.value.trim();

if (producto) {
    agregarProducto(producto);
    input.value = "";
    mostrar();
} else {
    alert("Por favor, escribe un producto.");
}
};
