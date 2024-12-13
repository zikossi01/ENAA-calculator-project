const prompt = require('prompt-sync')();

// Function for addition
function add(a, b) {
    return a + b;
}

// Function for subtraction
function subtract(a, b) {
    return a - b;
}

// Function for multiplication
function multiply(a, b) {
    return a * b;
}

// Function for division
function divide(a, b) {
    if (b === 0) {
        return "Error! Division by zero.";
    }
    return a / b;
}

// Function for square root
function sqrt(a) {
    if (a < 0) {
        return "Error! Square root of a negative number is not real.";
    }
    return Math.sqrt(a);
}

// Function for power
function power(a, b) {
    return Math.pow(a, b);
}

// Function for factorial
function factorial(n) {
    if (n < 0) return "Error! Factorial of a negative number is not defined.";
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to start the calculator
function startCalculator() {
    let continueCalculation = true;

    while (continueCalculation) {
        console.log("\nChoose an operator:");
        console.log("1. +");
        console.log("2. -");
        console.log("3. *");
        console.log("4. /");
        console.log("5. √ (square root)");
        console.log("6. ^ (power)");
        console.log("7. ! (factorial)");
        console.log("8. Exit the app");

        const operatorChoice = prompt("Enter operator number: ");
        const operator = Number(operatorChoice);

        if (operator === 8) {
            console.log("Exiting...");
            continueCalculation = false;
            break;
        }

        if (operator >= 1 && operator <= 7) {
            const aInput = prompt("Enter the first number: ");
            const a = Number(aInput);

            if (isNaN(a)) {
                console.log("Invalid input! Please enter a valid number.");
                continue;
            }

            if (operator === 5) {
                const result = sqrt(a);
                console.log("Result:", result);
            } else if (operator === 7) {
                if (!Number.isInteger(a)) {
                    console.log("Error! Factorial is only defined for integers.");
                    continue;
                }
                const result = factorial(a);
                console.log("Result:", result);
            } else {
                const bInput = prompt("Enter the second number: ");
                const b = Number(bInput);

                if (isNaN(b)) {
                    console.log("Invalid input! Please enter a valid number.");
                    continue;
                }

                let result;
                switch (operator) {
                    case 1:
                        result = add(a, b);
                        break;
                    case 2:
                        result = subtract(a, b);
                        break;
                    case 3:
                        result = multiply(a, b);
                        break;
                    case 4:
                        result = divide(a, b);
                        break;
                    case 6:
                        result = power(a, b);
                        break;
                }
                console.log("Result:", result);
            }
        } else {
            console.log("Invalid operator number! Please choose a number between 1 and 7.");
        }
    }
}

startCalculator();
