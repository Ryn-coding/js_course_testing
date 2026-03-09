/**
 * Typing Speed Test Application
 * This application measures typing speed in Words Per Minute (WPM) and character count
 */

// Test sentence and timer variables
let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;


/**
 * Initializes the typing test
 * Sets up the test text, clears previous results, and starts the timer
 */
function startTest() {
    // Display the target text that user needs to type
    document.getElementById("inputText").value = testText;

    // Reset user input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById("output").innerHTML = "";

    // Start timer
    startTime = new Date().getTime();
}


/**
 * Ends the typing test and calculates results
 * Calculates WPM, character count, and displays comprehensive test results
 */
function endTest() {
    endTime = new Date().getTime();

    // Disable the input field to prevent further typing
    document.getElementById("userInput").readOnly = true;


    // Calculate elapsed time and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Calculate total text length
    var textLength = userTypedText.length;


    // Display all test results including WPM, character count, and time elapsed
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>" +
        "<p>Total Characters: " + textLength + "</p>";
}

