function openRes() {
  document.querySelector(".navbar-nav").style.display="block";
  document.querySelector(".closeMenuResponsive").style.display="block";
  document.querySelector(".menuResponsive").style.display="none";
  document.querySelector(".isotipo").style.display="none";
  document.querySelector(".navbarLogo").style.display="none";  
  document.querySelector(".navbar").style.flexDirection="column";
}

function closeRes(){
  document.querySelector(".navbar-nav").style.display="none";
  document.querySelector(".closeMenuResponsive").style.display="none";
  document.querySelector(".menuResponsive").style.display="block";
  document.querySelector(".isotipo").style.display="block";
  document.querySelector(".navbarLogo").style.display="block";  
  document.querySelector(".navbar").style.flexDirection="row";
}

function closeSide(){
  document.querySelector(".navbar-nav").style.display="none";
  document.querySelector(".closeMenuResponsive").style.display="none";
  document.querySelector(".menuResponsive").style.display="block";
  document.querySelector(".isotipo").style.display="block";
  document.querySelector(".navbarLogo").style.display="block";  
  document.querySelector(".navbar").style.flexDirection="row";
}
