// Navigation active class on click
const mainLinks = document.querySelectorAll('.main__link');

mainLinks.forEach(function(link, index){
  link.addEventListener('click', function() {
    if(this.classList.contains('navigation--active')) {
      this.classList.remove('navigation--active');
    } else {
      this.classList.add('navigation--active');
      mainLinks.forEach(link => {
          if (link !== this) { 
            link.classList.remove('navigation--active'); 
          }                                  
      });
    }
  });
});