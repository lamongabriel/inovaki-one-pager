import '../sass/style.scss'
import Swiper from 'swiper'
import 'swiper/css'
import ScrollReveal from 'scrollreveal'

window.sr = ScrollReveal()

const swiper = new Swiper('.cases', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true'
  }
})

window.sr.reveal(
  `
  introduction .title, .introduction .text,
  .who-we-are,
  .sucess-cases,
  .send-us-a-message .contacts, .send-us-a-message .social-media,
  .partners`,
  {
    delay: 100,
    reset: true,
    origin: 'right'
  }
)
