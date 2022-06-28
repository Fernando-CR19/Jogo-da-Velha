const player1 = '❌'
const player2 = '⭕'
let currentPlayer = player1
let fimDoJogo = false
let pontosX = 0
let pontosO = 0

const btn = document.querySelector("#btnRestart")
const jogo = document.getElementsByClassName('espaco')
const mensagem = document.getElementsByClassName('winner')[0]
const ptsX = document.getElementById('pontosX')
const ptsO = document.getElementById('pontosO')

ptsX.innerHTML = `${player1} - ${pontosX}`
ptsO.innerHTML = `${player2} - ${pontosO}`

function jogar() {
    for (let i = 0; i < jogo.length; i++) {
        const espaco = jogo[i];

        espaco.addEventListener('click', function () {

            if (fimDoJogo) {
                return
            }

            if (espaco.innerHTML === '') {
                espaco.innerHTML = currentPlayer
                if (!checarVitoria()) {
                    checarEmpate()
                }
                mudarJogador()
            }

            pontos()

        })
    }
}

jogar()

function checarVitoria() {
    let vitoria = false

    if (jogo[0].innerHTML !== '' && jogo[0].innerHTML === jogo[1].innerHTML && jogo[1].innerHTML === jogo[2].innerHTML) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vitoria = true
    }
    if (jogo[3].innerHTML !== '' && jogo[3].innerHTML === jogo[4].innerHTML && jogo[4].innerHTML === jogo[5].innerHTML) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vitoria = true
    }
    if (jogo[6].innerHTML !== '' && jogo[6].innerHTML === jogo[7].innerHTML && jogo[7].innerHTML === jogo[8].innerHTML) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vitoria = true
    }
    if (jogo[0].innerHTML !== '' && jogo[0].innerHTML === jogo[3].innerHTML && jogo[3].innerHTML === jogo[6].innerHTML) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vitoria = true
    }
    if (jogo[1].innerHTML !== '' && jogo[1].innerHTML === jogo[4].innerHTML && jogo[4].innerHTML === jogo[7].innerHTML) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vitoria = true
    }
    if (jogo[2].innerHTML !== '' && jogo[2].innerHTML === jogo[5].innerHTML && jogo[5].innerHTML === jogo[8].innerHTML) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vitoria = true
    }
    if (jogo[0].innerHTML !== '' && jogo[0].innerHTML === jogo[4].innerHTML && jogo[4].innerHTML === jogo[8].innerHTML) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vitoria = true
    }
    if (jogo[2].innerHTML !== '' && jogo[2].innerHTML === jogo[4].innerHTML && jogo[4].innerHTML === jogo[6].innerHTML) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vitoria = true
    }

    return vitoria
}

function checarEmpate() {
    let deuEmpate = true
    for (let i = 0; i < jogo.length; i++) {
        const espaco = jogo[i];
        if (espaco.innerHTML === '') {
            deuEmpate = false
        }
    }

    if (deuEmpate) {
        mensagem.innerHTML = 'Empate'
        mudarJogador()
    }
}

function mudarJogador() {
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
}

function pontos() {
    if (mensagem.innerHTML === '❌ venceu!') {
        pontosX += 1
        ptsX.innerHTML = `${player1} - ${pontosX}`
    }

    if (mensagem.innerHTML === '⭕ venceu!') {
        pontosO += 1
        ptsO.innerHTML = `${player2} - ${pontosO}`
    }
}

btn.addEventListener("click", function () {
    for (let i = 0; i < jogo.length; i++) {
        const espaco = jogo[i];
        espaco.innerHTML = ''
        if (espaco.innerHTML !== '') {
            mudarJogador()
        }
    }

    mensagem.innerHTML = ''
    fimDoJogo = false
})
