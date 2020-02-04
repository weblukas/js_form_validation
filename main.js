const form = document.querySelector('form');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const button = document.querySelector('button');
const messageOutput = document.querySelector('.message');


console.log(messageOutput);


form.addEventListener('submit', e => {
 e.preventDefault();
 validation();
})

function validation() {

 if (username.value === '' || username.value == null) {
     messageOutput.innerHTML = "Username can't be blank"
 }

 if (password.value.length <=5) {
    messageOutput.innerHTML = "Password must be 5 or more characters"
 }
}