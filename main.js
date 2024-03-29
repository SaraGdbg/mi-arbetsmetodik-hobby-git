/**
 * Redirects user to Ravelry pattern site
 */
const patternsBtn = document.getElementById("patternsBtn");
patternsBtn.addEventListener("click", function () {
  window.open("https://www.ravelry.com/patterns/knitting", "_blank");
});

/**
 * Redirects user to contact info
 */
const joinBtn = document.getElementById("joinBtn");
joinBtn.addEventListener("click", function () {
  const footerPostition = document.getElementById("contactInfo").offsetTop;
  window.scrollTo({
    top: footerPostition,
    behavior: "smooth",
  });
});
console.log(joinBtn);

/**
 * Shows images in slideshow at front page
 */
let currentIndex = 0;
const images = document.querySelectorAll("#slideshow img");

function showNextImage() {
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = "block";
}

images[currentIndex].style.display = "block";
setInterval(showNextImage, 3000);

/**
 * Shows gallery page
 */
let galleryPage = document.getElementById("galleryPage");
let galleryText = document.getElementById("galleryText");
let startPage = document.getElementById("startPage");
let galleryBtn = document.getElementById("galleryBtn");
let returnBtn = document.getElementById("returnBtn");

galleryBtn.addEventListener("click", function () {
  galleryPage.classList.remove("hidden");
  returnBtn.classList.remove("hidden");
  startPage.classList.add("hidden");
});

returnBtn.addEventListener("click", function () {
  galleryPage.classList.add("hidden");
  galleryText.classList.add("hidden");
  returnBtn.classList.add("hidden");
  startPage.classList.remove("hidden");
});
