// Sample valid tracking IDs and statuses
const validTrackingIds = {
    "ABC123": "accepted",
    "XYZ789": "rejected",
    "DEF456": "in-review"
};

// Elements
const trackingIdInput = document.getElementById("tracking-id");
const checkTrackingButton = document.getElementById("check-tracking");
const trackingError = document.getElementById("tracking-error");
const trackingStep1 = document.getElementById("tracking-step-1");
const trackingStep2 = document.getElementById("tracking-step-2");
const finalStatusCircle = document.getElementById("final-status");
const finalMessage = document.getElementById("final-message");
const backHomeButton = document.getElementById("back-home");

// Event Listener for Tracking Check
checkTrackingButton.addEventListener("click", () => {
    const trackingId = trackingIdInput.value.trim();
    if (validTrackingIds[trackingId]) {
        displayStatus(validTrackingIds[trackingId]);
    } else {
        trackingError.textContent = "Invalid Tracking ID. Please try again.";
        trackingError.style.display = "block";
    }
});

// Display Status Based on Tracking ID
function displayStatus(status) {
    trackingStep1.style.display = "none";
    trackingStep2.style.display = "block";

    // Set the first two steps as active
    document.getElementById("step-1").querySelector(".circle").classList.add("active");
    document.getElementById("step-2").querySelector(".circle").classList.add("active");

    // Final status
    if (status === "accepted") {
        finalStatusCircle.classList.add("accepted");
        finalMessage.textContent = "Application Accepted. Check Email.";
    } else if (status === "rejected") {
        finalStatusCircle.classList.add("rejected");
        finalMessage.textContent = "Application Rejected.";
    } else {
        finalStatusCircle.classList.add("active");
        finalMessage.textContent = "In Review";
    }
}

// Go Back Button
backHomeButton.addEventListener("click", () => {
    trackingStep1.style.display = "block";
    trackingStep2.style.display = "none";
    trackingIdInput.value = "";
    trackingError.style.display = "none";
});
