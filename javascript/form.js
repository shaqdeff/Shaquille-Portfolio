const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMessage = document.getElementById('err-msg');
form.addEventListener('submit', (event) => {
              event.preventDefault();
              if (email.value === email.value.toLowerCase()) {
                            form.submit();
              } else {
                            errorMessage.innerText = 'Please type your e-mail in lowercase';
              }
});