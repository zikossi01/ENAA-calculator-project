const prompt = require('prompt-sync')();

function factorial(n) {
    if (n < 0) return "Error! Factorial of a negative number is not defined.";
  
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculate(a, b, operator) {
    a = Number(a);
    if (b !== null) b = Number(b);

    switch (operator) {
        case 1: 
            return a + b;
        case 2: 
            return a - b;
        case 3: 
            return a * b;
        case 4: 
            if (b === 0) {
                return "Error! Division by zero";
            } else {
                return a / b;
            }
        case 5: 
            if (a < 0) {
                return "Error! Square root of a negative number is not real.";
            } else {
                return Math.sqrt(a);
            }
        case 6: 
            return Math.pow(a, b);
        case 7: 
            if (!Number.isInteger(a)) {
                return "Error! Factorial is only defined for integers.";
            }
            return factorial(a);
        default:
            return "Invalid operator!";
    }
}

function startCalculator() {
    let continueCalculation = true;

    while (continueCalculation) {
        const a = prompt("Enter a: ");

        if (isNaN(a)) {
            console.log("Invalid input! Please insert a number.");
            continue;
        }

        console.log("Choose an operator:");
        console.log("1. +");
        console.log("2. -");
        console.log("3. *");
        console.log("4. /");
        console.log("5. v (square root)");
        console.log("6. ^ (power)");
        console.log("7. ! (factorial)");

        const operatorChoice = prompt("Enter operator number: ");
        const operator = Number(operatorChoice);

        if (operator >= 1 && operator <= 7) {
            if (operator === 5 || operator === 7) {
                const result = calculate(Number(a), null, operator);
                console.log("Result:", result);
            } else {
                const b = prompt("Enter b: ");
                if (isNaN(b)) {
                    console.log("Invalid input! Please enter a valid number.");
                    continue;
                }
                const result = calculate(Number(a), Number(b), operator);
                console.log("Result:", result);
            }
        } else {
            console.log("Invalid operator number! Please choose a number between 1 and 7.");
        }

        const continueResponse = prompt("Do you want to perform another calculation (y/n): ").toLowerCase();
        if (continueResponse !== 'y') {
            continueCalculation = false;
            console.log("Goodbye!");
        }
    }
}

startCalculator();
