const loginForm = document.querySelector('.login-form').addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  if (email.value === '' || password.value.trim() === '') {
    alert('Please fill in all the fields!');
  } else {
    const loginFormValues = {
      email: email.value,
      password: password.value,
    };
    console.log(loginFormValues);
    e.currentTarget.reset();
  }
}
