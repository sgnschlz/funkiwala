//smooth scrolling when clicking on navbar
$(document).ready(function(){

  var scrollLink = $('.scroll');

  //smooth scrolling

  scrollLink.click(function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    },  1000)
  });

//active link switching
  $(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - 90;

      if(sectionOffset <= scrollbarLocation) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    })
  })
})

