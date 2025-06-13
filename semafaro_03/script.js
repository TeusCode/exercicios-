//Seleção de elementos:
const img = document.getElementById('imagem')


function pare() {
    img.src = 'imagens/vermelho.png'
}

function atencao() {
    img.src = 'imagens/amarelo.png'
}

function prosiga() {
    img.src = 'imagens/verde.png'
}

function automatico() {
    const colors = [pare, atencao, prosiga];

    for (let i = 0; i < colors.length; i++) {
        setTimeout(function () {
            colors[i]();
        }, i * 1000); // 0ms, 3000ms, 6000ms
    }
}

