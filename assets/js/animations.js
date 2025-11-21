// Initialize all animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 50
        });
    }

    // Page Loader
    createPageLoader();

    // Smooth Scrolling for anchor links
    initSmoothScrolling();

    // Header Scroll Effects
    initHeaderScrollEffects();

    // Parallax Effects
    initParallaxEffects();

    // Card Hover Effects
    initCardHoverEffects();

    // Scroll to Top Button
    createScrollToTopButton();

    // Page Transitions
    initPageTransitions();

    // Intersection Observer for Animations
    initIntersectionObserver();

    // Hero Section Animations
    initHeroAnimations();

    // Form Input Animations
    initFormAnimations();

    // Typewriter Effect
    initTypewriterEffect();

    // Staggered Animations
    initStaggeredAnimations();
});

// Page Loader
function createPageLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loader-spinner"></div>';
    document.body.appendChild(loader);

    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
            setTimeout(function() {
                loader.remove();
            }, 500);
        }, 300);
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
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

// Header Scroll Effects
function initHeaderScrollEffects() {
    const header = document.getElementById('site-header');
    if (!header) return;
    
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 300) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// Parallax Effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-element, .parallax');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallaxSpeed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Card Hover Effects with 3D Tilt
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// Scroll to Top Button
function createScrollToTopButton() {
    const scrollButton = document.createElement('div');
    scrollButton.className = 'scroll-indicator';
    scrollButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });

    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Page Transitions
function initPageTransitions() {
    const links = document.querySelectorAll('a[href^="/"], a[href^="http"]');
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);

    links.forEach(link => {
        if (!link.getAttribute('href').startsWith('#') && 
            !link.hasAttribute('target') && 
            !link.getAttribute('href').includes('medium.com')) {
            
            link.addEventListener('click', function(e) {
                if (e.ctrlKey || e.metaKey) return;
                
                e.preventDefault();
                const href = this.getAttribute('href');
                
                transition.classList.add('active');
                
                setTimeout(function() {
                    window.location.href = href;
                }, 500);
            });
        }
    });
}

// Intersection Observer for Reveal Animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                if (entry.target.classList.contains('section-reveal')) {
                    entry.target.classList.add('in-view');
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.animate-in, .section-reveal').forEach(el => {
        observer.observe(el);
    });

    // Add animate-in class to sections
    document.querySelectorAll('section').forEach((section, index) => {
        if (!section.classList.contains('animate-in')) {
            section.classList.add('animate-in');
            section.style.transitionDelay = `${index * 0.1}s`;
        }
    });
}

// Hero Section Animations
function initHeroAnimations() {
    const hero = document.querySelector('.hero-section, .section-hero');
    if (!hero) return;

    // Animated background particles
    createParticles(hero);

    // Text animations
    const heroText = hero.querySelectorAll('h1, h2, p');
    heroText.forEach((text, index) => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            text.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 200 + (index * 150));
    });

    // Floating animation for hero elements
    const floatingElements = hero.querySelectorAll('.animate-float');
    floatingElements.forEach((el, index) => {
        el.style.animation = `float ${3 + index}s ease-in-out infinite`;
        el.style.animationDelay = `${index * 0.5}s`;
    });
}

// Create animated particles for hero section
function createParticles(container) {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 1;
    `;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${particle.style.width};
            background: var(--primary-color);
            border-radius: 50%;
            opacity: ${Math.random() * 0.3 + 0.1};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 20 + 10}s linear infinite;
        `;
        
        particlesContainer.appendChild(particle);
    }
    
    container.style.position = 'relative';
    container.appendChild(particlesContainer);
}

// Form Input Animations
function initFormAnimations() {
    const inputs = document.querySelectorAll('input:not([type="checkbox"]):not([type="radio"]), textarea, select');
    
    inputs.forEach(input => {
        if (input.closest('.form-field')) return; // Skip if already processed
        
        const wrapper = document.createElement('div');
        wrapper.className = 'form-field';
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        
        if (input.placeholder) {
            const label = document.createElement('label');
            label.textContent = input.placeholder;
            label.className = 'floating-label';
            wrapper.appendChild(label);
            
            input.addEventListener('focus', () => {
                label.classList.add('active');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.classList.remove('active');
                }
            });
            
            // Check if input has initial value
            if (input.value) {
                label.classList.add('active');
            }
        }
    });
}

// Typewriter Effect
function initTypewriterEffect() {
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
}

// Staggered Animations
function initStaggeredAnimations() {
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
}

// Add CSS for animations dynamically
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
    }
    
    @keyframes particleFloat {
        from {
            transform: translateY(100vh) translateX(-50px);
        }
        to {
            transform: translateY(-100px) translateX(50px);
        }
    }
    
    .form-field {
        position: relative;
        margin-bottom: 20px;
    }
    
    .floating-label {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
        transition: all 0.3s ease;
        pointer-events: none;
        color: var(--text-muted);
        background: white;
        padding: 0 4px;
        font-size: 14px;
    }
    
    .floating-label.active {
        top: 0;
        font-size: 12px;
        color: var(--primary-color);
    }
    
    .scroll-indicator svg {
        color: white;
    }
    
    @media (prefers-color-scheme: dark) {
        .floating-label {
            background: var(--gray-100);
        }
    }
`;
document.head.appendChild(animationStyles);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-based animations
window.addEventListener('scroll', debounce(function() {
    // Trigger any scroll-based animations here
}, 10));