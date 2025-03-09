document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Sample credentials for students and coordinators
    const studentCredentials = {
        id: 'AIT22BECS267',
        password: '123456',
    };

    const coordinatorCredentials = {
        id: 'coordinator123',
        password: 'coordinatorpass',
    };

    // Get entered values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials
    if (username === studentCredentials.id && password === studentCredentials.password) {
        // Redirect to student home page
        window.location.href = 'home.html';
    } else if (username === coordinatorCredentials.id && password === coordinatorCredentials.password) {
        // Redirect to coordinator page
        window.location.href = 'coordinator.html';
    } else {
        // Show error message for invalid credentials
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.innerText = 'Invalid Username or Password';
        errorMessage.style.color = 'red';
    }
});
