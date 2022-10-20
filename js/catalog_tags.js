document.addEventListener('DOMContentLoaded', function () {
//   document.querySelectorAll('.catalog__artist').forEach(function (howLink) {
//     howLink.addEventListener('click', function (event) {
//       const path = event.currentTarget.dataset.path

//       document.querySelectorAll('.catalog__artist').forEach(function (tabArtist) {
//         tabArtist.classList.remove('catalog__artist-active')
//       })
//       document.querySelector(`[data-artist="${path}"]`).classList.add('catalog__artist-active')


//       document.querySelectorAll('.tab-content').forEach(function (tabContent) {
//         tabContent.classList.remove('tab-content-active')
//       })
//       document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

//       // -------------------------------------

//       document.querySelectorAll('.languages__btn').forEach(function (tabFlag) {
//         tabFlag.classList.remove('languages__btn-active')
//       })
//       document.querySelector(`[data-flag="${path}"]`).classList.add('languages__btn-active')

//       // -------------------------------------

//     })
//   })
// })

// -----------------------------------------------------
function setTabs (dataPath, dataTarget) {
  const btns = document.querySelectorAll(`.js-tab-btn[${dataPath}]`);
  const contents = document.querySelectorAll(`.js-tab-content[${dataTarget}]`);

  btns.forEach((btn) => {
      btn.addEventListener('click', function (evt) {
          const path = this.getAttribute(dataPath);
          console.log(path);
          const target = document.querySelector(`.js-tab-content[${dataTarget}="${path}"]`);


          btns.forEach((currentBtn) => {
              currentBtn.classList.remove('is-active');
          });

          this.classList.add('is-active');

          contents.forEach((content) => {
              content.classList.remove('is-active');
          });

          target.classList.add('is-active');
      });
  });
}
setTabs('data-country', 'data-country-content');
setTabs('data-artist', 'data-artist-content');
setTabs('data-other-painters-path', 'data-other-painters-target');
//--------------------------------------------------------
});
