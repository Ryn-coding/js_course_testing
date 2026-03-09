/**
 * Product Survey Form
 * This application captures user feedback on products through a survey form
 */

// Get submit button element and attach event listener
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;


/**
 * Handles form submission and displays captured feedback
 * Collects all form values and displays them in the results section
 */
function submitFeedback() {
    // Capture feedback form values from input fields
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('userExperince').value;
    
    // Log username for debugging purposes
    console.log(username);
    
    // Display all captured feedback values in the results section
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperienceDisplay').innerHTML = experience;
    
    document.getElementById('userInfo').style.display = 'block';
}


/**
 * Event listener for Enter key to submit form
 * Allows users to submit the form by pressing the Enter key
 */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
