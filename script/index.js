// SKILLS SLIDESHOW LOGIC
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let skills = document.getElementsByClassName("mySkills");
  if (n > skills.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = skills.length
  }
  for (let i = 0; i < skills.length; i++) {
      skills[i].style.display = "none";
  }
  skills[slideIndex-1].style.display = "inline-block";
}

// SCROLL TO TOP BUTTON LOGIC
let rootElement = document.documentElement;
let scrollBtn = document.getElementById("scrollToTopBtn");

function handleScroll() {
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.50) {
    scrollBtn.style.display = "block"
  } else {
    scrollBtn.style.display = "none"
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll);
