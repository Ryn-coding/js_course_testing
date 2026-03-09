/**
 * Colorful Memory Game
 * A matching game where players flip cards to find color pairs within a time limit
 */

// Array of colors for the memory game pairs
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];

// Game state variables
let cards = shuffle(colors.concat(colors));  // Shuffled card array
let selectedCards = [];                        // Currently selected cards for comparison
let score = 0;                                 // Player's current score
let timeLeft = 30;                             // Remaining time in seconds
let gameInterval;                              // Timer interval reference


// Get DOM elements for the game interface
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');


/**
 * Generates card elements dynamically and adds them to the game container
 * Each card displays a question mark and stores its color in the data attribute
 */
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}


/**
 * Shuffles an array using the Fisher-Yates algorithm
 * @param {array} array - The array to shuffle
 * @return {array} The shuffled array
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


/**
 * Handles card click events during gameplay
 * Flips cards and checks for matches
 * @param {event} event - The click event object
 */
function handleCardClick(event) {
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}


/**
 * Checks if the two selected cards match
 * Updates score if matched, otherwise flips them back
 */
function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}


/**
 * Initializes and starts a new game
 * Resets score, generates cards, and starts the timer
 */
function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; // Reset score to zero
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}


/**
 * Manages the game timer countdown
 * Decrements time and ends game when time reaches zero
 * @param {number} timeLeft - Initial time in seconds
 */
function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}


// Attach event listener to start button
startbtn.addEventListener('click', startGame);
