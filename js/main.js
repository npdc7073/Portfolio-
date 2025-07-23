var navlinks = document.getElementById("navlinks");
function showMenu() {
    navlinks.style.right = "0";
}
function hideMenu() {
    navlinks.style.right = "-200px";
}

// Contect Us
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});CLEAR