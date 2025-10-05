document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Iterate over all gallery items to show/hide them
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                // Show all if filter is 'all' OR if the item's category matches the filter
                if (filterValue === 'all' || category === filterValue) {
                    item.classList.remove('hidden');
                    // Optional: You can use a slight delay for better animation
                    // setTimeout(() => item.classList.remove('hidden'), 50); 
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});