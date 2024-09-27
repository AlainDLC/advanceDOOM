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

/*
const h1 = document.querySelector('h1');

// going down child

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.children);
h1.firstElementChild.style.color = 'purple';
h1.lastElementChild.style.color = 'green';

// going up parents

console.log(h1.parentElement);

h1.closest('h1').style.background = 'var(--color-primary)';

// side siblings

console.log(h1.previousSibling);
console.log(h1.previousElementSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(1.5)';
});
*/

/*
const initialCord = section1.getBoundingClientRect();

window.addEventListener('scroll', () => {
  if (this.window.scrollY > initialCord.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
*/

// InsterSection Observer API
/*
const section1 = document.querySelector('#section--1');

const obsCallabck = function (entries, obser) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallabck, obsOptions);
observer.observe(section1);
*/
