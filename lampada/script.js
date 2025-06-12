//Seleciona elementos:
const img = document.getElementById('imagem')
const onOff = document.getElementById('onOff')


function onOff() {
    if (onOff.textContent == 'Ligar') {
        img.src = 'imagens/ligada.jpg'
    } else {
        img.src = 'imagens/desligada.jpg'
    }
}