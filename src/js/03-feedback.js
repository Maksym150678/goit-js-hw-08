import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const KEY = 'feedback-form-state';

const chekingLS = () => {
  const userDataFromLS = localStorage.getItem(KEY);

  if (!userDataFromLS) {
    return;
  }

  const userValue = JSON.parse(userDataFromLS);

  const {email, message} = formEl.elements;
  email.value = userValue.email;
  message.value = userValue.message;
};

const onInput = event => {
    const {email, message} = formEl.elements;
    const userData = {email: email.value, message: message.value};

    localStorage.setItem(KEY, JSON.stringify(userData));
};

const onSubmit = event => {
    event.preventDefault();

    console.log(JSON.parse(localStorage.getItem(KEY)));
    localStorage.removeItem(KEY);
    event.currentTarget.reset();
};

formEl.addEventListener("input", throttle(onInput, 500));
formEl.addEventListener("submit", onSubmit);



chekingLS();

