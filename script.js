const player1 = 'X'
const player2 = 'O'
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
            }

            if (!checarVitoria()) {
                checarEmpate()
            }

            mudarJogador()

            pontos()

        })
    }
}

jogar()

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
    }
}


function checarVitoria() {
    let vencedor = false

    if (jogo[0].innerHTML === currentPlayer && jogo[1].innerHTML === currentPlayer && jogo[2].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vencedor = true
    }
    if (jogo[3].innerHTML === currentPlayer && jogo[4].innerHTML === currentPlayer && jogo[5].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vencedor = true
    }
    if (jogo[6].innerHTML === currentPlayer && jogo[7].innerHTML === currentPlayer && jogo[8].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vencedor = true
    }
    if (jogo[0].innerHTML === currentPlayer && jogo[3].innerHTML === currentPlayer && jogo[6].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vencedor = true
    }
    if (jogo[1].innerHTML === currentPlayer && jogo[4].innerHTML === currentPlayer && jogo[7].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vencedor = true
    }
    if (jogo[2].innerHTML === currentPlayer && jogo[5].innerHTML === currentPlayer && jogo[8].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vencedor = true
    }
    if (jogo[0].innerHTML === currentPlayer && jogo[4].innerHTML === currentPlayer && jogo[8].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vencedor = true
    }
    if (jogo[2].innerHTML === currentPlayer && jogo[4].innerHTML === currentPlayer && jogo[6].innerHTML === currentPlayer) {
        mensagem.innerHTML = `${currentPlayer} venceu!`
        fimDoJogo = true
        vencedor = true
    }
    return vencedor
}

function mudarJogador() {
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
}

btn.addEventListener("click", function () {
    for (let i = 0; i < jogo.length; i++) {
        const espaco = jogo[i];
        espaco.innerHTML = ''        
    }
    
    mensagem.innerHTML = ''
    fimDoJogo = false
    mudarJogador()
})

function pontos() {
    if (mensagem.innerHTML === 'X venceu!') {
        pontosX += 1
        ptsX.innerHTML = `${player1} - ${pontosX}`
    }

    if (mensagem.innerHTML === 'O venceu!') {
        pontosO += 1
        ptsO.innerHTML = `${player2} - ${pontosO}`
    }
}