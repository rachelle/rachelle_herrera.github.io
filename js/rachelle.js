(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

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

