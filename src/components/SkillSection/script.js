const skillContainer = document.querySelector(".skills-container");
let theme = localStorage.getItem("theme");
const toggle = document.querySelector(".toggle")

import { formattedLightBadges, formattedDarkBadges } from "./svg";

const createContainers = () => {
    const theme = localStorage.getItem("theme");
    skillContainer.innerHTML = "";
    const MongoDB = "MongoDB"
    const Figma= "Figma";
    if (theme === "light") {
        for (let key in formattedLightBadges) {
            const container = document.createElement('div');
            container.innerHTML = formattedLightBadges[key];
            container.classList.add('badge-container');
            container.addEventListener("click", () => {
                openModal(key.toLowerCase().replace("light", "-badge"))
            })
            if(key === MongoDB+"Light") container.style = "transform: scale(0.6)"
            else if(key === Figma+"Light") container.style = "transform: scale(0.8)"
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
            if(key === MongoDB+"Dark") container.style = "transform: scale(0.6)"
            else if(key === Figma+"Dark") container.style = "transform: scale(0.8)"
            skillContainer.appendChild(container)
        }
    }
}

document.addEventListener('DOMContentLoaded', createContainers)

toggle.addEventListener("click", createContainers, false)

const openModal = (modalId) => {
    document.querySelector(`#overlay-${modalId}`).classList.remove("hidden");
    document.querySelector(`#modal-${modalId}`).classList.remove("hidden");
}










