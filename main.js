/**
 * Redirects user to Ravelry pattern site
 */
const patternsBtn = document.getElementById("patternsBtn");
patternsBtn.addEventListener("click", function () {
  window.open("https://www.ravelry.com/patterns/knitting", "_blank");
});
console.log(patternsBtn);
