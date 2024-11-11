`use strict`



function convert(degree) {
    let x;
    if (degree === "C") {

        //convert celisus to fahrenheit

        x = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(x);

    } else {
        //convert Fahrenheit to Celsius

        x = (document.getElementById("f").value - 32) * 5 / 9;
        document.getElementById("c").value = Math.round(x);

    }
} 

function myFunction() {
    window.alert("If you're happy and you know it, type Hello!");

}
    
    




// Age Verification

function verifyAge() {

    const age = parseInt(document.getElementById("ageInput").value);

    let result;
    if (age < 18) {
        result = "You are a Minor.";

    } else if (age >= 18 && age < 65) {
        result = "You are an Adult.";

    } else {
        result = "You are a Senior Citizen.";
    }

    document.getElementById("result").innerText = result;  // Display result

}


//Simple Calculator
function calculate() {
    //get the values from input firld and convert them to numbers.

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    let result;

    //Perform the chosen operation in the calculator.
    if (operation === "add"){
        result = num1 + num2;

    } else if (operation ==="substract"){
        result = num1 - num2;
    
    } else if (operation === "multiply"){
        result = num1 * num2; 

    }else if (operation === "divide") {
            result = num1 / num2;    

}  
   // display the result
   document.getElementById("result").innerText = `Result: ${result}`;

}