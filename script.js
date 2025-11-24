 // Script pour le menu hamburger
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('navLinks');
            
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
            
            // Animation des éléments au défilement
            const animateOnScroll = () => {
                const elements = document.querySelectorAll('.cardImage, .courseCard, .feature-item');
                
                elements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('animate-in');
                    }
                });
            };
            
            // Initialisation
            animateOnScroll();
            
            // Écouteur d'événement pour le défilement
            window.addEventListener('scroll', animateOnScroll);
        });