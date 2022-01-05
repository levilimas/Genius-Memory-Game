let order = [];
let clickedOrder = [];
let score = 0;

// [0 = blue, 1 = red, 2 = green, 3 = yellow,  4 = purple, 5 = pink, 6 = orange, 7 = brown]

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const purple = document.querySelector('.purple');
const pink = document.querySelector('.pink');
const orange = document.querySelector('.orange');
const brown = document.querySelector('.brown');


//create random order of colors
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 8);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


// Show the next color
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}


// Checks if the order clicked by the player matches the order shown
let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Punctuation: ${score}\n You did very well!\n starting next Level`);
        nextLevel();
    }
}

// function that receives user clicks
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

// Color return function
let createColorElement = (color) => {
    if(color == 0){
        return blue;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return green;
    } else if(color == 3){
        return yellow;
    } else if(color == 4){
        return purple;
    } else if(color == 5){
        return pink;
    } else if(color == 6){
        return orange;
    } else if(color == 7){
        return brown;
    }
}

// Next level Function
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Game over Function
let gameOver = () => {
    alert(`Pontuation: ${score}\n It wasn't this time!\n Click in New Game and try again`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Play Game Function
let playGame = () => {
    alert('Welcome to Genius Memory Game!\n Click OK for Start a New Game');
    score = 0;

    nextLevel();
}

blue.onclick = () => click(0);
red.onclick = () => click(1);
green.onclick = () => click(2);
yellow.onclick = () => click(3);
purple.onclick = () => click(4);
pink.onclick = () => click(5);
orange.onclick = () => click(6);
brown.onclick = () => click(7);

// Start Game
playGame();