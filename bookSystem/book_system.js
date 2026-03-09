/**
 * Book Management System
 * This application manages a collection of books with functionality to add, edit, and delete book entries.
 */

// Array to store all book objects
let books = [];

/**
 * Adds a new book to the books array
 * Retrieves book details from input fields, validates them, and creates a book object
 */
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}


/**
 * Displays all books in the DOM
 * Maps through the books array and creates HTML elements for each book with Edit and Delete buttons
 */
function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}


/**
 * Loads a book's details into the input fields for editing
 * @param {number} index - The index of the book to edit in the books array
 */
function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Remove old entry
    showbooks(); // Refresh list
}


/**
 * Deletes a book from the books array
 * @param {number} index - The index of the book to delete from the books array
 */
function deleteBook(index) {
    books.splice(index, 1);
    showbooks();
}


/**
 * Clears all input fields to reset the form
 */
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
