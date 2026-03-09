/**
 * Rectangle Area Calculator
 * This application calculates the area of a rectangle given length and width
 */

// Variables to store rectangle dimensions
let length;
let width;

/**
 * Calculates the area of a rectangle
 * Retrieves length and width from input fields and displays the calculated area
 */
function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
   
   let area = length * width;
   document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

