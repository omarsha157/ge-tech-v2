const burger = document.querySelector('.burger')
const navlink = document.querySelector('.navlinks')
const navlinks = document.querySelectorAll('.navlinks li')
const navbar = document.querySelector('nav')

// navbar links navigation
const logo = document.querySelector('.logo img')

logo.addEventListener('click', () => window.scroll(0,0))

const whyUs = document.querySelector('#why-us')
const whyUsBtn = document.querySelector('#why-us-btn')

whyUsBtn.addEventListener('click',() => whyUs.scrollIntoView())

const weProvide = document.querySelector('#we-provide')
const weProvideBtn = document.querySelector('#we-provide-btn')

weProvideBtn.addEventListener('click',() => weProvide.scrollIntoView())

const contact = document.querySelector('#contact')
const contactBtn = document.querySelector('#contact-btn')

contactBtn.addEventListener('click',() => contact.scrollIntoView())




burger.addEventListener('click',() => {
    navlink.classList.toggle('nav-active')
    burger.classList.toggle('burger-close')
})

navlinks.forEach(link => {
  link.addEventListener('click', () => {
    navlink.classList.remove('nav-active')
    burger.classList.remove('burger-close')
  })
})


// window.onscroll = () => {

//     if(scrollY > 500) {
//       navbar.classList.add('nav-bg')
//       navlink.classList.add('nav-bg')
//     } else {
//       navbar.classList.remove('nav-bg')
//       navlink.classList.remove('nav-bg')
//     }
// }

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 300;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    //    else {
    //     reveals[i].classList.remove("active");
    //   }
    }
  }

  window.addEventListener("scroll", reveal);

  // To check the scroll position on page load
//   reveal();

