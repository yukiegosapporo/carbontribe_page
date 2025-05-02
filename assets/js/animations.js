// Section Reveal Animation Handler
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100
    });
  }
  
  // Initialize section reveal observer
  const revealSections = document.querySelectorAll('.section-reveal');
  
  if (revealSections.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    revealSections.forEach(section => {
      revealObserver.observe(section);
    });
  }
  
  // Typewriter effect for hero section
  const typewriterElement = document.querySelector('.typewriter-text');
  if (typewriterElement) {
    const words = JSON.parse(typewriterElement.getAttribute('data-words') || '[]');
    
    if (words.length > 0) {
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typeSpeed = 100;
      
      function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
          typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
          typeSpeed = 50;
        } else {
          typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
          typeSpeed = 150;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          typeSpeed = 1500; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
        
        setTimeout(type, typeSpeed);
      }
      
      type();
    }
  }
  
  // Add scroll-based parallax effect to hero section
  window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.section-hero');
    if (heroSection) {
      const scrollY = window.scrollY;
      const parallaxElements = heroSection.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax-speed') || 0.2;
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }
  });
  
  // Staggered elements animation
  const staggerContainers = document.querySelectorAll('.stagger-container');
  
  if (staggerContainers.length > 0) {
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.stagger-item');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animated');
            }, 100 * index);
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    staggerContainers.forEach(container => {
      staggerObserver.observe(container);
    });
  }
});