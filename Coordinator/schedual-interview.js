// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('scheduleInterviewForm');
    const successMessage = document.getElementById('successMessage');

    // When form is submitted
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way
        
        // Get the selected student, interview date, and time
        const studentSelect = document.getElementById('studentSelect');
        const interviewDate = document.getElementById('interviewDate').value;
        const interviewTime = document.getElementById('interviewTime').value;

        // Validation: Ensure that all fields are filled
        if (studentSelect.value === "" || !interviewDate || !interviewTime) {
            alert("Please fill in all fields");
            return;
        }

        // Simulate the scheduling process (in reality, you would save this to a database)
        console.log("Scheduling Interview...");
        console.log("Selected Student ID:", studentSelect.value);
        console.log("Interview Date:", interviewDate);
        console.log("Interview Time:", interviewTime);

        // Show success message and reset the form
        successMessage.classList.remove('hidden');
        form.reset();
    });
});
