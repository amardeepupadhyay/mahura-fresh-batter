// MAVURA Website Interactive Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling functionality
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Navigation click handlers
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const mobileNavLinks = document.querySelectorAll('[data-mobile-nav-link]');
    const brandButton = document.querySelector('[data-brand]');
    const ctaButtons = document.querySelectorAll('[data-cta-btn]');
    const heroButtons = document.querySelectorAll('[data-hero-btn]');
    const productButtons = document.querySelectorAll('[data-product-btn]');
    
    // Add click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            scrollToSection(targetId);
        });
    });
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            scrollToSection(targetId);
        });
    });
    
    if (brandButton) {
        brandButton.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection('hero');
        });
    }
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection('contact');
        });
    });
    
    heroButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = button.getAttribute('data-target');
            scrollToSection(targetId);
        });
    });
    
    productButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection('contact');
        });
    });
    
    // Header scroll effects
    const header = document.querySelector('[data-header]');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        updateActiveNavLink();
    }
    
    function updateActiveNavLink() {
        const sections = ['hero', 'products', 'process', 'mission', 'about', 'contact'];
        let currentSection = 'hero';
        
        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = sectionId;
                }
            }
        });
        
        // Update active states
        navLinks.forEach(link => {
            const targetId = link.getAttribute('data-target');
            if (targetId === currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Product card hover animations
    const productCards = document.querySelectorAll('[data-product-card]');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const title = card.querySelector('[data-product-title]');
            if (title) title.style.color = 'var(--primary)';
        });
        
        card.addEventListener('mouseleave', () => {
            const title = card.querySelector('[data-product-title]');
            if (title) title.style.color = 'var(--foreground)';
        });
    });
    
    // FAQ functionality
    const faqQuestions = document.querySelectorAll('[data-faq-question]');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('[data-faq-icon]');
            
            // Close other FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherIcon = otherQuestion.querySelector('[data-faq-icon]');
                    if (otherAnswer) otherAnswer.classList.remove('active');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // Toggle current FAQ
            if (answer) answer.classList.toggle('active');
            if (icon) {
                const isActive = answer && answer.classList.contains('active');
                icon.style.transform = isActive ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.querySelector('[data-contact-form]');
    const successMessage = document.querySelector('[data-form-success]');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            
            contactForm.style.opacity = '0.7';
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.opacity = '1';
                
                if (successMessage) {
                    successMessage.style.display = 'block';
                    successMessage.innerHTML = `<p><strong>Thank you, ${name}!</strong></p><p>We'll get back to you within 24 hours.</p>`;
                    setTimeout(() => successMessage.style.display = 'none', 5000);
                }
            }, 1500);
        });
    }
    
    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-fade-in').forEach(el => observer.observe(el));
    
    // Initialize
    handleScroll();
});