document.addEventListener('DOMContentLoaded', () => {

    const sqr = document.querySelectorAll('.grid div')
    const res = document.querySelector('#result')
    const displaycurrplay = document.querySelector('#currplay')
    let curr = 1

    //check for wins array


    for (let i = 0; i < sqr.length; i++) {
        sqr[i].onclick = () => {
            //if sqr below ur curr sqr is taken u can go on top of it
            // alert('You hv clicked sqr' + i)
            if (sqr[i + 7].classList.contains('taken')) {
                if (curr == 1) {
                    sqr[i].classList.add('taken')
                    sqr[i].classList.add('player-one')
                    curr = 2
                    displaycurrplay.innerHTML = curr
                } else if (curr == 2) {
                    sqr[i].classList.add('taken')
                    sqr[i].classList.add('player-two')
                    curr = 1
                    displaycurrplay.innerHTML = curr
                }
            } else alert('You cant go here')
        }
    }
})