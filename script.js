class Carousel {
    constructor(container) {
        this.container = container;
        this.slider = container.querySelector('.slider');
        this.slides = container.querySelectorAll('.slide');
        this.prevBtn = container.querySelector('.prev');
        this.nextBtn = container.querySelector('.next');
        this.dotsContainer = container.parentElement.querySelector('.dots-container');
        this.currentIndex = 0;

        // Si no hay slides o solo hay uno, ocultar controles
        if (this.slides.length <= 1) {
            if (this.prevBtn) this.prevBtn.style.display = 'none';
            if (this.nextBtn) this.nextBtn.style.display = 'none';
            if (this.dotsContainer) this.dotsContainer.style.display = 'none';
            return;
        }

        // Limpiar y crear nuevos dots basados en el número actual de slides
        this.dotsContainer.innerHTML = '';
        for (let i = 0; i < this.slides.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.index = i;
            this.dotsContainer.appendChild(dot);
        }

        this.dots = this.dotsContainer.querySelectorAll('.dot');
        this.updateDots();
        this.addEventListeners();
    }

    updateDots() {
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    showSlides(index) {
        if (index >= this.slides.length) {
            this.currentIndex = 0;
        } else if (index < 0) {
            this.currentIndex = this.slides.length - 1;
        } else {
            this.currentIndex = index;
        }
        
        this.slider.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        this.updateDots();
    }

    nextSlide() {
        this.showSlides(this.currentIndex + 1);
    }

    prevSlide() {
        this.showSlides(this.currentIndex - 1);
    }

    addEventListeners() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showSlides(index);
            });
        });

        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
    }
}

// Initialize all carousels on the page
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.slider-container').forEach(container => {
        new Carousel(container);
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Check if element is intersecting (visible)
        if (entry.isIntersecting) {
            const element = entry.target;
            // Get the position of the element to determine animation
            const position = Array.from(document.querySelectorAll('.animated')).indexOf(element);
            
            // Apply different animations based on position
            switch(position % 10) {
                case 0:
                    element.classList.add('animation-fadeIn-left');
                    break;
                case 1:
                    element.classList.add('animation-fadeIn-right');
                    break;
                case 2:
                    element.classList.add('animation-fadeIn-top');
                    break;
                case 3:
                    element.classList.add('animation-fadeIn-bot');
                    break;
                case 4:
                    element.classList.add('animation-fadeIn-bot');
                    break;
                case 5:
                    element.classList.add('animation-fadeIn-bot');
                    break;
                case 6:
                    element.classList.add('animation-fadeIn-bot');
                    break;
                case 7:
                    element.classList.add('animation-fadeIn-bot');
                    break;
                case 8:
                    element.classList.add('animation-fadeIn-left');
                    break;
                case 9:
                    element.classList.add('animation-fadeIn-right');
                    break;
            }
            
            // Stop observing after animation is added
            observer.unobserve(element);
        }
    });
}, {
    threshold: 0.33 // Element is considered visible when 20% is in viewport
});

// Observe all elements with 'animated' class
document.querySelectorAll('.animated').forEach((element) => {
    observer.observe(element);
});

// CODIGO DE PRUEBA PARA EL H-MENU MOVIL

document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger-menu';
    
    // Create hamburger bars
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('div');
        bar.className = `bar${i+1}`;
        hamburger.appendChild(bar);
    }
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    // Get nav elements
    const navLinks = document.querySelector('.nav-links');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    // Insert hamburger before nav links
    navWrapper.insertBefore(hamburger, navLinks);
    
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link or overlay
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});