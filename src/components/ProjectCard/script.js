const openModal = (modalId) => {
    document.querySelector(`#overlay-${modalId}`).classList.remove("hidden");
    document.querySelector(`#modal-${modalId}`).classList.remove("hidden");
}

const allCards = document.querySelectorAll(".project-card-container")

allCards.forEach((card)=>{
    const modalKey = card.id.replace("card-", "")
    card.addEventListener("click", ()=>{
        openModal(modalKey)
    })
})

