/*
スライドメニュー
================================================ */
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
  duration: 1400,
  easing: 'ease',
  fill: 'forwards',
};

// メニューを開く
menuOpen.addEventListener('click', () => {
  menuPanel.animate({translate: ['100vw', 0]}, menuOptions);

  // リンクをひとつずつ順に表示
  menuItems.forEach((menuItem, index) => {
    //console.log(`${index}番目のリスト`);
    menuItem.animate(
      {
        opacity: [0, 1],
        translate: ['2rem', 0],
      },
      {
        duration: 1000,
        delay: 0 * index,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  });
});

// メニューを閉じる
menuClose.addEventListener('click', () => {
  menuPanel.animate({translate: [0, '100vw']}, menuOptions);
  menuItems.forEach((menuItem) => {
    menuItem.animate({opacity: [1, 0]}, menuOptions);
  });
});

const swiper = new Swiper('.sample-slider', {
  loop: true,                     
  slidesPerView: 2,
  centeredSlides : true,
  spaceBetween: 20, 
  pagination: {                       
      el: '.up-pagination',
      clickable: true,
  },
})

const swiperSecond = new Swiper('.sample-slider-second', {
  loop: true,                       
  slidesPerView: 2,
  centeredSlides : true,
  spaceBetween: 20, 
  pagination: {                      
      el: '.down-pagination',
      clickable: true,
  },
})