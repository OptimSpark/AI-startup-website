        // Simple animation for feature cards on scroll
        document.addEventListener('DOMContentLoaded', function() {
         const featureCards = document.querySelectorAll('.feature-card');
         
         const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
           if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
           }
          });
         }, { threshold: 0.1 });
         
         featureCards.forEach(card => {
          card.style.opacity = 0;
          card.style.transform = 'translateY(20px)';
          card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
          observer.observe(card);
         });
         
         // Add floating effect to hero elements
         const heroElements = document.querySelectorAll('.hero-content, .hero-image');
         heroElements.forEach(el => {
          el.classList.add('floating');
         });
        });