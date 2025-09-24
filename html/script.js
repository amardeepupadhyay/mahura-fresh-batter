// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navigation = document.querySelector('[data-navigation]');
    const mobileToggle = document.querySelector('[data-mobile-toggle]');
    const mobileNav = document.querySelector('[data-mobile-nav]');
    const navLinks = document.querySelectorAll('[data-nav-link]');
    const scrollButtons = document.querySelectorAll('[data-scroll-to]');
    
    // Handle scroll events for navigation styling and active sections
    let activeSection = 'hero';
    let isScrolled = false;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Update header appearance
        const newIsScrolled = scrollTop > 50;
        if (newIsScrolled !== isScrolled) {
            isScrolled = newIsScrolled;
            if (isScrolled) {
                navigation.classList.add('scrolled');
            } else {
                navigation.classList.remove('scrolled');
            }
        }
        
        // Update active section
        const sections = ['hero', 'products', 'process', 'mission', 'about', 'contact'];
        let newActiveSection = activeSection;
        
        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top + scrollTop;
                const elementHeight = rect.height;
                
                if (scrollTop >= elementTop - 100 && scrollTop < elementTop + elementHeight - 100) {
                    newActiveSection = sectionId;
                    break;
                }
            }
        }
        
        if (newActiveSection !== activeSection) {
            activeSection = newActiveSection;
            updateActiveNavLink();
        }
    }
    
    function updateActiveNavLink() {
        navLinks.forEach(link => {
            const linkSection = link.getAttribute('data-nav-link');
            if (linkSection === activeSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // Mobile menu toggle
    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('open');
        });
    }
    
    // Smooth scrolling for navigation and CTA buttons
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Close mobile menu if open
            if (mobileNav) {
                mobileNav.classList.remove('open');
            }
        }
    }
    
    // Add click listeners to all scroll buttons
    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-scroll-to');
            scrollToSection(targetSection);
        });
    });
    
    // Add click listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-nav-link');
            scrollToSection(targetSection);
        });
    });
    
    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll check
    handleScroll();
    updateActiveNavLink();
    
    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });
    
    // Mission pillar hover effects
    const missionPillars = document.querySelectorAll('.mission-pillar');
    missionPillars.forEach(pillar => {
        pillar.addEventListener('mouseenter', function() {
            this.classList.add('pillar-hover');
        });
        pillar.addEventListener('mouseleave', function() {
            this.classList.remove('pillar-hover');
        });
    });
    
    // FAQ toggle functionality
    const faqToggles = document.querySelectorAll('[data-faq-toggle]');
    faqToggles.forEach(toggle => {
        const question = toggle.querySelector('.contact-faq-question');
        const answer = toggle.querySelector('.contact-faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', function() {
                const isOpen = answer.classList.contains('open');
                
                // Close all other FAQs
                faqToggles.forEach(otherToggle => {
                    const otherAnswer = otherToggle.querySelector('.contact-faq-answer');
                    if (otherAnswer && otherAnswer !== answer) {
                        otherAnswer.classList.remove('open');
                    }
                });
                
                // Toggle current FAQ
                if (isOpen) {
                    answer.classList.remove('open');
                } else {
                    answer.classList.add('open');
                }
            });
        }
    });
    
    // Contact form handling
    const contactForm = document.querySelector('[data-contact-form]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const phone = formData.get('phone');
            
            // Basic validation
            if (!name || !phone) {
                alert('Please fill in your name and phone number.');
                return;
            }
            
            // Simulate form submission
            const submitButton = this.querySelector('.contact-form-submit');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate network delay
            setTimeout(() => {
                alert('Thank you for your inquiry! We will get back to you soon.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
    
    // Add entrance animations for elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.product-card, .process-step, .mission-pillar, .about-value, .contact-info-item'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add smooth transitions for form focus states
    const formInputs = document.querySelectorAll('.contact-form-input, .contact-form-select, .contact-form-textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentNode.classList.remove('focused');
        });
    });
    
    // Handle button press effects
    const buttons = document.querySelectorAll('button, .hero-button-primary, .hero-button-secondary, .product-button, .navigation-cta-button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});