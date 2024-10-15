let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { 
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 1500);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

document.addEventListener("DOMContentLoaded", function() {
  const backgrounds = ["image1.jpg", "image2.jpg", "image3.jpg"];
  let currentIndex = 0;
  const container = document.querySelector('.container');

  function changeBackground() {
    container.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
    currentIndex = (currentIndex + 1) % backgrounds.length;
  }

  setInterval(changeBackground, 5000);

  changeBackground();
});
