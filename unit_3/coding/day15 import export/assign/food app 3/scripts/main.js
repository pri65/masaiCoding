import navbar from '../components/navbar.js.js';
let navbarBox = document.querySelector('#navbar');
navbarBox.innerHTML = navbar();
let user = JSON.parse(localStorage.getItem('signinData'));
let name = document.querySelector('#name');
name.innerText = user.username;