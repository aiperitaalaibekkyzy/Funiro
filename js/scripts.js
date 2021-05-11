// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".header-burger-menu__nav");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("active");
  // Do something else, like open/close menu
});


new Swiper('.banner-swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    1146: {
      slidesPerView: 1
    }
  }
});

new Swiper('.inspiration-swiper-container'), {
  loop: true,
  slidesPerView: 2.1,
  spaceBetween: 25,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2000,
  },
}

new Swiper('.tips-swiper-container'), {
  loop: true,
  slidesPerView: 2.5,
  spaceBetween :20,
  loopedSlides: 3,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}