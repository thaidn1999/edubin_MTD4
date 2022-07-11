// remove back-to-top
const backToTopRegiter = document.querySelector('.back-to-top');
backToTopRegiter.style.display = 'none';
// validate
const formRegister = document.querySelector('#form-register');
const inputs = formRegister.querySelectorAll('input[name]');

const regex = {
  text: /^[a-z ,.'-]+$/i,
  userName: /^(?=[a-zA-Z0-9.]{6,20}$)(?!.*[.]{2})[^.].*[^.]$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  // Minimum eight characters, at least one letter and one number:
};

function removeRegex(ele) {
  ele.style = 'border-color:#22C55E'
}

formRegister.onsubmit = (e) => {
  e.preventDefault();
  let passWord = {
    string: '',
    isPassword: true,
  };

  inputs.forEach((inp) => {

    removeRegex(inp);

    const { type, name, value } = inp;
    // check password
    if (name === 'passWord') passWord.string = value;

    if (name === 'confirmPassWord') {
      if (value.trim() == '' || !passWord.isPassword || value !== passWord.string) {
        inp.style = 'border-color:#EF4444'
      }
      else {
        inp.style = 'border-color:#22C55E'
      }
      return
    }
    if (!regex[type].test(value)) {
      inp.style = 'border-color:#EF4444'
      if (name === 'passWord') {
        passWord.isPassword = false;
      }
    }
    else {
      inp.style = 'border-color:#22C55E'
    }
  });
};