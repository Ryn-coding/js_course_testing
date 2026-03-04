function totalGroceryAmount() {
    let totalAmount = 0;
    let groceryItems = document.querySelectorAll('.grocery-item');

    groceryItems.forEach(item => {
        totalAmount += parseFloat(item.value) || 0;
    });

    document.getElementById('result').innerText = `The total amount is: ${totalAmount}`;
}