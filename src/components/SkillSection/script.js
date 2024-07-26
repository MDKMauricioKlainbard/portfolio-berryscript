const skillContainer = document.querySelector(".skills-container");
let theme = localStorage.getItem("theme");
const toggle = document.querySelector(".toggle")

import { formattedLightBadges } from "./svg";

const createContainers = () => {
    theme = localStorage.getItem("theme")
    console.log(theme)
    if(theme === "light") {
        for (let key in formattedLightBadges) {
            const container = document.createElement('div');
            container.innerHTML = formattedLightBadges[key];
            container.classList.add('badge-container')
            skillContainer.appendChild(container)
        }
    }
    if(theme === "dark") {
        
        skillContainer.innerHTML=""
    }
}

createContainers();

toggle.addEventListener("click", createContainers)







