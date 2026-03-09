/**
 * Instagram Followers Counter
 * This application tracks followers and displays milestone alerts
 */

// Variable to store the current follower count
let count = 0;


/**
 * Updates the follower count display in the DOM
 */
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Display the count in the HTML
}

/**
 * Checks if count reaches milestone values and displays congratulatory messages
 */
function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

/**
 * Increments the follower count by 1 and updates display
 */
function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}


/**
 * Resets the follower count to 0
 */
function resetCount() {
    count = 0;              // Reset count to 0
    displayCount();         // Update display
    alert("Followers count has been reset!");
}