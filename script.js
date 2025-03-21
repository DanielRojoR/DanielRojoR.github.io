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