
// let currentSlide = 0

// // Retrieve the slide count dynamically
// const carousel = document.querySelector('.carousel')
// const totalSlides = parseInt(carousel.getAttribute('data-slide-count'), 10)

// // Function to show the current slide
// function showSlide (index) {
//   const slides = document.querySelectorAll('.carousel-item')
//   slides.forEach((slide, i) => {
//     slide.style.left = i === index ? '0' : i < index ? '-100%' : '100%' // Control the position of each slide
//     slide.style.opacity = i === index ? '1' : '0' // Control the visibility
//   })
// }

// // Function to go to the next slide
// function nextSlide () {
//   currentSlide = (currentSlide + 1) % totalSlides // Loop back to first slide
//   showSlide(currentSlide)
// }

// // Auto-play every 3 seconds
// setInterval(nextSlide, 3000)
document.querySelectorAll('.carousel').forEach(carousel => {
  let currentSlide = 0
  const slides = carousel.querySelectorAll('.carousel-item')
  const totalSlides = parseInt(carousel.getAttribute('data-slide-count'), 10)

  function showSlide (index) {
    slides.forEach((slide, i) => {
      slide.style.left = i === index ? '0' : i < index ? '-100%' : '100%'
      slide.style.opacity = i === index ? '1' : '0'
    })
  }

  function nextSlide () {
    currentSlide = (currentSlide + 1) % totalSlides
    showSlide(currentSlide)
  }

  function prevSlide () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    showSlide(currentSlide)
  }

  // Attach event listeners to controls for this carousel instance
  carousel.querySelector('.next').addEventListener('click', nextSlide)
  carousel.querySelector('.prev').addEventListener('click', prevSlide)

  // Start autoplay for each carousel
  setInterval(nextSlide, 3000)
})
