document.addEventListener('DOMContentLoaded', function() {
    // Hide all h1 elements except the first one
    const headings = document.querySelectorAll('.hero h1');
    headings.forEach((heading, index) => {
        if (index !== 0) {
            heading.classList.remove('active'); // Hide all except first
        } else {
            heading.classList.add('active'); // Show first
        }
    });

    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', function() {
            // Hide all h1 elements
            headings.forEach(h => {
                h.classList.remove('active');
            });

            // Get target ID from clicked item
            const targetId = this.getAttribute('data-target');
            
            // Show the targeted h1 element
            const targetHeading = document.querySelector(targetId);
            if (targetHeading) {
                targetHeading.classList.add('active');
            }
        });
    });
});