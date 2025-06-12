//Seleciona elementos:
const img = document.getElementById('imagem')

let estado = 'desligado'


function ligar() {
    if (estado == 'desligado') {
        img.src = "imagens/ligada.jpg"
        estado = 'ligado'
    }
}

function desligar() {
    if (estado == 'ligado') {
        img.src = "imagens/desligada.jpg"
        estado = 'desligado'
    }
}
function quebrar() {
    img.src = "imagens/quebrada.jpg"
    estado = 'quebrado'
}