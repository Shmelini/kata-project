import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';



if (innerWidth < 768) {
    const brandsSwiper = new Swiper('.swiper-brands', {
        modules: [
            Pagination
        ],
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: '.swiper-brands__pagination',
            clickable: true
        },
        slidesPerView: 'auto',
        spaceBetween: 16,
    })

    const priceSwiper = new Swiper('.swiper-price', {
        modules: [
            Pagination
        ],
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: '.swiper-brands__pagination',
            clickable: true
        },
        slidesPerView: 'auto',
        spaceBetween: 16,
    })
}