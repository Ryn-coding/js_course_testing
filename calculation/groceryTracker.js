function totalGroceryAmount() {
    let totalAmount = 0;
    let groceryItems = document.querySelectorAll('.grocery-item');

    groceryItems.forEach(item => {
        totalAmount += parseFloat(item.value) || 0;
    });

    document.getElementById('result').innerText = `The total amount is: ${totalAmount}`;
}

// Function to add new grocery input field
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

// Function to calculate total
function groceryTracker(amounts) {
    let total = 0;

    for (let i = 0; i < amounts.length; i++) {
        total += amounts[i];
    }

    return total;
}

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