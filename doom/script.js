'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContanier = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

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

btnScrollTo.addEventListener('click', e => {
  section1.scrollIntoView({ behavior: 'smooth' });
});

/*
 gammal browser tec
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

// tabbar operations

tabsContanier.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  // active tab
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabContent.forEach(tab =>
    tab.classList.remove('operations__content--active')
  );

  clicked.classList.add('operations__tab--active');

  // active content

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// animation
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', e => {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', e => {
  handleHover(e, 1);
});

// sticy scroolevent coolt

const header = document.querySelector('.header');

const navHight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries; // samma som att skriva entris[0] alltså första index
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHight}px`,
});
headerObserver.observe(header);

// Reveal

const allSections = document.querySelectorAll('section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// lasy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// slider

const slides = document.querySelectorAll('.slide'); // Hämta alla slides
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const slider = document.querySelector('.slider');
const dotContainer = document.querySelector('.dots');
let currNr = 0;

const maxLength = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

const nextSlide = function () {
  if (currNr === maxLength - 1) {
    currNr = 0;
  } else {
    currNr++;
  }
  goToSlide(currNr);
};

const prevSlide = function () {
  if (currNr === 0) {
    currNr = maxLength - 1;
  } else {
    currNr--;
  }
  goToSlide(currNr);
};

const createDots = () => {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

const activateDot = slide => {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// keboardevnet

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') prevSlide();
});

dotContainer.addEventListener('click', e => {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
