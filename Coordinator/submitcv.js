document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const jobTitle = params.get("jobTitle");

    // Generate Random Tracking ID
    const trackingId = Math.floor(100000 + Math.random() * 900000);

    // Display Job Title and Tracking ID
    document.getElementById("jobMessage").textContent = `You have successfully applied for the job: ${jobTitle}`;
    document.getElementById("trackingId").textContent = trackingId;
});
