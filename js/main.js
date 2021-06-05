function openRes() {
  let div = document.querySelector(".navbar-nav");
  div.setAttribute("style", "display: block");
  let divtwo = document.querySelector(".closeMenuResponsive");
  divtwo.setAttribute("style", "display: block"); 
  let divthree = document.querySelector(".menuResponsive");
  divthree.setAttribute("style", "display: none"); 
}

function closeRes(){
  let div = document.querySelector(".navbar-nav");
  div.setAttribute("style", "display: none");
  let divtwo = document.querySelector(".closeMenuResponsive");
  divtwo.setAttribute("style", "display: none"); 
  let divthree = document.querySelector(".menuResponsive");
  divthree.setAttribute("style", "display: block"); 

}
