function hideFeedbackForm(feedbackFormContainer) {
    feedbackFormContainer.style.display = "none"
}

function showFeedbackForm(feedbackFormContainer,feedbackButton) {
    feedbackFormContainer.style.display = "block";
    feedbackFormContainer.style.position = "fixed";
    feedbackFormContainer.style.bottom = `${feedbackButton.offsetHeight + 5}px`; // 5 pixels for spacing
    feedbackFormContainer.style.left = `0px`; // aligned to left as your button
}

function toggleFeedbackForm(feedbackFormContainer,feedbackButton) {
    if(feedbackFormContainer.style.display === "none") {
        // Show the feedbackform just above the button
        showFeedbackForm(feedbackFormContainer, feedbackButton);
    } 
    else {
        // Hide the feedback form
        hideFeedbackForm(feedbackFormContainer);
    }
}

function initializeFeedbackForm() {
    // grab elements
    const feedbackButton = document.getElementById("feedback-button");
    const feedbackFormContainer = document.getElementById("feedback-form-container");

    // Initialy hide the feedback form : FeedBack Functionality code
    hideFeedbackForm(feedbackFormContainer);

    // Toogle feedback form on button click
    feedbackButton.addEventListener("click", () => {
        toggleFeedbackForm(feedbackFormContainer,feedbackButton);
    });
}
// Select all buttons with the class 'domain-button'
const domainButtons = document.querySelectorAll('.domain-button');

// Add click event listeners to each button
domainButtons.forEach((button) => {
    button.addEventListener('click', function(event) {
        // Get the text content of the clicked button
        const buttonText = event.target.textContent;

        // Redirect based on the button text
        if (buttonText === 'Software') {
            window.location.href = '../Domain Page/Domain1/domain1.html';
        } else if (buttonText === 'Hardware') {
            window.location.href = '../Domain Page/Domain2/domain2.html';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
      // Initialize feedback button and form
      initializeFeedbackForm();

    //   Initialize button click for domain choices
    initializeDomainButtons();
   }
);
