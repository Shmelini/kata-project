function hideExtraBrands() {
    const swipers = document.querySelectorAll('.swiper-brands')
    swipers.forEach((swiper) => {
        const brands = swiper.querySelectorAll('.swiper-slide')
        if (window.innerWidth < 1024) {
            if (swiper.classList.contains('swiper-tech')) {
                for (let i = 3; i < brands.length; i++) {
                    brands[i].classList.add('hidden');
                    setTimeout(() => { brands[i].style.display = 'none' }, 100)
                }
            }
            else {
                for (let i = 6; i < brands.length; i++) {
                    brands[i].classList.add('hidden');
                    setTimeout(() => { brands[i].style.display = 'none' }, 100)
                }
            }
        }
        else if (window.innerWidth >= 1024) {
            if (swiper.classList.contains('swiper-tech')) {
                for (let i = 4; i < brands.length; i++) {
                    brands[i].classList.add('hidden');
                    setTimeout(() => { brands[i].style.display = 'none' }, 100)
                }
            }
            else {
                for (let i = 8; i < brands.length; i++) {
                    brands[i].classList.add('hidden');
                    setTimeout(() => { brands[i].style.display = 'none' }, 100)
                }
            }
        }
    })
}

if (window.innerWidth >= 768) {
    document.addEventListener('DOMContentLoaded', hideExtraBrands);
}

const showMoreButtons = document.querySelectorAll('.button-spoiler');

showMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('button-spoiler--closed');
        button.classList.toggle('button-spoiler--opened');

        if (button.classList.contains('button-spoiler--opened')) {
            button.parentNode.querySelectorAll('.swiper-brands__swiper-wrapper .hidden').forEach((brand) => {
                setTimeout(() => { brand.style.display = 'block' }, 1)
                setTimeout(() => { brand.classList.remove('hidden') }, 10)
            })
            button.querySelector('.button-spoiler__text').textContent = 'Скрыть';
        }
        else if (button.classList.contains('button-spoiler--closed')) {
            button.querySelector('.button-spoiler__text').textContent = 'Показать ещё';
            hideExtraBrands();
        }
    })
})