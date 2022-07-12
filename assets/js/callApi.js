const URL_API = "https://60d4611a61160900173cb070.mockapi.io/courses";
const listStart = document.querySelector('.list-rate-start');

const getCourses = async () => {
  try {
    await axios.get(`${URL_API}`)
      .then(res => renderCoure(res.data))
  } catch (error) {
    console.log(error);
  }
}

const rateStar = (count) => {
  let star = [];
  let noStar = [];
  let restStar = 5 - count;
  if (count) {
    for (let i = 0; i < count; i++) {
      star[i] =
        `
        <li>
          <i class="fa-solid fa-star inline-block mr-[1px] text-primary"></i>
        </li>
     `
    }
    for (let j = 0; j < restStar; j++) {
      noStar[j] = `
        <li>
          <i class="fa-regular fa-star inline-block mr-[1px] text-primary"></i>
        </li >
      `
    }
  }
  if (count == 0) {
    for (let i = 0; i < 5; i++) {
      noStar[i] =
        `
        <li>
          <i class="fa-regular fa-star inline-block mr-[1px] text-primary"></i>
        </li>
     `
    }
  }
  let htmls = [...star, ...noStar];
  return htmls.join('')
}

const renderCoure = (courses) => {
  var ourCource = document.querySelector(".our-course-slider");
  if (courses.length > 0) {
    var renderHTML = courses.map((course) => {
      return `
        <div class="our-source__item relative bg-white rounded-[5px] overflow-hidden mx-4">
          <div class="our-source__thumnail relative">
            <div class="our-source__image overflow-hidden relative">
              <a href="#" class="block hover:scale-110 transition-all duration-300 ease-linear" >
                <img
                    src="${course.image}"
                    alt=""
                    class="block w-full h-[230px] transition-all duration-300 ease-linear" />
              </a>
              <div class="our-source__price absolute right-0 top-6 w-full px-4" >
                <span class="inline-block float-left px-[10px] py-[4px] text-sm text-center text-white font-bold rounded-[5px] bg-secondary" >
                  ${course.level}
                </span>
                <span class="inline-block px-[10px] py-[4px] bg-white rounded-[5px] float-right" >
                  <i class="fa-solid fa-bookmark"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="our-source__content px-4 lg:px-2 xl:px-7 pt-5 pb-5">
            <ul class="list-rate-start inline-block flex text-[14px]">
              ${rateStar(+course.rate)}
              <li>
                <span class="inline-block text-sm ml-4">${course.rate} (${course.rate_quantity})</span>
              </li>
            </ul>
            <a href="#" class="inline-block">
              <h4 class="font-semibold text-[18px] xl:text-[22px] text-[#23252a] text-black pt-4 pb-4 transition-all duration-300 ease-linear hover:text-primary" >
                ${course.name}
              </h4>
            </a>
            <div class="our-source__teacher overflow-hidden">
              <div class="our-source__icon">
                <ul class="flex pb-5">
                  <li>
                    <a href="#" class="inline-block text-gray-400 pr-4">
                      <i class="fa-solid fa-user transition-all duration-300 ease-linear hover:text-primary" ></i>
                        <span>${course.total_enrolled}</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="inline-block text-gray-400">
                      <i class="fa-solid fa-clock transition-all duration-300 ease-linear hover:text-primary" ></i>
                        <span>${course.duration}</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="our-source__user flex">
                <div class="our-source__user--thumnail inline-block">
                  <a href="#" class="inline-block">
                    <img src="${course.image}" alt="teacher" class="inline-block w-[30px] h-[30px] rounded-[50%]" />
                  </a>
                </div>
                <div class="our-source__user--name pt-1">
                  <a href="#" class="inline-block flex text-[16px]" >
                    <span class="inline-block text-gray-400 px-2">
                      by
                    </span>
                    <h6 class="inline-block font-semibold text-secondary hover:text-primary" >
                      ${course.teacher}
                    </h6>
                    <span class="inline-block text-gray-400 px-2">
                      In
                    </span>
                    <h6 class="inline-block font-semibold text-secondary hover:text-primary" >
                      ${course.categories}
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="our-source__cart pt-4 py-8 px-7 flex justify-between items-center" >
            <a href="#" class="block">
              <span class="inline-block text-secondary hover:text-primary text-base font-semibold">
                ${course.price ? course.price : `Free`}  
              </span>
            </a>
            <a href="#" class="block text-gray-500">
              <i class="fa-solid fa-cart-shopping text-primary"></i>
              <span class="inline-block text-base hover:text-primary font-semibold pl-2" >
                ${course.price ? `Add to Card` : `GetEnrolled`}
              </span>
            </a>
          </div>    
        </div>
      `;
    });
    ourCource.innerHTML = renderHTML.join("");
    $('.our-course-slider').slick({
      // mobileFirst: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      // autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: `<button type='button' class='slick-source-prev slick-arrow-our-course'><i class="fa-solid fa-angle-left"></i></button>`,
      nextArrow: `<button type='button' class='slick-source-next slick-arrow-our-course'><i class="fa-solid fa-angle-right"></i></button>`,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ]
    })
  }
};

$(document).ready(getCourses())

