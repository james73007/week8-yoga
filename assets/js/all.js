"use strict";

AOS.init({
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 1200,
  // values from 0 to 3000, with step 50ms
  once: false // whether animation should happen only once - while scrolling down

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

var commentSwiper = document.querySelector('.commentSwiper');

if (commentSwiper) {
  var _swiper = new Swiper(".commentSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 2500
    },
    grid: {
      rows: 3,
      fill: 'row'
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        grid: {
          rows: 2
        }
      },
      992: {
        slidesPerView: 3,
        rows: 2
      }
    },
    navigation: {
      prevEl: ".swiper-prev",
      nextEl: ".swiper-next"
    }
  });
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      grid: {
        rows: 2
      }
    },
    992: {
      slidesPerView: 3,
      rows: 2
    }
  }
});
$('.re').on("click", function () {
  $('.course-level').slideUp().slideDown();
});
$('.re').on("click", function () {
  $('.course-level').slideUp().slideDown();
});
$(document).ready(function () {
  // 在這撰寫javascript程式碼
  $('.course-level').hide();
  $('.hide').hide();
});
//# sourceMappingURL=all.js.map
