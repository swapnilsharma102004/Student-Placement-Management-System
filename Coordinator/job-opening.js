document.addEventListener('DOMContentLoaded', function () {
    const jobForm = document.getElementById('jobForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    jobForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(jobForm);

        // Perform basic validation
        const jobTitle = formData.get('job_title');
        const requiredSkills = formData.get('required_skills');
        const domain = formData.get('domain');

        if (!jobTitle || !requiredSkills || !domain) {
            showError("All fields are required.");
            return;
        }

        // Submit form via AJAX
        fetch('job-opening.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.text())
            .then(data => {
                if (data.includes("successfully")) {
                    showSuccess("Job added successfully!");
                    jobForm.reset(); // Clear the form
                } else {
                    showError("Failed to add job. Please try again.");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showError("An error occurred. Please try again.");
            });
    });

    function showSuccess(message) {
        successMessage.textContent = message;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});
