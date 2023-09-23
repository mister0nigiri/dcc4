const mySwiper = new Swiper('.swiper', {

  effect: 'fade', // フェードモードにする（デフォルトは 'slide'）
  fadeEffect: {
    crossFade: true, // クロスフェードを有効にする（フェードモードの場合 true 推奨）
  },

  slidesPerView: 1, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
  spaceBetween: 0, // スライド間の余白（px）
  centeredSlides: true, // アクティブなスライドを中央に配置する

  loop: true,  // 無限ループさせる
  loopAdditionalSlides: 1, // 無限ループさせる場合に複製するスライド数

  speed: 300, // スライドアニメーションのスピード（ミリ秒）
 
 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination', // ページネーション要素のクラス
    clickable: true, // クリックによるスライド切り替えを有効にする
    type: 'bullets' // 'bullets'（デフォルト） | 'fraction' | 'progressbar'
  },
 
 
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
  breakpoints: { // ブレークポイント
    600: { // 画面幅600px以上で適用
      slidesPerView: 3,
    },
      1025: { // 画面幅1025px以上で適用
      slidesPerView: 3,
      spaceBetween: 32,
    }
  },
});