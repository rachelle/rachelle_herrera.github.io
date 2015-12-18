(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();


  }); // end of document ready

})(jQuery); // end of jQuery name space

var d = document;
var wrap = d.querySelector('.wrap');
var projects = d.querySelector('.projects');
var projectCount = d.querySelectorAll('.project').length;
var scroller = d.querySelector('.scroller');
var pos = 0;
var transform = Modernizr.prefixed('transform');

function setTransform() {
  projects.style[transform] = 'translate3d(' + (-pos * projects.offsetWidth) + 'px,0,0)';
}

function prev() {
  pos = Math.max(pos - 1, 0);
  setTransform();
}

function next() {
  pos = Math.min(pos + 1, projectCount - 1);
  setTransform();
}

window.addEventListener('resize', setTransform);

 
var target = $(".intro-arrow");

// hide arrow if scrolled down
// show if scrolled back up
$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(target).addClass("hidden");
  }
  if($(window).scrollTop() < 300){
    $(target).removeClass("hidden");
  }
});

// handle scroll on click
target.find("a").click(function(e){
  e.preventDefault();
  var anchor = $(this).attr("href");
  scrollTo(anchor);
});

// scroller
function scrollTo(x){
  $("html,body").animate({scrollTop: $(x).offset().top},'slow');
}


