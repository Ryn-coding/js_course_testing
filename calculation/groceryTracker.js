/**
 * Grocery Tracker Application
 * This application tracks grocery items and calculates the total amount spent
 */

/**
 * Calculates the total amount from all grocery items
 * Sums up all values in grocery item input fields and displays the total
 */
function totalGroceryAmount() {
    let totalAmount = 0;
    let groceryItems = document.querySelectorAll('.grocery-item');

    groceryItems.forEach(item => {
        totalAmount += parseFloat(item.value) || 0;
    });

    document.getElementById('result').innerText = `The total amount is: ${totalAmount}`;
}


/**
 * Adds a new grocery item input field to the container
 * Creates new label, input, and line break elements dynamically
 */
function addItem() {
    let container = document.getElementById("groceryContainer");

    let label = document.createElement("label");
    label.innerText = "Enter grocery amount:";

    let input = document.createElement("input");
    input.type = "number";
    input.className = "grocery";

    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));
}


/**
 * Calculates the total from an array of amounts
 * @param {number[]} amounts - Array of grocery amounts
 * @return {number} The sum total of all amounts
 */
function groceryTracker(amounts) {
    let total = 0;

    for (let i = 0; i < amounts.length; i++) {
        total += amounts[i];
    }

    return total;
}


/**
 * Collects grocery amounts from input fields and calculates total
 * Retrieves values from grocery input fields and uses the groceryTracker function to calculate sum
 */
function calculateTotal() {
    let groceryInputs = document.getElementsByClassName("grocery");
    let amounts = [];

    for (let i = 0; i < groceryInputs.length; i++) {
        let value = parseFloat(groceryInputs[i].value) || 0;
        amounts.push(value);
    }

    let total = groceryTracker(amounts);

    document.getElementById("result").innerText =
        "Total Grocery Expenditure: $" + total;
}