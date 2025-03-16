// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let valores = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let mensajeError = document.getElementById("mensajeError");
    let nombre = input.value.trim();
    
    if (nombre) {
        valores.push(nombre);
        actualizarLista();
        input.value = "";
        mensajeError.textContent = "";
    } else {
        mensajeError.textContent = "Por favor, ingrese un nombre válido.";
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    valores.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    if (valores.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * valores.length);
        resultado.textContent = `Amigo seleccionado: ${valores[indiceAleatorio]}`;
    } else {
        resultado.textContent = "La lista está vacía. Agrega nombres antes de sortear.";
    }
}

console.log("Valores ingresados:", valores);
