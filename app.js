//Definicion de variables para manipular objetos y array para guardar la lista de amigos ingresada.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");
const inputNuevoNombre = document.querySelector('#amigo');

// Funcion para agregar cada nombre de un amigo en la lista validando que no se ingresen numeros ni espacios
function agregarAmigo(){
    if (!inputAmigo.value || !isNaN(inputAmigo.value)) {
        alert("NO se permiten números NI espacios en blanco, escribe un nombre válido. por favor!!");
        return;
    }

    listaAmigos.push(inputAmigo.value);
    //ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    limpiarInput();
}

// Funcion que busca un numero al azar entre 0 y el largo de la lista, este numero es el indice de la
// posicion del nombre al azar que necesitamos.
function sortearAmigo(){
    const posAmigoGenerado = Math.floor(Math.random() * listaAmigos.length);
    const AmigoGenerado = listaAmigos[posAmigoGenerado];

    if (Array.isArray(listaAmigos) && listaAmigos.length > 0){
        ulResultado.innerHTML = `<li>El amigo secreto es: ${AmigoGenerado}</li>`;
    } else {
        alert("Debes ingresar al menos dos nombres, por favor!!");
    }

}

// Esta funcion limpia el input para que se facilite el ingreso de otro nuevo nombre
function limpiarInput(){
    inputAmigo.value = '';
    inputAmigo.setAttribute('placeholder', 'Escribe nuevo nombre');
}

