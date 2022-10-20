document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

//   accordions.forEach(el => {
//     el.addEventListener('click', (e) => {
//       const self = e.currentTarget;
//       const control = self.querySelector('.accordion-control');
//       const content = self.querySelector('.accordion-content');

//       self.classList.toggle('open');

//       if (self.classList.contains('open')) {
//         control.setAttribute('aria-expanded', true);
//         control.setAttribute('aria-hidden', false);
//       } else {
//         control.setAttribute('aria-expanded', false);
//         control.setAttribute('aria-hidden', true);
//       }
//     });
//   });
// });

$(function () {
  $(".accordion").accordion({
    collapsible: true,
    active: 0,
    heightStyle: "content"
  });
});

});
