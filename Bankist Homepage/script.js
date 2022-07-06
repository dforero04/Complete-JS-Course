'use strict';

window.addEventListener('beforeunload', function (e) {
  this.scrollTo(0, 0);
});

/////////////////////////////////////////////////
// Modal window
/////////////////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////
// Smooth Scrolling
/////////////////////////////////////////////////

// Learn More button
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

// Logo Button
const btnLogo = document.querySelector('.nav__logo');
const topPage = document.querySelector('.header');
btnLogo.addEventListener('click', function (e) {
  e.preventDefault();
  topPage.scrollIntoView({ behavior: 'smooth' });
});

// Nav Bar Buttons
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/////////////////////////////////////////////////
// Tabbed Component
/////////////////////////////////////////////////
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();

  const clicked = e.target.closest('.operations__tab');
  // Guard clause
  if (!clicked) return;

  tabs.forEach(tab => {
    tab.classList.contains(`operations__tab--${clicked.dataset.tab}`)
      ? tab.classList.add('operations__tab--active')
      : tab.classList.remove('operations__tab--active');
  });

  tabsContent.forEach(content => {
    content.classList.contains(`operations__content--${clicked.dataset.tab}`)
      ? content.classList.add('operations__content--active')
      : content.classList.remove('operations__content--active');
  });
});

/////////////////////////////////////////////////
// Menu Fade Animation
/////////////////////////////////////////////////
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
const appBar = document.querySelector('.nav');
appBar.addEventListener('mouseover', handleHover.bind(0.5));
appBar.addEventListener('mouseout', handleHover.bind(1));

/////////////////////////////////////////////////
// Sticky Navigation
// TODO: Research IntersectionObserver more
// Entry = the thresholds passed in
/////////////////////////////////////////////////
const stickyNav = function (entries) {
  const [entry] = entries;
  !entry.isIntersecting
    ? appBar.classList.add('sticky')
    : appBar.classList.remove('sticky');
};

const appBarHeight = appBar.getBoundingClientRect().height;

const headerObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${appBarHeight}px`,
});
headerObs.observe(topPage);

/////////////////////////////////////////////////
// Reveal Sections on Scroll
/////////////////////////////////////////////////
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};
const sectionObs = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  sectionObs.observe(section);
  section.classList.add('section--hidden');
});

/////////////////////////////////////////////////
// Lazy Loading Images
/////////////////////////////////////////////////
const allFeaturesImages = document.querySelectorAll('.features__img');

const lazyLoadImage = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  // Use the load Event Listener for images to make sure they are properly loaded
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObs = new IntersectionObserver(lazyLoadImage, {
  root: null,
  threshold: 0.5,
});

allFeaturesImages.forEach(img => {
  imgObs.observe(img);
});

/////////////////////////////////////////////////
// Slider Component
/////////////////////////////////////////////////
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
const numSlides = slides.length;
let currentSlide = 0;

const createDots = function () {
  slides.forEach((_, index) =>
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot ${
        index === currentSlide ? 'dots__dot--active' : ''
      }" data-slide="${index}"></button>`
    )
  );
};

const goToSlide = function (slide) {
  slides.forEach((s, index) => {
    s.style.transform = `translateX(${100 * (index - slide)}%)`;
    if (index === slide) {
      dotContainer
        .querySelector(`[data-slide="${index}"]`)
        .classList.add('dots__dot--active');
    } else {
      dotContainer
        .querySelector(`[data-slide="${index}"]`)
        .classList.remove('dots__dot--active');
    }
  });
};

const performSlide = function (direction) {
  if (this === 'left' || direction === 'left') {
    currentSlide === 0 ? (currentSlide = numSlides - 1) : currentSlide--;
  } else if (this === 'right' || direction === 'right') {
    currentSlide === numSlides - 1 ? (currentSlide = 0) : currentSlide++;
  }
  goToSlide(currentSlide);
};

createDots();
goToSlide(0);

btnLeft.addEventListener('click', performSlide.bind('left'));
btnRight.addEventListener('click', performSlide.bind('right'));
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') performSlide('left');
  if (e.key === 'ArrowRight') performSlide('right');
});
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    currentSlide = +slide;
    goToSlide(currentSlide);
  }
});
