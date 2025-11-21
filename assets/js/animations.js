// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 100
        });
    }

    // Header Scroll Effect
    initHeaderScroll();

    // Smooth Scrolling
    initSmoothScrolling();

    // Intersection Observer for Animations
    initIntersectionObserver();

    // Typewriter Effect if element exists
    initTypewriterEffect();
});

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for Section Reveals
function initIntersectionObserver() {
    const revealElements = document.querySelectorAll('.section-reveal, .animate-in');
    
    if (revealElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// Typewriter Effect
function initTypewriterEffect() {
    const typewriterElement = document.querySelector('.typewriter-text');
    if (!typewriterElement) return;
    
    const words = typewriterElement.getAttribute('data-words');
    if (!words) return;
    
    try {
        const wordArray = JSON.parse(words);
        if (!Array.isArray(wordArray) || wordArray.length === 0) return;
        
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;
        
        function type() {
            const currentWord = wordArray[wordIndex];
            
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
                typeSpeed = 1500; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % wordArray.length;
            }
            
            setTimeout(type, typeSpeed);
        }
        
        type();
    } catch (e) {
        console.error('Typewriter effect error:', e);
    }
}

// Simple Parallax Effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax-speed') || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Staggered Animation
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