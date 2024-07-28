const skillContainer = document.querySelector(".skills-container");
let theme = localStorage.getItem("theme");
const toggle = document.querySelector(".toggle")

import { formattedLightBadges, formattedDarkBadges } from "./svg";

const createContainers = () => {
    theme = localStorage.getItem("theme")
    skillContainer.innerHTML = "";
    if (theme === "light") {
        for (let key in formattedLightBadges) {
            const container = document.createElement('div');
            container.innerHTML = formattedLightBadges[key];
            container.classList.add('badge-container');
            container.addEventListener("click", () => {
                openModal(key.toLowerCase().replace("light", "-badge"))
            })
            skillContainer.appendChild(container)
        }
    }
    if (theme === "dark") {

        for (let key in formattedDarkBadges) {
            const container = document.createElement('div');
            container.innerHTML = formattedDarkBadges[key];
            container.classList.add('badge-container');
            container.addEventListener("click", () => {
                openModal(key.toLowerCase().replace("dark", "-badge"))
            })
            skillContainer.appendChild(container)
        }
    }
}

createContainers();

toggle.addEventListener("click", createContainers)

const openModal = (modalId) => {
    document.querySelector(`#overlay-${modalId}`).classList.remove("hidden");
    document.querySelector(`#modal-${modalId}`).classList.remove("hidden");
}










