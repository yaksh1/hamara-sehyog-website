let currentSlide = 0

// Function to show the current slide
function showSlide (index) {
  const slides = document.querySelectorAll('.carousel-item')
  slides.forEach((slide, i) => {
    slide.style.left = i === index ? '0' : i < index ? '-100%' : '100%' // Control the position of each slide
    slide.style.opacity = i === index ? '1' : '0' // Control the visibility
  })
}

// Function to go to the next slide
function nextSlide () {
  currentSlide = (currentSlide + 1) % 4 // Loop back to first slide
  showSlide(currentSlide)
}

// Function to go to the previous slide
function prevSlide () {
  currentSlide = (currentSlide - 1 + 4) % 4 // Loop to last slide if going back from first
  showSlide(currentSlide)
}

// Auto-play every 3 seconds
setInterval(nextSlide, 5000)
