const navSlide = ()=>{
  const maun = document.querySelector('.maun');
  const nav = document.querySelector('.navbar-nav');
  const navlinks = document.querySelectorAll('.navbar-nav li');

  maun.addEventListener('click',()=>{
    nav.classList.toggle('nav-active'); 
    navlinks.forEach((link,index) => {
      if (link.style.animation){
        link.style.animation = '';
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 15}s`;    
      }    
    });
    maun.classList.toggle('toggle');
    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].style.color = "#7d8180";
    }
  });
}
/*
function navbar_word(){
  const navlinks = document.querySelectorAll('.navbar-nav a');
  const w = window.innerWidth;
  if ((document.body.scrollTop <= 100 && document.documentElement.scrollTop <= 100)&&(w > 765)) {
    for (let i = 0; i < navlinks.length; i++) {
      navlinks[i].style.color = "white";
      }
  }
  else {
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "#7d8180";
      }
  }
}
*/
function navbar_Background_loge_word() { 
  topButtom();
  let i = 0;
  const loge =  document.querySelector('.navbar-brand img');
  const nav = document.querySelector('.navbar');
  const navlinks = document.querySelectorAll('.navbar-nav a');
  const w = window.innerWidth;
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    loge.src = "img/logtext.png";

    nav.style.background = "rgb(254, 246, 234,0.9)";
    nav.style.height= "60px";  

    for (i = 0; i < navlinks.length; i++) {
      navlinks[i].style.color = "#7d8180";
    }
  } 
  else {
    loge.src = "img/logtext_2.png";

    nav.style.background = "rgb(254, 246, 234,0)";
    nav.style.height= "100px";

    if(w > 765){
      for (i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "white";
        } 
      }
    else{
      for (i = 0; i < navlinks.length; i++) {
        navlinks[i].style.color = "#7d8180";
      }
    }
  }
}
function topButtom(){
  const tpButt = document.querySelector("#BackUp");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    tpButt.style.opacity = 0.9;
    tpButt.style.visibility = "visible";
    tpButt.style.bottom = "30px";

  }
  else{
    tpButt.style.opacity = 0;
    tpButt.style.visibility = "hidden";
    tpButt.style.bottom = "-10px";

  }
}
const BackUp = document.querySelector("#BackUp");

BackUp.addEventListener("click", function(){
  window.scrollTo({
    top: 0,left: 0,behavior: "smooth"
  })
});


navSlide();
navbar_Background_loge_word() ;
window.onscroll = function() {navbar_Background_loge_word() };
window.addEventListener("resize", function(){
  navbar_Background_loge_word() ; 
});

