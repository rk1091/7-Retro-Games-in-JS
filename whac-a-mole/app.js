const sqr = document.querySelectorAll('.square') //every class w. sqr id

const mole = document.querySelector('.mole')

const timeLeft = document.querySelector('#time-left')

const score = document.querySelector('#score')

let res = 0
let hitpos
let currentTime = 60
let timerId = null

function randomsqr() {
    sqr.forEach(square => {
        square.classList.remove('mole')
    })


    let randomSqr = sqr[Math.floor(Math.random() * 9)]
    randomSqr.classList.add('mole')
    hitpos = randomSqr.id
}

sqr.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitpos) {
            res++
            score.textContent = res
            hitpos = null
        }
    })
})

function moveMole() {
    // let timerId = null //stop a mole by button hence timer else it aint reqd
    timerId = setInterval(randomsqr, 500) //func

}
moveMole()
    // randomsqr()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countdownTimerId)
        clearInterval(timerId)
        alert('Game Over! Your Final Score is ' + res)
    }
}

let countdownTimerId = setInterval(countDown, 1000)