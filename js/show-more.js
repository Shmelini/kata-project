function hideExtraBrands() {
    const brands = document.querySelectorAll('.swiper-slide')

    if (window.innerWidth < 1024) {
        for (let i = 6; i < brands.length; i++) {
            brands[i].classList.add('hidden')
        }
    }
    else if (window.innerWidth >= 1024) {
        for (let i = 8; i < brands.length; i++) {
            brands[i].classList.add('hidden')
        }
    }
}

document.addEventListener('DOMContentLoaded', hideExtraBrands)

const showMoreButton = document.querySelector('.button-spoiler')

showMoreButton.addEventListener('click', () => {
    const hiddenBrands = document.querySelectorAll('.swiper-brands__swiper-wrapper .hidden')

    showMoreButton.classList.toggle('button-spoiler--closed');
    showMoreButton.classList.toggle('button-spoiler--opened');

    if (showMoreButton.classList.contains('button-spoiler--opened')) {
        hiddenBrands.forEach((brand) => {
            brand.classList.remove('hidden')
        })
        showMoreButton.querySelector('.button-spoiler__text').textContent = 'Скрыть'
    }
    else if (showMoreButton.classList.contains('button-spoiler--closed')) {
        showMoreButton.querySelector('.button-spoiler__text').textContent = 'Показать ещё'
        hideExtraBrands()
    }
})