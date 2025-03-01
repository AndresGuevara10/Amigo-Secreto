let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();
    if (amigo === "") {
        alert("Por favor ingresa un nombre");
        return;
    }
    amigos.push(amigo);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
     let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega un amigo antes de sortear");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    document.getElementById("resultado").textContent = "Amigo seleccionado: " + amigos[indice];
}