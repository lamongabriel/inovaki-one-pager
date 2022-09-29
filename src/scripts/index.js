import '../sass/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])
import '../../node_modules/swiper/swiper-bundle.css'

import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'

const swiper = new Swiper('.cases', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: true,

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

AOS.init()
