const sliderImage = document.getElementById("slider-image");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

const images = [
  "/api/placeholder/600/400",
  "/api/placeholder/600/400",
  "/api/placeholder/600/400",
  "/api/placeholder/600/400",
];

let currentIndex = 0;

function updateImage() {
  sliderImage.src = images[currentIndex];
}

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

// Initialize first image
updateImage();
