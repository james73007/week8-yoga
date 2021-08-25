
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      slidesPerColumn: 2,

      spaceBetween: 30
    },
   
  }
  
});