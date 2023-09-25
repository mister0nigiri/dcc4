const swiper = new Swiper('.sample-slider', {
  loop: true,                         //ループ
  slidesPerView: 2,
  centeredSlides : true,
  spaceBetween: 20, 
  pagination: {                       //ページネーション（ドット）
      el: '.up-pagination',
      clickable: true,
  },
})

const swiperSecond = new Swiper('.sample-slider-second', {
  loop: true,                         //ループ
  slidesPerView: 2,
  centeredSlides : true,
  spaceBetween: 20, 
  pagination: {                       //ページネーション（ドット）
      el: '.down-pagination',
      clickable: true,
  },
})