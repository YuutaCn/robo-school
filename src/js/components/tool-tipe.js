const el = document.querySelector('.tooltip__btn');
const tooltip = document.querySelector('.tooltip__txt')

import { createPopper, right} from '@popperjs/core';
createPopper(el, tooltip, {
  placement: 'top-start',
});

el.onmouseover = function () {
  tooltip.style.transition = 'all 400ms var(--default-cubic)';
  tooltip.style.opacity = '1';
  tooltip.style.visibility = 'visible';

};
el.onmouseleave = function () {
  tooltip.style.opacity = '0';
  tooltip.style.visibility = 'hidden';
}

el.addEventListener('click', () => {
  tooltip.style.transition = 'all 400ms var(--default-cubic)';
  tooltip.style.opacity = '1';
  tooltip.style.visibility = 'visible';
})
