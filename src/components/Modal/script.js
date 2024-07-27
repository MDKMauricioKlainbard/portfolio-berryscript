const btnClose = document.querySelectorAll(".button-close");
const overlays = document.querySelectorAll(".overlay");
const modals = document.querySelectorAll(".modal");

const closeModal = (modalId) => {
    document.querySelector(`#overlay-${modalId}`).classList.add("hidden");
    document.querySelector(`#modal-${modalId}`).classList.add("hidden");
}

btnClose.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal-id");
        closeModal(modalId);
    });
});

overlays.forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
        const modalId = overlay.id.replace("overlay-", "");
        closeModal(modalId);
    });
});


document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modals.forEach((modal) => {
            if (!modal.classList.contains("hidden")) {
                const modalId = modal.id.replace("modal-", "");
                closeModal(modalId);
            }
        });
    }
});

