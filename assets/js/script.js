
/**
 * Calling DOM elements by their ids
 */
let d20 = document.getElementById("result1");
let rollD20 = document.getElementById("roll1");
let d12 = document.getElementById("result2");
let rollD12 = document.getElementById("roll2");
let d10 = document.getElementById("result3");
let rollD10 = document.getElementById("roll3");
let d8 = document.getElementById("result4");
let rollD8 = document.getElementById("roll4");
let d6 = document.getElementById("result5");
let rollD6 = document.getElementById("roll5");
let d4 = document.getElementById("result6");
let rollD4 = document.getElementById("roll6");


/**Adding DOM content loaded and event listners for buttons */
document.addEventListener("DOMContentLoaded", function(){ 
    let buttons = document.getElementsByClassName("btn")
    for (let i = 0; i < buttons.length; i++)
        {
        buttons[i].innerHTML="roll";
    };
});

//Dice roll object of key value pairs that holds the multipoliers of each dice
let diceRoll = {
    "d20": 20,
    "d12": 12,
    "d10": 10,
    "d8": 8,
    "d6": 6,
    "d4": 4,
}

/**
 * 
 * This function takes a string of the dice roll you want
 * it then sets the multiplier based on the input by checking the diceRollobject
 * @param {string} dice
 * @returns integer
 */

function rollDice(dice){
    let multiplier =1;
    if(dice === "d20"){
        multiplier = diceRoll.d20;    
    }
    else if (dice = "d12"){
        multiplier = diceRoll.d12;
    }
    else if (dice = "d10"){
        multiplier = diceRoll.d10;
    }
    else if (dice = "d8"){
        multiplier = diceRoll.d8;
    }
    else if (dice = "d6"){
        multiplier = diceRoll.d6;
    }
        else if (dice = "d4"){
        multiplier = diceRoll.d4;
    }
    return Math.floor(Math.random() * multiplier) +1;
}


rollD20.addEventListener("click",() => {
    let result =rollDice("d20");
    result1.innerHTML = result;
});
rollD12.addEventListener("click",() => {
    let result =rollDice("d12");
    result2.innerHTML = result;
});
rollD10.addEventListener("click",() => {
    let result =rollDice("d10");
    result3.innerHTML = result;
});

rollD8.addEventListener("click",() => {
    let result =rollDice("d8");
    result4.innerHTML = result;
});

rollD6.addEventListener("click",() => {
    let result =rollDice("d6");
    result5.innerHTML = result;
});
rollD4.addEventListener("click",() => {
    let result =rollDice("d4");
    result6.innerHTML = result;
});


/**
 * This code will return user to home page
 */
function returnHome(){
    window.location.href="../index.html"
};