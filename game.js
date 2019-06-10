

const words = ['pirates', 'parrot', 'treasure', 'beaches', 'sailors', 'ocean', 'hangman']

let wins,
    losses,
    curWrd,
    blanks,
    guesses,
    letters,
    isOver

// game
//image
//guesses
//guess
//letters
//wins
//losses
//newGame

const init = _ => {
    isOver = false
    curWrd = words[Math.floor(Math.random() * words.length)]
    blanks = []
    for (let i = 0; i < curWrd.length; i++) {
        blanks.push('_')
    }
    guesses = 5
    letters = []
    console.log(curWrd)

    document.querySelector('#guesses').textContent = guesses
    document.querySelector('#guess').textContent = blanks.join(' ')
    document.querySelector('#letters').textContent = letters.join(', ')
    document.querySelector('#wins').textContent = wins
    document.querySelector('#losses').textContent = losses

}

const checkEnd = _ => {
    if (curWrd === blanks.join('')) {
        isOver = true
        wins++
        document.querySelector('#wins').textContent = wins
        document.querySelector('#result').textContent = ' Congrats you won!'
    } else if (guesses <= 0) {
        isOver = true
        losses++
        document.querySelector('#losses').textContent = losses
        document.querySelector('#result').textContent = ' Boohoo you lost!'

    }
}

const verNew = letter => letters.indexOf(letter) === -1 ? checkLetter(letter) : null

const checkLetter = letter => {
    if (curWrd.indexOf(letter) !== -1) {
        for (let i = 0; i < curWrd.length; i++) {
            if (letter === curWrd[i]) {
                blanks[i] = letter
            }
        }
        document.querySelector('#guess').textContent = blanks.join(' ')

        checkEnd()
    } else {
        letters.push(letter)
        guesses--
        document.querySelector('#guesses').textContent = guesses
        document.querySelector('#letters').textContent = letters.join(', ')
        checkEnd()
    }
}

document.onkeyup = ({ key, keyCode }) =>
    keyCode >= 65 && keyCode <= 90  && !isOver ? verNew(key) : null


wins = 0
losses = 0

init()

