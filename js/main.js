// instantiate the elements
const carousel = document.querySelector(".carousel");

const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

const carouselPhotos = document.querySelectorAll(".carousel__photo");

const testimonials = document.querySelectorAll(".testimonials");


// set initial count
let index = 0;


// set initial width and display attributes
const carouselWidth = carouselPhotos[index].clientWidth;
prevButton.classList.add("disabled");
testimonials[carouselPhotos.length - 1].classList.add("hidden");

// Button clicks
prevButton.addEventListener("click", () => {
    prevButton.classList.add("disabled");
    testimonials[0].classList.remove("hidden");
    testimonials[carouselPhotos.length - 1].classList.add("hidden");
    if (index <= 0) {
        return;
    }
    index--;
    carousel.style.transform = `translateX(${-carouselWidth * index}px)`;
    nextButton.classList.remove("disabled");
});

nextButton.addEventListener("click", () => {
    nextButton.classList.add("disabled");
    testimonials[0].classList.add("hidden");
    testimonials[carouselPhotos.length - 1].classList.remove("hidden");
    if (index >= carouselPhotos.length - 1) {
        return;
    }
    index++;
    carousel.style.transform = `translateX(${-carouselWidth * index}px)`;
    prevButton.classList.remove("disabled");
});

