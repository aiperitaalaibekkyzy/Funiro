new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});

new Swiper('.inspiration-swiper-container'), {
  // loop: true,
  slidesPerView: 2.1,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
}

new Swiper('.tips-swiper-container'), {
  loop: true,
  slidesPerView: 3,
  spaceBetween :20,
  loopedSlides: 3,
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