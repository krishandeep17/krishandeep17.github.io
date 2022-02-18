// Selecting DOM

var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;

const html = document.documentElement;

const preLoader = document.querySelector(".pre-loader");
const header = document.querySelector(".header");
const backToTop = document.querySelector(".back-to-top");

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

const navLink = document.querySelectorAll(".nav-link");
const section = document.querySelectorAll("section");

// To hide PRE-LOADER
window.addEventListener("load", function () {
  preLoader.style.display = "none";
});

// To hide HEADER on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-10rem";
  }
  prevScrollpos = currentScrollPos;
};

// To change HEADER background color and BACK-TO-TOP link visible on scrolling
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("header-scroll");
    backToTop.classList.add("visible");
  } else {
    header.classList.remove("header-scroll");
    backToTop.classList.remove("visible");
  }
});

// To active NAV LINKS on scroll
window.addEventListener("scroll", function () {
  let length = section.length;
  while (--length && window.scrollY + 97 < section[length].offsetTop) {}
  navLink.forEach((li) => li.classList.remove("active"));
  navLink[length].classList.add("active");
});

// To make toggle hamburger menu
hamburger.addEventListener("click", function () {
  navList.classList.toggle("toggle-nav");
  this.classList.toggle("is-active");

  html.classList.toggle("overflow-hidden");
});

navList.addEventListener("click", function () {
  this.classList.toggle("toggle-nav");
  hamburger.classList.toggle("is-active");
});

// To get current year
let year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;
