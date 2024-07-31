const aboutNav = document.getElementById("about-nav");
const projectNav = document.getElementById("project-nav");
const skillNav = document.getElementById("skill-nav");
const contactNav = document.getElementById("contact-nav");

const sections = document.querySelectorAll("section");  

const header = document.querySelector(".header");
const titlePortfolio = document.querySelector(".title-portfolio")
const nav = header.querySelector("nav");
const headerHeight = header.offsetHeight;
const navHeight = nav.offsetHeight;

const initialPaddingTop = parseFloat(window.getComputedStyle(titlePortfolio).paddingTop);
const initialPaddingBottom = parseFloat(window.getComputedStyle(titlePortfolio).paddingBottom);
const initialHeight = titlePortfolio.offsetHeight;
let mainLocation = window.scrollY;

const allNavItems = {
    aboutNav,
    projectNav,
    skillNav,
    contactNav,
}

for (let key in allNavItems) {
    allNavItems[key].addEventListener("click", () => {
        const sectionKey = "." + key.replace("Nav", "-section")
        const section = document.querySelector(sectionKey)
        window.scrollTo({
            top: section.offsetTop - navHeight - 20,
            behavior: 'smooth'
        })
    })
}

window.addEventListener('scroll', ()=>{
    header.style.top = `-${headerHeight-navHeight}px`
})

window.addEventListener('DOMContentLoaded', () => {
    if(window.scrollY > 0) header.style.top = `-${headerHeight-navHeight}px`
})

