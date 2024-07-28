import Glide from '@glidejs/glide'

const config = {
    type: 'carousel',
    perView: 2,
    autoplay: 5000,
    hoverpause: true,
    keyboard: true,
    animationDuration: 1500,
    animationTimingFunc: 'ease-in-out',
    
    breakpoints: {
        767: {perView: 1}
    }
}

new Glide('.glide', config).mount()