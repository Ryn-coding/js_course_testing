
/**
 * Main operation function
 * Demonstrates arithmetic operations (addition, multiplication, division) with debugging
 * Includes debugger statements to aid code debugging and flow visualization
 */
function performOperation() {
    console.log("performOperation() started");
    
    // Retrieve user input from HTML input elements
    let num1 = document.getElementById('input1').value;
    let num2 = document.getElementById('input2').value;
    
    console.log("Raw Input - num1:", num1, "Type:", typeof num1);
    console.log("Raw Input - num2:", num2, "Type:", typeof num2);
    

    // Assign a character value to demonstrate type differences in the debugger
    let characterValue = "X";
    debugger; // Pause here to observe the character value
    console.log("Character Value assigned:", characterValue, "Type:", typeof characterValue);
    

    // Convert string inputs to numbers for arithmetic operations
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    console.log("Converted - num1:", num1, "Type:", typeof num1);
    console.log("Converted - num2:", num2, "Type:", typeof num2);
    

    // Validate that both inputs are valid numbers after conversion
    if (!isNaN(num1) && !isNaN(num2)) {
        console.log("Valid inputs received. Processing operations...");
        

        // Execute all arithmetic operations
        let additionResult = addition(num1, num2);
        let multiplicationResult = multiply(num1, num2);
        let divisionResult = divide(num1, num2);
        
        // Display all results
        displayResult(num1, num2, additionResult, multiplicationResult, divisionResult, characterValue);
    } else {
        console.log("Invalid input detected");
        displayResult('Please enter valid numbers');
    }
}


/**
 * Performs addition operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @return {number} Sum of a and b
 */
function addition(a, b) {
    console.log("Addition function called with:", a, "+", b);
    debugger; // Pause to inspect addition operation
    let result = a + b;
    console.log("Addition result:", result);
    return result;
}


/**
 * Performs multiplication operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @return {number} Product of a and b
 */
function multiply(a, b) {
    console.log("Multiply function called with:", a, "*", b);
    debugger; // Pause to inspect multiplication operation
    let result = a * b;
    console.log("Multiplication result:", result);
    return result;
}


/**
 * Performs division operation with zero-check
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @return {number|string} Division result or error message if dividing by zero
 */
function divide(a, b) {
    console.log("Divide function called with:", a, "/", b);
    debugger; // Pause to inspect division operation
    
    if (b === 0) {
        console.log("Division by zero error detected");
        return "Undefined (Cannot divide by zero)";
    }
    
    let result = a / b;
    console.log("Division result:", result);
    return result;
}


/**
 * Displays all arithmetic operation results in the DOM
 * @param {number} num1 - First input number
 * @param {number} num2 - Second input number
 * @param {number} additionResult - Result of addition
 * @param {number} multiplicationResult - Result of multiplication
 * @param {number|string} divisionResult - Result of division
 * @param {string} charValue - Character value used for demonstration
 */
function displayResult(num1, num2, additionResult, multiplicationResult, divisionResult, charValue) {
    console.log("displayResult() called");
    
    // Display the results
    const resultElement = document.getElementById('result');
    
    // Build HTML output
    let output = "<h2>Arithmetic Operations Results:</h2>";
    output += "<p><strong>Number 1:</strong> " + num1 + "</p>";
    output += "<p><strong>Number 2:</strong> " + num2 + "</p>";
    output += "<hr>";
    output += "<p><strong>Addition (" + num1 + " + " + num2 + "):</strong> " + additionResult + "</p>";
    output += "<p><strong>Multiplication (" + num1 + " × " + num2 + "):</strong> " + multiplicationResult + "</p>";
    output += "<p><strong>Division (" + num1 + " ÷ " + num2 + "):</strong> " + divisionResult + "</p>";
    output += "<hr>";
    output += "<p><strong>Character Value Used:</strong> '" + charValue + "' (Type: " + typeof charValue + ")</p>";
    
    resultElement.innerHTML = output;
    console.log("Results displayed successfully");
}

