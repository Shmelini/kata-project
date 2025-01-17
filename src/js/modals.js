const callBtns = document.querySelectorAll('.button-call')
const callModal = document.querySelector('.modal-call')
const mobileMenu = document.querySelector('.mobile-menu__block')

callBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    callModal.classList.add('modal--opened')
    document.body.style.overflowY = 'hidden'
    if (!mobileMenu.classList.contains('mobile-menu--closed')) {
      mobileMenu.classList.add('mobile-menu--closed')
    }
  })
})

const feedbackBtns = document.querySelectorAll('.button-feedback')
const feedbackModal = document.querySelector('.modal-feedback')

feedbackBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    feedbackModal.classList.add('modal--opened')
    document.body.style.overflowY = 'hidden'
    if (!mobileMenu.classList.contains('mobile-menu--closed')) {
      mobileMenu.classList.add('mobile-menu--closed')
    }
  })
})

const modalCloseBtns = document.querySelectorAll('.modal__button-close')

modalCloseBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    document.body.style.overflowY = 'scroll'
    btn.parentNode.classList.remove('modal--opened')
  })
})