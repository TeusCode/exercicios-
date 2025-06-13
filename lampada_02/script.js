//Seleciona elementos:
const img = document.getElementById('imagem')
const btOnOff = document.getElementById('onOff')

let lampBreak = false

//liga/Desliga
function onOff() {
    if (lampBreak) return;

    if (btOnOff.textContent == 'Ligar') {
        ligar()
    } else {
        desligar()
    }
}

function ligar() {
    if (!lampBreak) {
        img.src = 'imagens/ligada.jpg'
        btOnOff.textContent = 'Desligar'
    }
}

function desligar() {
    if (!lampBreak) {
        img.src = 'imagens/desligada.jpg'
        btOnOff.textContent = 'Ligar'
    }
}

function quebrar() {
    img.src = 'imagens/quebrada.jpg'
    btOnOff.textContent = 'Quebrada!'
    lampBreak = true
}