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
            menu.style.color = "#FFFFFF";
        }
    }
}
const options = {
    rootMargin: "-150px",
    treshold: 0.1
}
const observer = new IntersectionObserver(verifyVisibility, options)
for (const section of sections) {
    observer.observe(section)
}