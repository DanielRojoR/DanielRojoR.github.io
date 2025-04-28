document.addEventListener('DOMContentLoaded', function () {
    class Carousel {
        constructor(container) {
            this.container = container;
            this.slider = container.querySelector('.slider');
            this.slides = container.querySelectorAll('.slide');
            this.prevBtn = container.querySelector('.prev');
            this.nextBtn = container.querySelector('.next');
            this.dots = container.parentElement.querySelectorAll('.dot');
            this.currentIndex = 0;
            this.updateDots();
            this.addEventListeners();

            // Handle single image case
            if (this.slides.length <= 1) {
                if (this.prevBtn) this.prevBtn.style.display = 'none';
                if (this.nextBtn) this.nextBtn.style.display = 'none';
                this.dots.forEach(dot => dot.style.display = 'none');
                return;
            }

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
                dot.dataset.index = index;
                dot.addEventListener('click', () => {
                    this.showSlides(parseInt(dot.dataset.index, 10));
                });
            });

            this.nextBtn.addEventListener('click', () => this.nextSlide());
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
    }

    // Initialize all carousels on the page
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