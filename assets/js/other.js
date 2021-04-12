/*============================================
	Intersection Observer - Animate on Scroll
=============================================*/
document.addEventListener("DOMContentLoaded", () => {
  let options = {
    root: null,
    rootMargin: "500px 5px",
    threshold: 0.00
  };
  let observer = new IntersectionObserver(beTouching, options);
  // document.querySelectorAll(".intersection-observer h1").forEach(h1 => {
  //   observer.observe(h1);

  document.querySelectorAll(".intersection-observer h1").forEach(h1 => {
    observer.observe(h1);
  });
});
function beTouching(entries, ob) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("intersecting");
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}

/*============================================
	Dropdown Menu
=============================================*/
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}
/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

/*============================================
    Scroll to Top
=============================================*/
  function scrollTopAnimated() { 
      $("html, body").animate({ scrollTop: "0" }); 
  };
