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
  });

  
  
}
navSlide();