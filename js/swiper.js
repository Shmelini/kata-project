if (innerWidth < 768) {
    const brandsSwiper = new Swiper('.swiper-brands', {
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: '.swiper-brands__pagination'
        },
        slidesPerView: 'auto',
        spaceBetween: 16,
    })
}