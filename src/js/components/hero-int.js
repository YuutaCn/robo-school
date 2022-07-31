const women = document.querySelector('.women');
const womenPic = document.querySelector('.women__pic-2');
const womenElepse = document.querySelector('.women__elepse');
const btnInt = document.querySelectorAll('.btn-int')

womenPic.onmouseover = function () {
  womenElepse.style.transition = 'all 400ms var(--default-cubic)';
  womenPic.style.transition = 'all 400ms var(--default-cubic)';
  womenElepse.style.background = 'rgba(217, 217, 217, 0.8)';

};
womenPic.onmouseleave = function () {
  womenElepse.style.background = 'transparent';
};

// womenPic.style.transform = 'translateY(0%)'

btnInt.forEach(el => {
  el.onmouseover = function () {
    el.style.transition = 'all 400ms var(--default-cubic)';
    el.style.transform = 'scale(1.05, 1.05)';
    el.style.border = '2px solid var(--accent-color)';
    el.style.background = 'transparent';
  };
  el.onmouseleave = function () {
    el.style.background = 'var(--accent-color)';
    el.style.border = '0px solid var(--accent-color)';
    el.style.transform = 'scale(1, 1)';
  }

  el.addEventListener('click', () => {
    el.style.transition = 'all 100ms var(--default-cubic)';
    el.style.transform = 'scale(0.95, 0.95)';
    el.style.border = '0px solid var(--accent-color)';
    el.style.background = 'var(--accent-color)';
    setTimeout(() => {
      el.style.background = 'var(--accent-color)';
      el.style.border = '0px solid var(--accent-color)';
      el.style.transform = 'scale(1.05, 1.05)';
    }, 100)
  })
})


setTimeout(() => {
  women.style.transition = 'all 500ms var(--default-cubic)';
  women.style.transform = 'translatey(0%)'
}, 700)
