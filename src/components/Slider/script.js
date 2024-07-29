import Glide from '@glidejs/glide'

const carousel = document.querySelector(".glide-carousel");

const config = {
    type: 'carousel',
    perView: 2,
    autoplay: 5000,
    hoverpause: true,
    keyboard: true,
    animationDuration: 1500,
    animationTimingFunc: 'ease-in-out',
    focusAt: 'center',
    breakpoints: {
        767: {perView: 2}
    }
}

new Glide('.glide',config).mount()