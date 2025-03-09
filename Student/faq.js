// FAQ Accordion Interactivity
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            // Close other open accordions
            headers.forEach(item => {
                if (item !== header) {
                    item.classList.remove('active');
                    item.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle the clicked accordion
            const content = header.nextElementSibling;
            header.classList.toggle('active');
            content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
        });
    });
});
