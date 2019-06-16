// Init Swiper
var swiper = new Swiper('.swiper-container', {
  mousewheel:true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Enable debugger
  debugger: false,
});