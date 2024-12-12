document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').split('.')[0];
            
            if (targetId === '#home') {
                // First scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                
                // Then scroll to the home section if not already there
                const homeSection = document.querySelector('#home');
                if (homeSection) {
                    setTimeout(() => {
                        homeSection.scrollIntoView({ 
                            behavior: 'smooth'
                        });
                    }, 100); // Small delay to ensure smooth transition
                }
            } else {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ 
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}); 