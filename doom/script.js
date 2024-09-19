'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////
//PAGA NAV //
const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

/*

document.querySelectorAll('.nav__link').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    console.log(id);
  });
});
*/

// 1. Add event listner to common parant element
// 2. Determine what elemet originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Mathing strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////
///////////////////////////
// styles

/*
message.style.backgroundColor = '#706c5f';
message.style.borderRadius = '8px';
message.style.color = '#FFFFFF';
message.style.width = '120%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';

const logo = document.querySelector('.nav__logo');

const link = document.querySelector('.twitter-link');
*/
/*
const h1 = document.querySelector('h1');

const alertH1 = () => {
  alert('mouse');
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
*/
/*
const randomInts = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = () =>
  `rgb(${randomInts(0, 255)},${randomInts(0, 255)},${randomInts(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});
document.querySelector('.nav__links').addEventListener('click', function () {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function () {
  this.style.backgroundColor = randomColor();
});


const header = document.querySelector('header');

const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use coockies for learning purpose'
message.innerHTML =
  'We use coockies for learning purpose  marawwaa <button class="btn btn--close-cookie">Got it!</button> ';
header.append(message);
//header.append(message)

//header.append(message.cloneNode(true));

// delete element

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});
*/
