//add queryselectors to html ids and classes
let submit = document.querySelector('#submit');
let redChoice = document.querySelector('.red');
let blueChoice = document.querySelector('.blue');
let greenChoice = document.querySelector('.green');
let yellowChoice = document.querySelector('.yellow');
let pinkChoice = document.querySelector('.pink');
let purpleChoice = document.querySelector('.purple');
let userAnswer = document.querySelectorAll('.choice');

let firstAnswer = document.querySelector('#first-answer');
let allAnswers = document.querySelectorAll('default');
let answerContainer = document.querySelector('.answers')
// let defaultColor = document.getElementsByClassName('.default');


clickCounter = 0;


userAnswer.forEach((answer, color) => {
        answer.addEventListener('click', choiceInput);
});


function choiceInput(e){
    let colorSelection = e.target.getAttribute('data-color');
    console.log(colorSelection); 
    changeColor(colorSelection);
    clickCounter++;
    // console.log(clickCounter);
    
    // if (clickCounter < 4 ) {
    //     clickCounter++;
    //     console.log(clickCounter);
    // } else {
    //     console.log('No more tries!');
    // }
}

function changeColor(colorSelection) {
   
    // firstAnswer.classList.add(colorSelection);
}

