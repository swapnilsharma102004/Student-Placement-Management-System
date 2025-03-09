// Home Page Interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Redirect on Job Application or Internship Application Click
    const jobApplicationButton = document.querySelector('#job-application');
    const internshipApplicationButton = document.querySelector('#internship-application');

    jobApplicationButton.addEventListener('click', () => {
        window.location.href = 'jobapp.php'; // Redirect to Job Application page
    });

    internshipApplicationButton.addEventListener('click', () => {
        window.location.href = 'internship-application.html'; // Redirect to Internship Application page
    });

    // Notices Section: Dynamic Scrolling
    const noticesContainer = document.querySelector('.notices');
    let scrollInterval;

    if (noticesContainer) {
        scrollInterval = setInterval(() => {
            const firstNotice = noticesContainer.querySelector('.notice-item:first-child');
            if (firstNotice) {
                noticesContainer.appendChild(firstNotice);
            }
        }, 3000); // Change notice every 3 seconds
    }

    // Placement Statistics: Dynamic Counter Animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.textContent;
            const increment = target / 100;

            if (count < target) {
                counter.textContent = Math.ceil(count + increment);
                setTimeout(updateCount, 30);
            } else {
                counter.textContent = target;
            }
        };
        updateCount();
    });
});

// Placement Drives Section: Dynamic Hover Effects
document.addEventListener('DOMContentLoaded', () => {
    const placementCards = document.querySelectorAll('.placement-card');

    placementCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('hover-effect');
        });

        card.addEventListener('mouseout', () => {
            card.classList.remove('hover-effect');
        });
    });
});
