// banner slider fade
$(document).ready(function () {
  $('.slider-list').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
    responsive: [
      {
        breakpoint: 1200, // max-width = 1200px
        settings: {
          arrows: false
        }
      },
    ]
  })
});
// slider-course 
$(document).ready(function () {
  $('.course-slider ').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `<button type='button' class='slick-left slick-arrow-course'><i class="fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-right slick-arrow-course'><i class="fa-solid fa-angle-right"></i></button>`,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      }
    ]
  })
});
// our-source
// $(document).ready(function () {
//   $('.our-course-slider').slick({
//     // mobileFirst: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     infinite: true,
//     // autoplay: true,
//     autoplaySpeed: 2000,
//     prevArrow: `<button type='button' class='slick-source-prev slick-arrow-our-course'><i class="fa-solid fa-angle-left"></i></button>`,
//     nextArrow: `<button type='button' class='slick-source-next slick-arrow-our-course'><i class="fa-solid fa-angle-right"></i></button>`,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//       {
//         breakpoint: 540,
//         settings: {
//           slidesToShow: 1,
//         },
//       }
//     ]
//   })
// });

// feedback
$(document).ready(function () {
  $('.feedback-slider').slick({
    // mobileFirst: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      }
    ]
  })
});

// logo
$(document).ready(function () {
  $('.logo-contact').slick({
    // mobileFirst: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      }
    ]
  })
})