const anaisCard = document.getElementById("anais-card")
const mauricioCard = document.getElementById("mauricio-card")
const aboutTitleSM = document.getElementById("about-title-sm")
const aboutTitleLG = document.getElementById("about-title-lg")
const resizeReverse = () => {
    if(window.innerWidth >= 768) {
        anaisCard.style = "flex-direction: row-reverse;"
        aboutTitleSM.style = "display: none"
        aboutTitleLG.style = "display: flex"
    }
    else {
        anaisCard.style = "flex-direction: column"
        aboutTitleSM.style = "display: flex"
        aboutTitleLG.style = "display: none"
    }
}
resizeReverse();

window.addEventListener("resize", resizeReverse)
