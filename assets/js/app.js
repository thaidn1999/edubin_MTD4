let isToggle = false;
//search-btn
const searchIcon = document.querySelector("#search-icon");
const formSearch = document.querySelector('#form-search');
const searchBox = document.querySelector(".search-box");
searchIcon.onclick = () => {
  searchBox.classList.remove('hidden')
  searchBox.classList.add('block')
}
formSearch.onclick = (e) => {
  e.stopPropagation();
}
searchBox.onclick = () => {
  searchBox.classList.remove('block')
  searchBox.classList.add('hidden')
}

// back-to-top
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 200) {
    backToTop.classList.add("opacity-100")
  } else {
    backToTop.classList.remove("opacity-100")
  }
})

// menu-fixed
const header = document.querySelector('#header');
const headerTop = document.querySelector('.header-top');
const headerMain = document.querySelector('.header-main');
window.onscroll = () => {
  if (window.scrollY >= 200) {
    headerTop.classList.add("hidden")
    headerMain.classList.remove('pt-[54px]')
  } else {
    headerTop.classList.remove("hidden")
    headerMain.classList.add('pt-[54px]')
  }
}


// toggle drop menu
const toggleMenu = document.querySelector('.toggle-icon');
const menuList = document.querySelector('.menu-container');
toggleMenu.onclick = () => {
  if (!isToggle) {
    menuList.style.display = 'block'
    isToggle = true
  }
  else {
    menuList.style.display = 'none'
    isToggle = false
  }
}

// drop-item-menu-navbar
const dropMenuItem = document.querySelectorAll('.list-item-mobile');
for (let i = 0; i < dropMenuItem.length; i++) {
  const subMenu = dropMenuItem[i].querySelector('#sub-menu');
  dropMenuItem[i].onclick = () => {
    if (!isToggle) {
      subMenu.style.display = 'none'
      isToggle = true
    }
    else {
      subMenu.style.display = 'block'
      isToggle = false
    }
  }
}

// video pop up

const videoPopUp = document.querySelector('.video-pop-up');
const videoPopUpWrap = document.querySelector('.video-pop-up-wrap');
const videoPopUpContent = document.querySelector('.vd-content');
const closePopUp = document.querySelector('.vd-close');
videoPopUp.onclick = () => {
  videoPopUpWrap.classList.remove('hidden')
  videoPopUpWrap.classList.add('block')
}
videoPopUpContent.onclick = (event) => {
  event.stopPropagation();
}
closePopUp.onclick = () => {
  videoPopUpWrap.classList.remove('block')
  videoPopUpWrap.classList.add('hidden')
}
videoPopUpWrap.onclick = () => {
  videoPopUpWrap.classList.remove('block')
  videoPopUpWrap.classList.add('hidden')
}