import { webdevData } from "../Data/webDevData.js";
import { itCertificateCourses } from "../Data/itCertifiedCourse.js";
import { businessData } from "../Data/businessData.js";
import { communicationData } from "../Data/communicationData.js";
import { datascience } from "../Data/datascience.js";
import { leadershipCourses } from "../Data/leadershipCourses.js";
import { companyLogo } from "../Data/companyLogo.js";
import { instructors } from "../Data/instructor.js";
import { achievement } from "../Data/Achievement.js";

// navbar Section js start

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

// navbar Section js End

// courses Section Start
const generateCourseHTML = (courses, formUrlBase, formFieldId) => {
  return courses
    .map((course) => {
      const formUrl = `${formUrlBase}?usp=pp_url&${formFieldId}=${encodeURIComponent(
        course.title
      )}`;
      return `
          <div id="${course.id}" class="webdevelopment">
            <div class="courses">
              <div class="course ${course.title.replace(/\s+/g, "")} ">
                <h4 >${course.title}</h4>
                <p >${course.description}</p>
                <div class="add-cart ">
                  <span class="price">${course.price}</span>
                  <button><a href="${formUrl}" class="add-to-cart" target="_blank">${
        course.button
      }</a></button>
                </div>
              </div>
            </div>
          </div>
        `;
    })
    .join("");
};

// Example usage
const formUrlBase =
  "https://docs.google.com/forms/d/e/1FAIpQLSd2Ie6OHmVpJhD1Gnmj9GTjrWXUfb-KNABPC7ajECLNN7mRrw/viewform";
const formFieldId = "entry.2079092631";

// Web Development Section JS Start
const webDevelopmentHTML = generateCourseHTML(
  webdevData,
  formUrlBase,
  formFieldId
);
document.querySelector(".webdevelopment").innerHTML = webDevelopmentHTML;
// Web Development Section JS End

// IT Certificate Section JS Start
const itCertificateHTML = generateCourseHTML(
  itCertificateCourses,
  formUrlBase,
  formFieldId
);
document.querySelector(".itcertificate").innerHTML = itCertificateHTML;
// IT Certificate Section JS End

// Business Data Section JS Start
const businessDataHTML = generateCourseHTML(
  businessData,
  formUrlBase,
  formFieldId
);
document.querySelector(".businessanalytics").innerHTML = businessDataHTML;
// Business Data Section JS End

// Communication Data Section JS Start
const communicationDataHTML = generateCourseHTML(
  communicationData,
  formUrlBase,
  formFieldId
);
document.querySelector(".communication").innerHTML = communicationDataHTML;
// Communication Data Section JS End

// Data Science Section JS Start
const dataScienceHTML = generateCourseHTML(
  datascience,
  formUrlBase,
  formFieldId
);
document.querySelector(".datascience").innerHTML = dataScienceHTML;
// Data Science Section JS End

// Leadership Courses Section JS Start
const leadershipCoursesHTML = generateCourseHTML(
  leadershipCourses,
  formUrlBase,
  formFieldId
);
document.querySelector(".leadership").innerHTML = leadershipCoursesHTML;
// Leadership Courses Section JS End

// course Section End

// Achivement Section Start

let achieve = "";
achievement.forEach((item) => {
  achieve += `  <div class="achievement-card ">
            <div class="achieve-img ">
              <img src="${item.image}" />
            </div>
            <div class="achievement-text ">
              <span>${item.title}</span>
              <p>${item.description}</p>
            </div>
          </div>`;
});
console.log(achieve);
document.querySelector(".achievement").innerHTML = achieve;
// Achivement Section End

// Company Logo Section Start
let Company = "";
companyLogo.forEach((logo) => {
  Company += `<img src=${logo.image} />`;
});

document.querySelector(".company-Logo").innerHTML = Company;

// Company Logo Section End

// Instructors Section JS Start

let InstructorsHTML = "";
instructors.forEach((element) => {
  InstructorsHTML += ` 
        <div class="teacher-card "> 
           <img src="${element.image}" alt="${element.Name}" />
           <h2 >${element.Name}</h2>
           <h5>${element.branch_name}</h5>
        </div>
`;
});

document.querySelector(".teachers-card-position").innerHTML = InstructorsHTML;
// Instructors Section JS End

// Arrow Key js Start

const upArrow = document.getElementById("uparrow");

window.onscroll = function () {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    upArrow.style.display = "block";
  } else {
    upArrow.style.display = "none";
  }
};

upArrow.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Arrow Key js End
