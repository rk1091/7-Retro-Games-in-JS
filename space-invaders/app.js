const grid = document.querySelector('.grid')
const res = document.querySelector('.result')
let currShoot = 202
let width = 15
let direction = 1
let invadersId
let goingRight = true
let alienRemoved = []
let results = 0

for (let i = 0; i < 225; i++) {
    const sqr = document.createElement('div')
    grid.appendChild(sqr)
}

const sqr = Array.from(document.querySelectorAll('.grid div'))

const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
]

function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if (!alienRemoved.includes(i))
            sqr[alienInvaders[i]].classList.add('invader')
    }
}

draw()

function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        sqr[alienInvaders[i]].classList.remove('invader')
    }
}


sqr[currShoot].classList.add('shooter')

function moveShooter(e) {

    sqr[currShoot].classList.remove('shooter')
    switch (e.key) {
        case 'ArrowLeft':
            if (currShoot % width !== 0) currShoot -= 1
            break;
        case 'ArrowRight':
            if (currShoot % width < width - 1) currShoot += 1
            break;

    }
    sqr[currShoot].classList.add('shooter')


}

document.addEventListener('keydown', moveShooter)

function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1
    remove()

    if (rightEdge && goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width + 1
            direction = -1
            goingRight = false
        }
    }

    if (leftEdge && !goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width - 1
            direction = 1
            goingRight = true
        }
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction
    }
    draw()

    if (sqr[currShoot].classList.contains('invader', 'shooter')) {
        res.innerHTML = 'GAME OVER'
        clearInterval(invadersId)
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        if (alienInvaders[i] > sqr.length) {
            res.innerHTML = 'GAME OVER'
            clearInterval(invadersId)
        }
    }
    if (alienRemoved.length === alienInvaders.length) {
        res.innerHTML = 'YOU WIN'
        clearInterval(invadersId)
        document.removeEventListener('keydown', shoot)
        document.removeEventListener('keydown', moveShooter)
    }

}

invadersId = setInterval(moveInvaders, 500)

function shoot(e) {
    let laserId
    let currlaser = currShoot

    function movelaser() {
        sqr[currlaser].classList.remove('laser')
        currlaser -= width
        sqr[currlaser].classList.add('laser')

        if (sqr[currlaser].classList.contains('invader')) {
            sqr[currlaser].classList.remove('laser')
            sqr[currlaser].classList.remove('invader')
            sqr[currlaser].classList.add('boom')

            setInterval(() => sqr[currlaser].classList.remove('boom'), 300)
            clearInterval(laserId)

            const alienRemoval = alienInvaders.indexOf(currlaser)
            alienRemoved.push(alienRemoval)
            results++
            res.innerHTML = results

        }
    }
    switch (e.key) {
        case 'ArrowUp':
            laserId = setInterval(movelaser, 100)
    }
}

document.addEventListener('keydown', shoot)