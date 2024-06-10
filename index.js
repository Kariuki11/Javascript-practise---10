//CALCULATOR PROGRAMME

const display = document.getElementById("display");

function appendToDisplay(Input){
    display.value += Input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value)
}