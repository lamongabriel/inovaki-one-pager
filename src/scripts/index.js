import '../sass/style.scss'

// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css'

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
