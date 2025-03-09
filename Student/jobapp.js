document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(this);

    fetch('submit_application.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show success or error message
    })
    .catch(error => {
        console.error('Error:', error);
    });
});