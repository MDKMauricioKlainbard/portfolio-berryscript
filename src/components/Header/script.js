const aboutNav = document.getElementById("about-nav");
const projectNav = document.getElementById("project-nav");
const skillNav = document.getElementById("skill-nav");
const contactNav = document.getElementById("contact-nav");

const sections = document.querySelectorAll("section");  

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

const allNavItems = {
    aboutNav,
    projectNav,
    skillNav,
    contactNav,
}

/*const observerOptions = {
    root: null,
    rootMargin: `${headerHeight}px 0px 0px 0px`,
    threshold: 0.4
};

const callbackObserver = (entries, options) => {
    entries.forEach(entry=>{
        const navKey = entry.target.classList[0].replace("-section", "Nav");
        if(entry.isIntersecting) {
            allNavItems[navKey].classList.add('section-is-visible')
        } else {
            allNavItems[navKey].classList.remove('section-is-visible')
        }
    })
}

const observer = new IntersectionObserver(callbackObserver, observerOptions)
sections.forEach(section=>observer.observe(section))
*/
for (let key in allNavItems) {
    allNavItems[key].addEventListener("click", () => {
        const sectionKey = "." + key.replace("Nav", "-section")
        const section = document.querySelector(sectionKey)
        window.scrollTo({
            top: section.offsetTop - headerHeight - 20,
            behavior: 'smooth'
        })
    })
}

