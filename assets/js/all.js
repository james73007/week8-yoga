"use strict";

AOS.init({
  offset: 50,
  once: true
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

}); //首頁 聽聽他們怎麼說 swiper

var userRecommendSwiper = document.querySelector('.js-swiper-user-recommend');

if (userRecommendSwiper) {
  var swiper = new Swiper('.js-swiper-user-recommend', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 3,
      fill: 'column'
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row'
        },
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: 'row'
        },
        spaceBetween: 30
      }
    }
  });
}
//# sourceMappingURL=all.js.map
