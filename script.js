const player1 = 'X'
const player2 = 'O'
let currentPlayer = player1
const btn = document.querySelector("#btnRefresh")
let fimDoJogo = false

const jogo = document.getElementsByClassName('espaco')
const mensagem = document.getElementsByClassName('winner')[0]


function jogar() {
    for (let i = 0; i < jogo.length; i++) {
        const espaco = jogo[i];

        espaco.addEventListener('click', function () {

            if (fimDoJogo) {
                return
            }

            if (espaco.innerHTML === '') {
                espaco.innerHTML = currentPlayer
                espaco.style.cursor = 'not-allowed'
            }

            checarVitoria()

            chegarEmpate()

            mudarJogador()

        })
    }
}

jogar()

function mudarJogador() {
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
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

btn.addEventListener("click", function () {
    location.reload();
})
