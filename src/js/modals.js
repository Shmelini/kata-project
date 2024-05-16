const callBtns = document.querySelectorAll('.button-call')
const callModal = document.querySelector('.modal-call')

callBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    callModal.classList.add('modal--opened')
    document.body.style.overflowY = 'hidden'
  })
})

const feedbackBtns = document.querySelectorAll('.button-feedback')
const feedbackModal = document.querySelector('.modal-feedback')

feedbackBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    feedbackModal.classList.add('modal--opened')
    document.body.style.overflowY = 'hidden'
  })
})

const modalCloseBtns = document.querySelectorAll('.modal__button--close')

modalCloseBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    document.body.style.overflowY = 'scroll'
    btn.parentNode.classList.remove('modal--opened')
  })
})