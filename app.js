// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let inputNombre = document.getElementById("nombre");
    let nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("⚠️ Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputNombre.value = "";
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.classList.add("button-delete");
        botonEliminar.onclick = () => eliminarAmigo(index);

        nuevoElemento.appendChild(botonEliminar);
        lista.appendChild(nuevoElemento);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear un amigo y borrar la lista
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let lista = document.getElementById("listaAmigos");

    if (amigos.length === 0) {
        resultado.innerHTML = "⚠️ No hay amigos en la lista.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el nombre seleccionado
    resultado.innerHTML = `🎉 El amigo seleccionado es: <strong>${amigoSeleccionado}</strong>`;

    // Limpiar la lista visualmente
    lista.innerHTML = "";

    // Vaciar el array de amigos
    amigos = [];
}

// Limpia la lista cada vez que se recarga la página
window.onload = function () {
    amigos = [];
    actualizarLista();
};
