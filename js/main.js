const navSlide = ()=>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
    navLinks.forEach((link,index) =>{
      if(link.style.animation){
        link.style.animation = '';
      } else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.5}s`;
      }
    });
    burger.classList.toggle('toggle');
  });
}
navSlide();
const sections = document.querySelectorAll(".section");
const verifyVisibility = (entries)=>{
    for (const entry of entries) {
        if(entry.isIntersecting){
            const menu = document.querySelector(`.${entry.target.id}`);
            menu.style.color = "#26E573";
          } else {
            const menu = document.querySelector(`.${entry.target.id}`);
            menu.style.color = "";
        }
    }
}
const anchoTotal = screen.width;
let mqw;
if (anchoTotal < 900){
  mqw = "-150px";
}
if (anchoTotal > 900){
  mqw = "-200px";
}
if (anchoTotal > 1400){
  mqw = "-300px";
}

const options = {
    rootMargin: mqw,
    treshold: 0.5
}
const observer = new IntersectionObserver(verifyVisibility, options)
for (const section of sections) {
    observer.observe(section)
}

var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
  el: ".swiper-pagination",
  clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});