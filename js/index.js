const navToggle = document.querySelector(".toggle-nav");
const navLinkList = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-clicked");
});

navLinkList.forEach((element) => {
  element.addEventListener("click", () => {
    document.body.classList.remove("nav-clicked");
  });
});
