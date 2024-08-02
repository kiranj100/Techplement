document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

document.querySelectorAll("#nav-links a").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("nav-links").classList.remove("active");
    document.body.classList.remove("no-scroll");

    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
