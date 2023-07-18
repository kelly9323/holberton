"use strict";
//burger menu
const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// sticky class for navbar
window.onscroll = function () {
  navbarScroll();
};
const navbar = document.querySelector("nav");
const sticky = navbar.offsetTop;

function navbarScroll() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//goals section

const goalsContainer = document.getElementById("goalsContainer");
const goalsElemHTML = goals.map((goal) => createGoal(goal));
function createGoal(goal) {
  const elem = document.createElement("li");
  elem.classList.add("goalsWrapper");

  const article = document.createElement("article");
  article.classList.add("cardContainer");
  elem.append(article);

  const h3 = document.createElement("h3");
  h3.append(document.createTextNode(goal.name))

  const img = document.createElement("img");
  img.setAttribute("src", goal.img);
  img.setAttribute("alt", goal.name);
  img.classList.add("goalsPhoto");

  const p = document.createElement("p");
  p.classList.add("goalsDescription");
  p.append(document.createTextNode(goal.description))

  article.append(h3, img, p);

  return elem;
}

goalsContainer.append(...goalsElemHTML);
