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

//

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

// styles

message.style.backgroundColor = '#706c5f';
message.style.borderRadius = '8px';
message.style.color = '#FFFFFF';
message.style.width = '120%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 10 + 'px';

const logo = document.querySelector('.nav__logo');

const link = document.querySelector('.twitter-link');

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  /*const s1corords = section1.getBoundingClientRect();
   console.log(s1corords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);
*/
  // Scrolling kalkoreraing för hela scrolen

  /* window.scrollTo(
    s1corords.left + window.screenX,
    s1corords.top + window.scrollY
  );

  window.scrollTo({
    left: s1corords.left + window.screenX,
    top: s1corords.top + window.scrollY,
    behavior: 'smooth',
  });
  */
  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

const alertH1 = () => {
  alert('mouse');
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
