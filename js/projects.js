const projects = [
  {
    id: 1,
    title: "Animated Navbar",
    live: "https://krishandeep.com/animated-navbar",
    github: "https://github.com/krishandeep7/animated-navbar",
    img: "img/animated-navbar-img.png",
    description:
      "It is a responsive navigation bar with advanced CSS animation and animated menu icon.",
  },
  {
    id: 2,
    title: "Animated Navbar",
    live: "https://krishandeep.com/animated-navbar",
    github: "https://github.com/krishandeep7/animated-navbar",
    img: "img/animated-navbar-img.png",
    description:
      "It is a responsive navigation bar with advanced CSS animation and animated menu icon.",
  },
  {
    id: 3,
    title: "Animated Navbar",
    live: "https://krishandeep.com/animated-navbar",
    github: "https://github.com/krishandeep7/animated-navbar",
    img: "img/animated-navbar-img.png",
    description:
      "It is a responsive navigation bar with advanced CSS animation and animated menu icon.",
  },
];

const showProjects = document.querySelector("#show-projects");
const seeMoreBtn = document.querySelector("#see-more");
const btnText = document.querySelector("#see-more .text");

seeMoreBtn.addEventListener("click", function () {
  let display = projects.map(function (project) {
    return ` <div class="project flex align-items-center">
    <div class="project-text-box" data-aos="fade-right">
      <h3 class="title">${project.title}</h3>
      <p class="description">${project.description}</p>
      <div class="links flex align-items-center">
        <a
          href=${project.live}
          target="_blank"
          rel="noopener noreferrer"
          class="btn"
          title="See Live"
        >
          <div>
            <span class="bg"></span>
            <span class="base"></span>
            <span class="text">
              See Live <i class="fas fa-external-link-alt"></i>
            </span>
          </div>
        </a>
        <a
          href=${project.github}
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
          title="Source Code"
        >
          <div>
            <span class="text">
              Source Code <i class="fab fa-github"></i>
            </span>
          </div>
        </a>
      </div>
    </div>
    <div
      class="project-img-box"
      data-aos="fade-left"
    >
      <a
        class="flex align-items-center justify-content-center"
        href=${project.live}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="project-img"
          width="536"
          height="313"
          src=${project.img}
          alt=${project.title}
        />
      </a>
    </div>
  </div>`;
  });
  display = display.join("");

  if (btnText.innerText === "See More!") {
    btnText.innerText = "Show Less!";
    showProjects.innerHTML = display;
    showProjects.classList.add("margin-top");
  } else {
    btnText.innerText = "See More!";
    showProjects.innerHTML = "";
    showProjects.classList.remove("margin-top");
  }
});
