// Array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let inputNombre = document.getElementById("nombre"); // Corregido para coincidir con el HTML
    let nombre = inputNombre.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    actualizarLista();

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

// Función para recorrer el array y actualizar la lista en la página
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = "";

    // Recorrer el array y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento);
    }
}
