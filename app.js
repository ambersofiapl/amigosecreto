// Array para almacenar los nombres (carga desde localStorage si hay datos)
let amigos = JSON.parse(localStorage.getItem("amigos")) || [];

// Función para agregar un amigo
function agregarAmigo() {
    let inputNombre = document.getElementById("nombre");
    let nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("⚠️ Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("⚠️ Este amigo ya está en la lista.");
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

    // Guardar la lista después de actualizarla
    guardarLista();
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    if (confirm("¿Seguro que deseas eliminar a este amigo?")) {
        amigos.splice(index, 1);
        guardarLista();
        actualizarLista();
    }
}

// Función para guardar la lista en localStorage
function guardarLista() {
    localStorage.setItem("amigos", JSON.stringify(amigos));
}

// Función para seleccionar un amigo al azar
function seleccionarAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.textContent = "⚠️ No hay amigos en la lista.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    resultado.innerHTML = `🎉 El amigo seleccionado es: <strong>${amigoSeleccionado}</strong>`;
    
    // Agregar animación al resultado
    resultado.style.transition = "transform 0.3s ease-in-out";
    resultado.style.transform = "scale(1.2)";
    setTimeout(() => resultado.style.transform = "scale(1)", 300);
}

// Cargar la lista al abrir la página
actualizarLista();
