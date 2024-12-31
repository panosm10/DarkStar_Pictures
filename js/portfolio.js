// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    offset: 100,
    once: true
});

document.addEventListener('DOMContentLoaded', function() {
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Video Modal
    const modal = document.querySelector('.video-modal');
    const modalContent = document.querySelector('.video-container');
    const closeModal = document.querySelector('.close-modal');
    const portfolioThumbnails = document.querySelectorAll('.portfolio-item-inner');

    // Sample video URLs (replace with actual video URLs)
    const videoUrls = {
        'Brand Campaign': 'https://www.youtube.com/embed/your-video-id-1',
        'Urban Stories': 'https://www.youtube.com/embed/your-video-id-2',
        'The Journey': 'https://www.youtube.com/embed/your-video-id-3'
    };

    portfolioThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const projectTitle = thumbnail.querySelector('h3').textContent;
            const videoUrl = videoUrls[projectTitle];
            
            if (videoUrl) {
                modalContent.innerHTML = `
                    <iframe src="${videoUrl}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>`;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        modalContent.innerHTML = '';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalContent.innerHTML = '';
            document.body.style.overflow = 'auto';
        }
    });
});
