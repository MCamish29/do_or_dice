
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
    buttons = document.getElementsByTagName("button");
});


let d20Result = () => {
    return Math.floor(Math.random() *20)+1;
};
rollD20.addEventListener("click",() => {
    result1.innerHTML = d20Result();
});

let d12Result = () => {
    return Math.floor(Math.random() *12)+1;
};
rollD12.addEventListener("click",() => {
    result2.innerHTML = d12Result();
});
let d10Result = () => {
    return Math.floor(Math.random() *10)+1;
};
rollD10.addEventListener("click",() => {
    result3.innerHTML = d10Result();
});
let d8Result = () => {
    return Math.floor(Math.random() *8)+1;
};
rollD8.addEventListener("click",() => {
    result4.innerHTML = d8Result();
});
let d6Result = () => {
    return Math.floor(Math.random() *6)+1;
};
rollD6.addEventListener("click",() => {
    result5.innerHTML = d6Result();
});
let d4Result = () => {
    return Math.floor(Math.random() *4)+1;
};
rollD4.addEventListener("click",() => {
    result6.innerHTML = d4Result();
});