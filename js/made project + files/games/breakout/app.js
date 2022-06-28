const grid = document.querySelector('.grid') //class created with js if it didnt exist
let score = document.querySelector('#score')

const blockWidth = 100
const blockHeight = 20
const boardWidth = 560
const boardHeight = 300
const dia = 20
let timerId
let xDir = -2
let yDir = 2
let disscore = 0

const userStart = [230, 10]
let curr = userStart

const ballStart = [270, 35]
let bcurr = ballStart
    //create block indi class

class block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
        this.topLeft = [xAxis, yAxis + blockHeight]
    }
}

//all my blocks
const blocks = [
    new block(10, 270),
    new block(120, 270),
    new block(230, 270),
    new block(340, 270),
    new block(450, 270),

    new block(10, 240),
    new block(120, 240),
    new block(230, 240),
    new block(340, 240),
    new block(450, 240),

    new block(10, 210),
    new block(120, 210),
    new block(230, 210),
    new block(340, 210),
    new block(450, 210)

]
console.log(blocks[0]);
//draw all my blocks
function addblocks() {

    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)

    }
}

addblocks()


//draw user
function drawUser() {
    user.style.left = curr[0] + 'px'
    user.style.bottom = curr[1] + 'px'
}

//add user

const user = document.createElement('div')
user.classList.add('user')
drawUser()
grid.appendChild(user)

//move user

function moveUser(e) {
    switch (e.key) {
        case 'ArrowLeft':
            if (curr[0] > 0) {
                curr[0] -= 10
                drawUser()
            }
            break;
        case 'ArrowRight':
            if (curr[0] < boardWidth - blockWidth) {
                curr[0] += 10
                drawUser()
            }
            break;
            // default:
            //     break;
    }
}

//adding start button
document.addEventListener('keydown', moveUser)
timerId = setInterval(moveBall, 30);


//draw ball
function drawBall() {
    ball.style.left = bcurr[0] + 'px'
    ball.style.bottom = bcurr[1] + 'px'
}

//add ball

const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)


//move ball
function moveBall() {
    bcurr[0] += xDir
    bcurr[1] += yDir
    drawBall()
    check()

}


//check for collisions

function changeDir() {
    if (xDir === 2 && yDir === 2) {
        yDir = -2
        return
    }
    if (xDir === -2 && yDir === -2) {
        yDir = 2
        return
    }
    if (xDir === 2 && yDir === -2) {
        xDir = -2
        return
    }
    if (xDir === -2 && yDir === 2) {
        xDir = 2
        return
    }
}


function check() {

    //block collision
    for (let i = 0; i < blocks.length; i++) {
        if (
            bcurr[0] > (blocks[i].bottomLeft[0]) &&
            bcurr[0] < (blocks[i].bottomRight[0]) &&
            (bcurr[1] + dia) > blocks[i].bottomLeft[1] &&
            bcurr[1] < blocks[i].topLeft[1]
        ) {
            const allblocks = Array.from(document.querySelectorAll('.block'))
            allblocks[i].classList.remove('block')
            blocks.splice(i, 1)
            changeDir()
            disscore++
            score.innerHTML = disscore

            //check for win
            if (blocks.length === 0) //or blocks.length===0
            {
                score.innerHTML = "u won!"
                clearInterval(timerId)
                document.removeEventListener('keydown', moveUser)

            }
        }
    }
    //user collision
    if (
        (bcurr[0] > curr[0] && bcurr[0] < curr[0] + blockWidth) &&
        (bcurr[1] > curr[1] && bcurr[1] < curr[1] + blockHeight)
    ) {
        changeDir()
    }


    //check for wall collide
    if (
        bcurr[0] >= (boardWidth - dia) ||
        bcurr[1] >= (boardHeight - dia) ||
        bcurr[0] <= 0
        // bcurr[1] 0
    ) {
        changeDir()
    }
    //check for game over
    if (bcurr[1] <= 0) {
        clearInterval(timerId)
        score.innerHTML = 'u lost'
        document.removeEventListener('keydown', moveUser)
    }
}