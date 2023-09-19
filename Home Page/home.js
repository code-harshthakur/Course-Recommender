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
function handleDomainChoice(choice){
    // store the choice so that we can use it in next page
    localStorage.setItem("domain",choice);
    window.location.href = "./Domain Page/domain.html";
}

function initializeDomainButtons() {
    const buttons = document.querySelectorAll(".domain-button");

    buttons.forEach((button) => {
         button.addEventListener("click", (e) => {
             handleDomainChoice(e.target.textContent.toLowerCase());
         });
    });
}

document.addEventListener("DOMContentLoaded", () => {
      // Initialize feedback button and form
      initializeFeedbackForm();

    //   Initialize button click for domain choices
    initializeDomainButtons();
   }
);
