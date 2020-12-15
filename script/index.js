let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
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
