function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = multiply(num1, num2);
        
        // Display the result
        displayResult(result);

        
        // Perform the operation
        let result_addition = additionner(num1, num2);
        
        // Display the result
        displayResultAddition(result_addition);


    } else {
            displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function additionner(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a + b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Résultat multiplication: ${result}`;
}

function displayResultAddition(result_addition) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent += ` et Résultat addition: ${result_addition}`;
}