let logo = document.querySelectorAll('.logo');
let phone = document.querySelectorAll('.phone')
let navItems = document.querySelectorAll('.nav__item')


logo.forEach(el => {
  el.onmouseover = function () {
    el.style.transition = 'all 400ms var(--default-cubic)';
    el.style.transform = 'translateX(10px)';
  };
  el.onmouseleave = function () {
    el.style.transform = 'translateX(0px)';
  }
});

phone.forEach(el => {
  el.onmouseover = function () {
    el.style.transition = 'all 400ms var(--default-cubic)';
    el.style.transform = 'translateX(-10px)';
  };
  el.onmouseleave = function () {
    el.style.transform = 'translateX(0px)';
  }
});

navItems.forEach((el) => {
  el.onmouseover = function () {
    el.style.transition = 'all 400ms var(--default-cubic)';
    el.style.transform = 'translateY(-3px) scale(1.05, 1.05)';

  }
});

navItems.forEach((el) => {
  el.onmouseleave = function () {
    el.style.transition = 'all 400ms var(--default-cubic)';
    el.style.transform = 'translateY(0px) scale(1, 1)'
  }
});
