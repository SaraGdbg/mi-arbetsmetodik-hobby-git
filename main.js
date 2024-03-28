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
