const form = document.querySelector('form');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const button = document.querySelector('button');





form.addEventListener('submit', e => {
 e.preventDefault();
 validation();
})

function validation() {
 if (username.value === '' || username.value == null) {
     console.log('duba');
 }
}