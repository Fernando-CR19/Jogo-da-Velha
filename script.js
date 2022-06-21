const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1
let fimDoJogo = false
let numX = 0
let numO = 0

const btn = document.querySelector("#resetarJogo")
const jogo = document.getElementsByClassName('espaco')
const mensagem = document.getElementsByClassName('winner')[0]
const ptsX = document.getElementById('ptsX')
const ptsO = document.getElementById('ptsO')

ptsX.innerHTML = `X - ${numX}`
ptsO.innerHTML = `O - ${numO}`

function jogar() {
    for (let i = 0; i < jogo.length; i++) {
        const espaco = jogo[i];

        espaco.addEventListener('click', function () {

            if (fimDoJogo) {
                return
            }

            if (espaco.innerHTML === '') {
                espaco.innerHTML = currentPlayer
            }

            chegarEmpate()

            checarVitoria()

            mudarJogador()

            pontos()

        })
    }
}

jogar()

function chegarEmpate() {
    if (jogo[0].innerHTML !== '' &&
        jogo[1].innerHTML !== '' &&
        jogo[3].innerHTML !== '' &&
        jogo[4].innerHTML !== '' &&
        jogo[5].innerHTML !== '' &&
        jogo[6].innerHTML !== '' &&
        jogo[7].innerHTML !== '' &&
        jogo[8].innerHTML !== '') {
        mensagem.innerHTML = 'Empate'
    }
}

function checarVitoria() {
    if (jogo[0].innerHTML === currentPlayer && jogo[1].innerHTML === currentPlayer && jogo[2].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
    }
    if (jogo[3].innerHTML === currentPlayer && jogo[4].innerHTML === currentPlayer && jogo[5].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
    }
    if (jogo[6].innerHTML === currentPlayer && jogo[7].innerHTML === currentPlayer && jogo[8].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
    }
    if (jogo[0].innerHTML === currentPlayer && jogo[3].innerHTML === currentPlayer && jogo[6].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
    }
    if (jogo[1].innerHTML === currentPlayer && jogo[4].innerHTML === currentPlayer && jogo[7].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
    }
    if (jogo[2].innerHTML === currentPlayer && jogo[5].innerHTML === currentPlayer && jogo[8].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
    }
    if (jogo[0].innerHTML === currentPlayer && jogo[4].innerHTML === currentPlayer && jogo[8].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
    }
    if (jogo[2].innerHTML === currentPlayer && jogo[4].innerHTML === currentPlayer && jogo[6].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
    }
}

function mudarJogador() {
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
}

btn.addEventListener("click", function () {
    jogo[0].innerHTML = ''
    jogo[1].innerHTML = ''
    jogo[2].innerHTML = ''
    jogo[3].innerHTML = ''
    jogo[4].innerHTML = ''
    jogo[5].innerHTML = ''
    jogo[6].innerHTML = ''
    jogo[7].innerHTML = ''
    jogo[8].innerHTML = ''
    mensagem.innerHTML = ''
    fimDoJogo = false
    espaco.style.cursor = 'pointer'
})

function pontos() {
    if (mensagem.innerHTML === `X venceu!`) {
        numX = numX + 1
        ptsX.innerHTML = `X - ${numX}`
        mudarJogador()
    }

    if (mensagem.innerHTML === `O venceu!`) {
        numO = numO + 1
        ptsO.innerHTML = `O - ${numO}`
        mudarJogador()
    }
}
