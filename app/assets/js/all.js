// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   autoplay:{
//     delay:3500,
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//     992:{
//       slidesPerView: 4,
//       spaceBetween: 30
//     }
//   }
// });


//datepicker日期套件
const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
    buttonClass: 'btn primary',
  nextArrow: '>',
  prevArrow: '<',
  todayHighlight:true, //highlight 今天的日期
  // weekStart:0,
  autohide:true,   //選完日期後會自動關閉

}); 

//首頁 聽聽他們怎麼說 swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//瑜珈空間 swiper
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
 
//   autoplay:{
//     delay:3500,
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 3,
      
//     },
//     992:{
//       slidesPerView: 4,
      
//     }
//   }
// });
