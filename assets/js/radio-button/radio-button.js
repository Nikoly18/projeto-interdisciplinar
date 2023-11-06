const inputsRadioCriado = document.querySelectorAll('[data-radio-criado]');

inputsRadioCriado.forEach(input => {
  input.addEventListener('click', () => {
    const inputClicado = input.querySelector('input');

    inputClicado.checked = true;
  });
});
