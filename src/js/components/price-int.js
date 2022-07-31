const priceElement = document.querySelectorAll('.price-element');
const priceElementH3 = document.querySelectorAll('.price-element__h3');
const priceElementP = document.querySelectorAll('.price-element__p');
const priceElementSpan = document.querySelectorAll('.price-element__span');

const priceElement2 = document.querySelectorAll('.price-element-2');
const priceElementH32 = document.querySelectorAll('.price-element__h3-2');
const priceElementP2 = document.querySelectorAll('.price-element__p-2');
const priceElementSpan2 = document.querySelectorAll('.price-element__span-2');

const priceElement3 = document.querySelectorAll('.price-element-3');
const priceElementH33 = document.querySelectorAll('.price-element__h3-3');
const priceElementP3 = document.querySelectorAll('.price-element__p-3');
const priceElementSpan3 = document.querySelectorAll('.price-element__span-3');



priceElement.forEach(el => {
  el.onmouseover = function () {
    el.style.transition = 'all 400ms var(--default-cubic)';
    el.style.transform = 'scale(1.05, 1.05)';
    el.style.background = 'var(--dark-color)';
    priceElementH3.forEach(i => {
      i.style.color = 'var(--light-color)';
    });
    priceElementP.forEach(i => {
      i.style.color = 'var(--light-color)';
    });
    priceElementSpan.forEach(i => {
      i.style.color = 'var(--light-color)';
    });
  };
  el.onmouseleave = function () {
    el.style.transition = 'all 400ms var(--default-cubic) 200ms';
    el.style.transform = 'scale(1, 1)';
    el.style.background = 'transparent';
    priceElementH3.forEach(i => {
      i.style.transition = 'all 400ms var(--default-cubic) 200ms';
      i.style.color = 'var(--dark-color)';
    });
    priceElementP.forEach(i => {
      i.style.transition = 'all 400ms var(--default-cubic) 200ms';
      i.style.color = 'var(--dark-color)';
    });
    priceElementSpan.forEach(i => {
      i.style.transition = 'all 400ms var(--default-cubic) 200ms';
      i.style.color = 'var(--dark-color)';
    });
  }
});

priceElement2.forEach(el => {
  el.onmouseover = function () {
    el.style.transition = 'all 400ms var(--default-cubic)';
    el.style.transform = 'scale(1.05, 1.05)';
    el.style.background = 'var(--dark-color)';
    priceElementH32.forEach(i => {
      i.style.color = 'var(--light-color)';
    });
    priceElementP2.forEach(i => {
      i.style.color = 'var(--light-color)';
    });
    priceElementSpan2.forEach(i => {
      i.style.color = 'var(--light-color)';
    });
  };
  el.onmouseleave = function () {
    el.style.transition = 'all 400ms var(--default-cubic) 200ms';
    el.style.transform = 'scale(1, 1)';
    el.style.background = 'transparent';
    priceElementH32.forEach(i => {
      i.style.transition = 'all 400ms var(--default-cubic) 200ms';
      i.style.color = 'var(--dark-color)';
    });
    priceElementP2.forEach(i => {
      i.style.transition = 'all 400ms var(--default-cubic) 200ms';
      i.style.color = 'var(--dark-color)';
    });
    priceElementSpan2.forEach(i => {
      i.style.transition = 'all 400ms var(--default-cubic) 200ms';
      i.style.color = 'var(--dark-color)';
    });
  }
});

priceElement3.forEach(el => {
  el.onmouseover = function () {
    el.style.transition = 'all 400ms var(--default-cubic)';
    el.style.transform = 'scale(1.05, 1.05)';
    el.style.background = 'var(--dark-color)';
    priceElementH33.forEach(i => {
      i.style.color = 'var(--light-color)';
    });
    priceElementP3.forEach(i => {
      i.style.color = 'var(--light-color)';
    });
    priceElementSpan3.forEach(i => {
      i.style.color = 'var(--light-color)';
    });
  };
  el.onmouseleave = function () {
    el.style.transition = 'all 400ms var(--default-cubic) 200ms';
    el.style.transform = 'scale(1, 1)';
    el.style.background = 'transparent';
    priceElementH33.forEach(i => {
      i.style.transition = 'all 400ms var(--default-cubic) 200ms';
      i.style.color = 'var(--dark-color)';
    });
    priceElementP3.forEach(i => {
      i.style.transition = 'all 400ms var(--default-cubic) 200ms';
      i.style.color = 'var(--dark-color)';
    });
    priceElementSpan3.forEach(i => {
      i.style.transition = 'all 400ms var(--default-cubic) 200ms';
      i.style.color = 'var(--dark-color)';
    });
  }
});
