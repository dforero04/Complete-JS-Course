'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

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

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed Component
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

// Menu Fade Animation
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

// Sticky Navigation
// TODO: Research IntersectionObserver more
const stickyNav = function (entries) {
  const [entry] = entries;
  !entry.isIntersecting
    ? appBar.classList.add('sticky')
    : appBar.classList.remove('sticky');
};

const header = document.querySelector('.header');
const appBarHeight = appBar.getBoundingClientRect().height;

const headerObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${appBarHeight}px`,
});
headerObs.observe(header);
