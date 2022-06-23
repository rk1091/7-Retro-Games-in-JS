const cardArray = [{
        name: 'rk',
        img: 'imgs/rk!.jpeg',

    },
    {
        name: 'vscode',
        img: 'imgs/vscode.png',

    },
    {
        name: 'ezio',
        img: 'imgs/ezio.png',

    },
    {
        name: 'view',
        img: 'imgs/708943.png',

    },
    {
        name: 'spectre',
        img: 'imgs/spectre.jpg',

    },
    {
        name: 'ca',
        img: 'imgs/chase-atlantic.jpg',

    },
    {
        name: 'rk',
        img: 'imgs/rk!.jpeg',

    },
    {
        name: 'vscode',
        img: 'imgs/vscode.png',

    },
    {
        name: 'ezio',
        img: 'imgs/ezio.png',

    },
    {
        name: 'view',
        img: 'imgs/708943.png',

    },
    {
        name: 'spectre',
        img: 'imgs/spectre.jpg',

    },
    {
        name: 'ca',
        img: 'imgs/chase-atlantic.jpg',

    }

]
cardArray.sort(() => 0.5 - Math.random()) //more on this

// console.log(cardArray);

const grid = document.querySelector('#grid') //div ki id aise search karta q.selector

const res = document.querySelector('#result')

let cardChosen = []
let cardsChosenIds = []
const cardsWon = []

function creatBoard() {
    for (let i = 0; i < 12; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'imgs/coder(back).jpg')
            // card.setAttribute('sizes', )
        card.style.width = '110px';
        card.style.height = '170px';
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
            // console.log(card, i);
        grid.appendChild(card)
    }
}

creatBoard()

function checkMatch() {

    const cards = document.querySelectorAll('#grid img') //lookthrough all imgs that live in div named grid (. is for class)

    const option1 = cardsChosenIds[0]
    const option2 = cardsChosenIds[1]

    console.log(cards);
    console.log('check for match!');

    if (option1 == option2) {
        console.log('u clicked d same card')
        cards[option1].setAttribute('src', 'imgs/coder(back).jpg')
        cards[option2].setAttribute('src', 'imgs/coder(back).jpg')

    }


    if (cardChosen[0] == cardChosen[1]) {
        alert('match')
        cards[option1].setAttribute('src', 'imgs/ac(match).png')
        cards[option2].setAttribute('src', 'imgs/ac(match).png')
        cards[option1].removeEventListener('click', flipCard)
        cards[option2].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)

    } else {
        cards[option1].setAttribute('src', 'imgs/coder(back).jpg')
        cards[option2].setAttribute('src', 'imgs/coder(back).jpg')
        alert('sorry try again!')
    }
    res.textContent = cardsWon.length
    cardChosen = []
    cardsChosenIds = []

    if (cardsWon.length == (cardArray.length / 2)) {
        res.textContent = 'congo! u found em all!'
    }
}

function flipCard() {

    const cardId = this.getAttribute('data-id')

    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)

    console.log(cardChosen);
    console.log(cardsChosenIds);

    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 300)
    }
}


// match remains and back wala
//, {
//     name: 'coder',
//     img: 'imgs/coder(back).png',

// }