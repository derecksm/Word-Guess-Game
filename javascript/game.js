// Array of Words

let wordArray = ['treasure', 'parrot', 'ahoy', 'sparrow']


// Random Word Generator 
let word = wordArray[Math.floor(Math.random() * wordArray.length)]
//Display Under Brackets
let rightWord = [];
let wrongWord = [];
let answerArray = [];

// Dom 

let docAnswer = document.querySelector('#answer');
let docRightWord = document.querySelector('#rightWord')
let docWrongWord = document.querySelector('#wrongWord')




let underScore = () => {
    for (var i = 0; i < word.length; i++) {
        answerArray.push('_');

    }
    return answerArray;
    console.log(answerArray)
}
console.log(word)
// Get Users Guess 
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
    console.log(keyword)
    // Users guess is right
    if (word.indexOf(keyword) > -1) {
        // Add to rightWord Array 
        rightWord.push(keyword);
        // Switch underscore with letter
        answerArray[word.indexOf(keyword)] = keyword;

        docAnswer[0].innerHTML = answerArray.join('');
        docRightWord[0].innerHTML = rightWord;

        if (answerArray.join('') = word) {
            alert('You Win')
        }
    }
    else {
        docwrongWord.push(keyword);
        docWrongWord[0].innerHTML = wrongWord;
        console.log(wrongWord)

        let sample = document.createElement('p')
        sample = 


    }
});

[0].innerHTML = underScore().join('');
