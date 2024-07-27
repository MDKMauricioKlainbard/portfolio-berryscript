const skillContainer = document.querySelector(".skills-container");
let theme = localStorage.getItem("theme");
const toggle = document.querySelector(".toggle")

import { formattedLightBadges } from "./svg";

const createContainers = () => {
    theme = localStorage.getItem("theme")
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

        skillContainer.innerHTML = ""
    }
}

createContainers();

toggle.addEventListener("click", createContainers)

const openModal = (modalId) => {
    document.querySelector(`#overlay-${modalId}`).classList.remove("hidden");
    document.querySelector(`#modal-${modalId}`).classList.remove("hidden");
}










