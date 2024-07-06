
let d20 = document.getElementById("result1");
let rollD20 = document.getElementById("roll1");

let d20Result = () => {
    return Math.floor(Math.random() *20)+1;
};
rollD20.addEventListener("click",() => {
    result1.innerHTML = d20Result();
});



let d12 = document.getElementById("result2");
let rollD12 = document.getElementById("roll2");

let d12Result = () => {
    return Math.floor(Math.random() *12)+1;
};
rollD12.addEventListener("click",() => {
    result2.innerHTML = d12Result();
});