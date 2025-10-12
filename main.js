document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const offeringCards = document.querySelectorAll('.offering-card');
  const testimonialCards = document.querySelectorAll('.testimonial-card');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    } else {
      navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navHeight = navbar.offsetHeight;
          const targetPosition = targetElement.offsetTop - navHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);
        
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  offeringCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    fadeInObserver.observe(card);
  });

  testimonialCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    fadeInObserver.observe(card);
  });

  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
    });
  });
});
