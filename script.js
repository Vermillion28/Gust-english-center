// Script pour le menu hamburger et initialisation AOS
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation de AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Fermer le menu hamburger quand on clique sur un lien
    const navLinksItems = document.querySelectorAll('.navLinks a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Animation des éléments au défilement (backup si AOS ne fonctionne pas)
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