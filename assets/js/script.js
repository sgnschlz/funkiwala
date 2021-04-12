/*============================================
	Hamburger Menu
=============================================*/
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');
const ahrefHamburger = document.querySelector('.header__menu')

  btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')) { //close hamburger menu
    header.classList.remove('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
      });
    }
    else { //open hamburger menu
      header.classList.add('open'); 
      fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
      });
    }
  });

    ahrefHamburger.addEventListener('click', function(){//close mobile links

    if(header.classList.contains('open')) { //close hamburger menu
    header.classList.remove('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
      });
    }
    else { //open hamburger menu
      header.classList.add('open'); 
      fadeElems.forEach(function(element){
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
      });
    }
  });

/*============================================
	      Read More Button
=============================================*/
document.getElementById("btnReadMore").addEventListener("click", openp);

  function openp() {
  document.getElementById("readMoreText").classList.toggle("openReadMore");
}

/*============================================
    Scroll to Top
=============================================*/
  function scrollTopAnimated() { 
      $("html, body").animate({ scrollTop: 0 }); 
  };

  // const btnScrollToTop = document.querySelector ("#btnScrollToTop");

  // btnScrollToTop.addEventListener("click", function (){

  //   window.scrollTo ({
  //     top: 0;
  //     left: 0;
  //     behaviour: "smooth"

  //   });
  // });

 /*============================================
    Initialize on Scroll
=============================================*/ 
AOS.init({
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 1100, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});


/*============================================
    Preloader
=============================================*/

function progress(){
  var percent = document.querySelector('.percent');
  var progress = document.querySelector('.progress');
  var text = document.querySelector('.text');
  var count = 4;
  var per = 16;
  var loading = setInterval(animate, 10);
  function animate(){
    if(count == 100 && per == 400){
      percent.classList.add("text-blink");
      // text.style.display = "block";
      clearInterval(loading);
    }else{
      per = per + 4;
      count = count + 1;
      progress.style.width = per + 'px';
      percent.textContent = count + '%';
    }
  }
}
progress();

$(window).on('load', function() {
  $('#preloader').delay(30).fadeOut();
});
