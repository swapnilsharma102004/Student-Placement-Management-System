// About Page: Email Interaction
document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    emailLink.addEventListener('click', () => {
        alert('You are about to send an email to our support team.');
    });
});
