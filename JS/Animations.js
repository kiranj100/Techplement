export function checkVisibility() {
  const sections = document.querySelectorAll(".section");
  const triggerBottom = window.innerHeight * 0.95;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible", "animate__animated", "animate__zoomIn");
    } else {
      section.classList.remove(
        "visible",
        "animate__animated",
        "animate__zoomIn"
      );
    }
  });
}

export const checkVisibility2 = () => {
  const sections = document.querySelectorAll(".section3");

  const triggerBottom = window.innerHeight * 0.45;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionDown = section.getBoundingClientRect().bottom;

    if (sectionTop < triggerBottom && sectionDown > triggerBottom) {
      section.classList.add(
        "visible",
        "animate__animated",
        "animate__slideInLeft"
      );
    } else {
      section.classList.remove(
        "visible",
        "animate__animated",
        "animate__slideInLeft"
      );
    }
  });
};

export const checkVisibility4 = () => {
  const sections = document.querySelectorAll(".section4");

  const triggerBottom = window.innerHeight * 0.45;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionDown = section.getBoundingClientRect().bottom;

    if (sectionTop < triggerBottom && sectionDown > triggerBottom) {
      section.classList.add(
        "visible",
        "animate__animated",
        "animate__slideInRight"
      );
    } else {
      section.classList.remove(
        "visible",
        "animate__animated",
        "animate__slideInRight"
      );
    }
  });
};
