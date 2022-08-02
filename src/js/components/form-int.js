const formBtn = document.querySelector('.form__btn')

// footerBtn.addEventListener('')

formBtn.onmouseover = function () {
  formBtn.style.transition = 'all 400ms var(--default-cubic)';
  formBtn.style.transform = 'scale(1.02, 1.02)';
  formBtn.style.border = '2px solid var(--dark-color)';
  formBtn.style.background = 'transparent';
};
formBtn.onmouseleave = function () {
  formBtn.style.background = 'var(--dark-color)';
  formBtn.style.border = '0px solid var(--dark-color)';
  formBtn.style.transform = 'scale(1, 1)';
}

formBtn.addEventListener('click', () => {
  formBtn.style.transition = 'all 100ms var(--default-cubic)';
  formBtn.style.transform = 'scale(0.97, 0.97)';
  formBtn.style.border = '0px solid var(--dark-color)';
  formBtn.style.background = 'var(--dark-color)';
  setTimeout(() => {
    formBtn.style.background = 'var(--dark-color)';
    formBtn.style.border = '0px solid var(--dark-color)';
    formBtn.style.transform = 'scale(1.02, 1.02)';
  }, 100)
})
