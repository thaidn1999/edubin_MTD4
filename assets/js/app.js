let isToggle = false;
//search-btn
const searchIcon = document.querySelector("#search-icon");
const searchBox = document.querySelector(".search-box");
const closeBtn = document.querySelector(".closebtn");
searchIcon.onclick = () => {
  searchBox.style.display = "block";
}
closeBtn.onclick = () => {
  searchBox.style.display = "none";
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
