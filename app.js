// Hecho por Juan Carlos Gonzalez Morales_TWJ_electronicojcarlos@gmail.com cuenta alura J.carlos.glez.mora@gmail.com
// Version 3.0
// Resumen del proyecto: El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
    let inputElement = document.getElementById('amigo');
    let nome = inputElement.value.trim();

    if (!nome) {
        alert('No olvides, agregar un nombre');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Ya habias agr3egado a esta persona, agrega otro nombre');
        return;
    }

    amigos.push(nome);
    console.log(amigos);
    atualizarAmigos();
    limparCampo();
}


function limparCampo() {
    campo = document.querySelector('input');
    campo.value = '';
}

// Funcion atualizar lista de amigos 
function atualizarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li')
        li.textContent = amigos[i]
        lista.appendChild(li)
    }
}

//Funcion sortear amigos 
function sortearAmigo() {
    if (amigos == [] || amigos.length == 0) {
        alert('Agrege un nombre antes de sortear')
    } else {
        const index = Math.floor(Math.random() * amigos.length)
        const amigoSecreto = amigos[index]

        const ul = document.getElementById('resultado')
        ul.innerHTML = ''

        const li = document.createElement('li')
        li.textContent = `Tu amigo secreto es: ${amigoSecreto}`
        ul.appendChild(li)
        dispararConfeti();
        amigos = [];
        atualizarAmigos();
    }
}
//Fuincion que dispara confeti, una vez sorteado el amigo.
function dispararConfeti() {
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };
    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}