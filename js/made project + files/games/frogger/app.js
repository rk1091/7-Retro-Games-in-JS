const timeLeft = document.querySelector('#time-left')
const result = document.querySelector('#result')
const btn = document.querySelector('#start-pause-btn')
const sqr = document.querySelectorAll('.grid div')

let curr = 76
const width = 9

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

document.addEventListener('keyup', moveFrog)