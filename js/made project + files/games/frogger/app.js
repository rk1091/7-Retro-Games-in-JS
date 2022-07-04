const timeLeft = document.querySelector('#time-left')
const result = document.querySelector('#result')
const btn = document.querySelector('#start-pause-btn')
const sqr = document.querySelectorAll('.grid div')
const logLeft = document.querySelectorAll('.log-left')
const logRight = document.querySelectorAll('.log-right')
const carLeft = document.querySelectorAll('.car-left')
const carRight = document.querySelectorAll('.car-right')

let curr = 76
const width = 9
let timerId
let time = 20
let outcomeTIme


function moveFrog(e) {

    sqr[curr].classList.remove('frog')
    switch (e.key) {
        case 'ArrowLeft':
            if (curr % width !== 0)
                curr -= 1
            break
        case 'ArrowRight':
            if (curr % width < width - 1)
                curr += 1
            break
        case 'ArrowUp':
            if (curr - width >= 0)
                curr -= width;
            break
        case 'ArrowDown':
            if (curr + width < width * width)
                curr += width;
            break


    }

    sqr[curr].classList.add('frog')
}


function autoMoveElements() {
    time--
    timeLeft.textContent = time
    logLeft.forEach(logLeft => moveLogLeft(logLeft))
    logRight.forEach(logRight => moveLogRight(logRight))
    carLeft.forEach(carLeft => movecarLeft(carLeft))
    carRight.forEach(carRight => movecarRight(carRight))

}

function checkOutcomes() {
    loss()
    win()

}

autoMoveElements

function moveLogLeft(logLeft) {
    switch (true) {
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break;
        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break;
        case logLeft.classList.contains('l3'):
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break;
        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break;
        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break;
    }
}

function moveLogRight(logRight) {
    switch (true) {
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break;
        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break;
        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break;
        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break;
        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break;
    }
}



function movecarLeft(carLeft) {
    switch (true) {
        case carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1')
            carLeft.classList.add('c2')
            break;
        case carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2')
            carLeft.classList.add('c3')
            break;
        case carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3')
            carLeft.classList.add('c1')
            break;

    }
}

function movecarRight(carRight) {
    switch (true) {
        case carRight.classList.contains('c1'):
            carRight.classList.remove('c1')
            carRight.classList.add('c3')
            break;
        case carRight.classList.contains('c2'):
            carRight.classList.remove('c2')
            carRight.classList.add('c1')
            break;
        case carRight.classList.contains('c3'):
            carRight.classList.remove('c3')
            carRight.classList.add('c2')
            break;

    }
}

function loss() {
    if (
        sqr[curr].classList.contains('c1') ||
        sqr[curr].classList.contains('l4') ||
        sqr[curr].classList.contains('l5') ||
        time <= 0
    ) {
        result.textContent = 'you lost!'
        clearInterval(timerId)
        clearInterval(outcomeTIme)
        sqr[curr].classList.remove('frog')
        document.removeEventListener('keyup', moveFrog)
    }
}

function win() {
    if (sqr[curr].classList.contains('ending-block')) {
        result.textContent = 'you win!'
        clearInterval(timerId)
        clearInterval(outcomeTIme)
            // sqr[curr].classList.remove('frog')
        document.removeEventListener('keyup', moveFrog)
    }
}
btn.addEventListener('click', () => {
    if (timerId) {
        clearInterval(timerId)
        clearInterval(outcomeTIme)
        outcomeTIme = null
        timerId = null
        document.removeEventListener('keyup', moveFrog)
    } else {
        outcomeTIme = setInterval(checkOutcomes, 500)
        timerId = setInterval(autoMoveElements, 1000)
        document.addEventListener('keyup', moveFrog)
    }
})