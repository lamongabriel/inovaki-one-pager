import '../sass/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])
import '../../node_modules/swiper/swiper-bundle.css'

import AOS from 'aos'
import '../../node_modules/aos/dist/aos.css'

const swiperCases = new Swiper('.cases', {
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

const swiperServices = new Swiper('.services-area', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true'
  }
})

AOS.init()
