let amigos = []
function agregarAmigo() {
    //1. Capturar el valor del campo de entrada
    const input = document.getElementById ('amigo');
    const nombre = input.value.trim (); //quitamos espacios extra

    //2. Validar que no este vacio
    if (nombre === '') {
        alert ('Por favor, inserte un nombre');
        return;
    }
    //3. Agregar el nombre al array
    amigos.push (nombre);

    //4. Limpiar el nombre de entrada
    input.value = '';

    //5. Llamar la funcion para mostrar la lista actualizada
    mostrarAmigos();
  
}
function mostrarAmigos () {
    //obtener el elemento de la lista
    const lista = document.getElementById ('listaAmigos');
    //limpiar la lista existente
    lista.innerHTML = '';
    //Recorrer el arreglo de amigos y agregar cada uno como <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = `<li>${amigos[i]}</li>`;
        lista.innerHTML += li;
    }
}

//funcion para sortear un amigo secreto
function sortearAmigo () {
    //Validar que haya amigos disponibles
    if (amigos.length === 0){
        alert ('No hay amigos para sortear.');
        return;
    }

    //Generar un indice aleatorio
    const indice = Math.floor (Math.random () * amigos.length);
    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indice];
    //Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}