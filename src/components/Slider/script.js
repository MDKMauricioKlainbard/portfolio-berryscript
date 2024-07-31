import EmblaCarousel from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

const rootNode = document.querySelector('.embla')
const viewportNode = rootNode.querySelector('.embla__viewport')
const prevButtonNode = rootNode.querySelector('.embla__prev')
const nextButtonNode = rootNode.querySelector('.embla__next')

const options = {
    loop: true,
    breakpoints: {
        '(min-width: 768px)': {
            slidesToScroll: 2,
        }
    }
}

Autoplay.globalOptions = {
    delay: 3000, 
    stopOnMouseEnter: true,
    stopOnInteraction: true,
}
const plugins = [Autoplay()]

const embla = EmblaCarousel(viewportNode, options, plugins)
prevButtonNode.addEventListener('click', embla.scrollPrev, false)
nextButtonNode.addEventListener('click', embla.scrollNext, false)