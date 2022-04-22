AOS.init({
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1200, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
});


//datepicker日期套件
// const elem = document.querySelector('input[name="datepicker"]');
// const datepicker = new Datepicker(elem, {
//     buttonClass: 'btn primary',
//   nextArrow: '>',
//   prevArrow: '<',
//   todayHighlight:true, //highlight 今天的日期
//   // weekStart:0,
//   autohide:true,   //選完日期後會自動關閉

// }); 

//首頁 聽聽他們怎麼說 swiper

const commentSwiper = document.querySelector('.js-commentSwiper');
console.log(commentSwiper);

if (commentSwiper) {
  const swiper = new Swiper(".js-commentSwiper", {
    slidesPerView: 1,
    spaceBetween: 8,
    autoplay: {
      delay: 2500,
    },
    grid: {
      rows: 3,    
      fill: 'row',
    },
    breakpoints: {
      768:{
        slidesPerView: 2.2,
        spaceBetween: 30,
        grid: {
          rows: 2, 
        },
      },
      992:{
        slidesPerView: 3,
        spaceBetween: 30,
        rows: 2, 
      },
    },
    navigation: {
      prevEl: ".swiper-prev",
      nextEl: ".swiper-next",
    },
  });
}

const teachersSwiper = document.querySelector('.js-swiper-teachersIntro');
if (teachersSwiper) {
  const swiper = new Swiper('.js-swiper-teachersIntro', {
    slidesPerView: 1,
    spaceBetween: 0,
    grid: {
      rows: 4,
      fill: 'column',
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row',
        },
      },
    },
  });
};

const courseRecommend = document.querySelector('.js-course-swiper');
console.log(courseRecommend);

if (courseRecommend) {
  const swiper = new Swiper('.js-course-swiper',{
    slidesPerView: 1.3,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      
      },
      992: {
        slidesPerView: 4.2,
        spaceBetween: 30,
        
      },
    },

  })
}