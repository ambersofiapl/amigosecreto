// Array para almacenar los nombres (carga desde localStorage si hay datos)
let amigos = JSON.parse(localStorage.getItem("amigos")) || [];

// Función para agregar un amigo
function agregarAmigo() {
    let inputNombre = document.getElementById("nombre");
    let nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    guardarLista();
    actualizarLista();
    inputNombre.value = "";
}

// Función para recorrer el array y actualizar la lista en la página
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.classList.add("eliminar");
        botonEliminar.onclick = () => eliminarAmigo(index);

        nuevoElemento.appendChild(botonEliminar);
        lista.appendChild(nuevoElemento);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    guardarLista();
    actualizarLista();
}

// Función para guardar la lista en localStorage
function guardarLista() {
    localStorage.setItem("amigos", JSON.stringify(amigos));
}
// Función para seleccionar un amigo al azar
function seleccionarAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = "⚠️ No hay amigos en la lista.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    resultado.innerHTML = `🎉 El amigo seleccionado es: <strong>${amigoSeleccionado}</strong>`;
}

// Cargar la lista al abrir la página
actualizarLista();
