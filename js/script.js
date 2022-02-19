///////////////////////////////////////////////////////////
// Animate on scroll
AOS.init({
  duration: 1000,
  once: true,
});

///////////////////////////////////////////////////////////
// Selecting DOM
const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const backToTop = document.querySelector(".back-to-top");
const navLink = document.querySelectorAll(".main-nav-link");
const section = document.querySelectorAll("section");
const allLinks = document.querySelectorAll(".link:link");
const form = document.querySelector("#form");
const fname = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

///////////////////////////////////////////////////////////
// Make preloader work
let preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", function () {
    preloader.remove();
  });
}

///////////////////////////////////////////////////////////
// Make mobile navigation work
hamburger.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Change navigation background color and back-to-top link visible on scrolling
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("header-scroll");
    backToTop.classList.add("visible");
  } else {
    header.classList.remove("header-scroll");
    backToTop.classList.remove("visible");
  }
});

///////////////////////////////////////////////////////////
// To active navigation link on scroll
window.addEventListener("scroll", function () {
  let length = section.length;
  while (--length && window.scrollY + 97 < section[length].offsetTop) {}
  navLink.forEach((li) => li.classList.remove("active"));
  navLink[length].classList.add("active");
});

///////////////////////////////////////////////////////////
// Form Validation
function checkValidity(inputArr) {
  inputArr.forEach(function (input) {
    input.addEventListener("input", function (e) {
      if (input.validity.valid) {
        input.classList.add("valid");
        input.classList.remove("invalid");
      } else {
        if (e.target.value.length === 0) {
          input.classList.remove("valid");
          input.classList.add("invalid");
        } else {
          input.classList.remove("valid");
          input.classList.add("invalid");
        }
      }
    });
  });
}

checkValidity([fname, email, subject, message]);

// Form Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Use HTML constraint API to check form validity
  let isValid = form.checkValidity();

  // Submit & Reset Form if Valid
  if (isValid) {
    form.submit();
  }
});
