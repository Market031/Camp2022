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
function navbar_Background() { 
  const nav = document.querySelector('.navbar');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    nav.style.background = "rgb(254, 246, 234,0.9)";
  
    nav.style.height= "60px";
  } 
  else {
    nav.style.background = "rgb(254, 246, 234,0)";
    
    nav.style.height= "100px";
  }
}
function navbar_loge() {
  const loge =  document.querySelector('.navbar-brand img');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    loge.src = "img/logtext.png";  
  } 
  else {
    loge.src = "img/logtext_2.png";
  }
}  
function scrollFunction() {
  navbar_word();
  navbar_Background();
  navbar_loge()
}



navSlide();
scrollFunction();
window.onscroll = function() {scrollFunction()};
window.addEventListener("resize", function(){
  scrollFunction(); 
});

