// Varibles
var hamburger = document.querySelector('.hamburger'),
menu          = document.querySelector('.menu'),
hat           = document.querySelector('.hat');

var time = 500;

// On click
hamburger.addEventListener('click', function() {
	hamburgerController();
	menuController();
});

function whatClicked(evt) {
  hamburgerController();
	menuController();
	pageScroller(evt.srcElement.hash);
}
menu.addEventListener("click", whatClicked, false);

function hamburgerController() {
	hamburger.classList.toggle('is-active');
}

function menuController() {
	hatController();
  if (menu.classList.contains('menu--show')) {
		switchClass('menu', 'menu--show', 'menu--hide');  
	} else {
		switchClass('menu', 'menu--hide', 'menu--show');
	}
}

function hatController() {
	if ( hat.classList.contains('hat--active') ) {
    switchClass('hat', 'hat--active', 'hat--disabled');
	} else {
    switchClass('hat', 'hat--disabled', 'hat--active');
	}
}

function pageScroller(id) {
  var top = $(id).offset().top;
	$('html, body').animate({
  	scrollTop:top
  }, time);
}

function switchClass(el, start, to) {
  $('.'+el).removeClass(start);
	$('.'+el).addClass(to);
}

$('.menu-navigator').css('margin-top', - $('.menu-navigator').height() / 2 );

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 53) {
    $('.hat').stop().animate({
	  	top: 0
	  }, time);
  } 
  if (y == 0) {
  	$('.hat').stop().animate({
	  	top: '-53px'
	  }, time);
  }
});
