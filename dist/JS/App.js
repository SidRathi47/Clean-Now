$('[data-tilt]').tilt({
  glare: true,
  maxGlare: .5,
  maxTilt: 5
})


AOS.init({

  delay: 150, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
});


// window.onload = function(){
// 	setTimeout(function () {
// 		var x = document.querySelectorAll("[]");
// 		for (var i = 0; i < x.length; i++) {
// 			x[i].style.display = "block";
// 			x[i].style.overflowX = "hidden";
// 		}
// 	}, 500);
// }

// grab everything we need
const close = document.querySelector("#nav-close");
const open = document.querySelector("#nav-open");
const menu = document.querySelector("#mobile-nav");
const menuitems = document.querySelectorAll("[role='menuitem']");

function closeMenu() {
  menu.classList.add("hidden");
}

function openMenu() {
  menu.classList.remove("hidden");
}

close.addEventListener("click", closeMenu);
open.addEventListener("click", openMenu);

for (i = 0; i < menuitems.length; i++) {
  menuitems[i].addEventListener("click", closeMenu);
}
