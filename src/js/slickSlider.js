import $ from "jquery";
import './slick'
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $('.arrow-box'),
    prevArrow: '<button id="prev" type="button" class="btn-custom  "><svg class="arrow-icon"><use href="../src/images/symbol-defs.svg#icon-chevron-left"></use></svg></button>', /*<span class="right_custom_arrow">right</span> */
    nextArrow: '<button id="next" type="button" class=" btn-custom"><svg class="arrow-icon"><use href="../src/images/symbol-defs.svg#icon-chevron-right"></use></svg></button>',
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
    slidesToScroll: 1,
          }
        }]
  });