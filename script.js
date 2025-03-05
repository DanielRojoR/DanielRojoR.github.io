let currentIndex = 0;

function moveSlides(x) {
    let carouselItems = document.getElementsByClassName("carousel-img");
    let totalItems = carouselItems.length;
    
    currentIndex += x;

    if (currentIndex <= -1) {
        currentIndex = 2
    } else if (currentIndex >= 3) {
        currentIndex = 0
    }

    for (let i = 0; i < totalItems; i++) {
        carouselItems[i].style.display = "none";
    }
    carouselItems[currentIndex].style.display = "block";
}

function moveSlidesIndicator(x) {
    let carouselItems = document.getElementsByClassName("carousel-img");
    let totalItems = carouselItems.length;
    currentIndex = 0;

    currentIndex += x;

    for (let i = 0; i < totalItems; i++) {
        carouselItems[i].style.display = "none";
    }
    carouselItems[currentIndex].style.display = "block";
    console.log(currentIndex);
}

// function animateSlide() {
//     let id = null;
//     const elem = document.getElementsByClassName("active");
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++;
//         elem.style.top = pos + 'px';
//         elem.style.left = pos + 'px';
//       }
//     }
//   } 