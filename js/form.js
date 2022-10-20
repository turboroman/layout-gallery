var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999 99 99");
im.mask(selector);

new JustValidate('.form__form', {
  colorWrong: '#D11616',

  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
      // strength: {
      //   custom: '[a-zA-Z\d]'
      // },
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    }
  },

  messages: {
    name: 'Недопустимый формат',
    tel: 'Укажите ваш телефон'
  },

  submitHandler: function(form) {
    let formData = new FormData(form);

    fetch('mail.php', {
      method: 'POST',
      body: formData
    }).then(() => {
      console.log('Отправлено');
      form.reset();
    })
    .catch(() => console.log('Ошибка'));
  }

})
