"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3500
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
}); //datepicker日期套件

var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  buttonClass: 'btn primary',
  nextArrow: '>',
  prevArrow: '<',
  todayHighlight: true,
  //highlight 今天的日期
  // weekStart:0,
  autohide: true //選完日期後會自動關閉

});
//# sourceMappingURL=all.js.map
