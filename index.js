
const calcButton = document.getElementById("calc");
const result = document.getElementById("resultValue");

calcButton.onclick = function() {calc()};

// invalid js on purpose to throw an error
console.log(a);

function calc() {

    const a = parseInt(document.getElementById("firstValue").value);
    const b = parseInt(document.getElementById("secondValue").value);

    const select = document.getElementById("select");
    const selectedIndex = select.selectedIndex;
    const op = select.options[selectedIndex].text;

    const randColor = document.getElementById("randColor");

    // throwing error on the console on purpose
    if(isNaN(a) === true || isNaN(b) === true){
        throw 'ERROR: input fields are not numbers';
    }

    // polluting console on purpose
    console.log('op:', op);
    console.log(a);
    console.log(b);

    let res;

    switch(op){
        case "Add":
            res = add(a,b);
            break;
        case "Subtract":
            res = subtract(a,b);
            break;
        case "Divide":
            res = divide(a,b);
            break;
        case "Multiply":
            res = multiply(a,b);
            break;
        case "Operation:":
            res = "Choose an operation!";
            break;
    }

    result.innerHTML = res;

    if(res > 9) {
        randColor.style.display = "block"

        getRandomColor().then(function (response) {
            randColor.innerHTML = response.color_name;
            randColor.style.color = response.hex_value;
        })
    }
    else if (res < 10) {
        randColor.innerHTML = ""
    }
}

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function divide(a,b) {
    return a / b;
}

function multiply(a,b) {
    return a * b;
}

// this uses random-data-api (free public api) to get a json response
async function getRandomColor() {
    const response = await fetch("https://random-data-api.com/api/color/random_color");

    const parsedResponse = await response.json();

    return parsedResponse;
}