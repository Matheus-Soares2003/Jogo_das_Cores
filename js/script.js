//Funções
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function gerarCor(){
    reiniciar()
    var resposta = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
    display.innerHTML = resposta
    sqr.forEach(quadrado => {
        let cor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`
        //Verifica se a cor ja está em alguma div;
        if (!sqr.includes(cor)){ 
            quadrado.style.background = cor
        }
    })
    sqr[getRandomInt(0, 5)].style.background = resposta
}


function verificar(quadrado){
    resultado.style.visibility = 'visible'
    if (quadrado.style.background === display.innerHTML){
        menu.style.background = display.innerHTML
        resultado.innerHTML = "ACERTOU!!"
        botao.innerHTML = "PLAY AGAIN"
        sqr.forEach(div => {
            div.style.background = display.innerHTML
            div.style.cursor = 'pointer'
        })
    } else {
        resultado.innerHTML = "ERROU!!"
        quadrado.style.background = 'transparent'
        quadrado.style.cursor = 'default'
    }
}

function reiniciar(){
    sqr.forEach(div => {
        div.style.cursor = 'pointer'
    })
    menu.style.background = "rgb(0, 175, 175)"
    botao.innerHTML = 'NOVAS CORES'
    resultado.style.visibility = 'hidden'
}

var menu = document.getElementById("menu")
var display = document.getElementById("display")
var botao = document.getElementById("botao")
var resultado = document.getElementById("resultado")
var divs = document.querySelectorAll(".cor")
var sqr = Array.from(divs)
