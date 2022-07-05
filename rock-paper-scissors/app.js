const compChoicedisplayobj = document.getElementById('comp-choice')
const userChoice = document.getElementById('user-choice')
const res = document.getElementById('result')

const possiblechoices = document.querySelectorAll('button')

let userchoose
let compChoice
let result

possiblechoices.forEach(button => button.addEventListener('click', (e) => {
    userchoose = e.target.id
    userChoice.innerHTML = userchoose
    generatecompchoice()
    getres()
}))

function generatecompchoice() {
    const randno = Math.floor(Math.random() * 3) + 1
    if (randno == 1) {
        compChoice = 'Rock'
    }
    if (randno == 2) {
        compChoice = 'Paper'
    }
    if (randno == 3) {
        compChoice = 'Scissor'
    }
    compChoicedisplayobj.innerHTML = compChoice
}

function getres() {
    if (compChoice == userchoose)
        result = 'Its a draw!'
    else if (compChoice == 'Rock' && userchoose == 'Scissor')
        result = 'You Lost'
    else if (compChoice == 'Paper' && userchoose == 'Rock')
        result = 'You Lost'
    else if (compChoice == 'Scissor' && userchoose == 'Paper')
        result = 'You Lost :/'
    else
        result = 'You Won!'
    res.innerHTML = result

}