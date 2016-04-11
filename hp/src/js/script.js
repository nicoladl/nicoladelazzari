// Variables
var hamburger = document.querySelector('.hamburger'),
menu          = document.querySelector('.menu');

var time = 500;

// On click
hamburger.addEventListener('click', function() {
	hamburgerController();
	menuController();
	$('.backtotop').toggleClass('backtotop--disable', time);
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
  if (menu.classList.contains('menu--show')) {
		switchClass('menu', 'menu--show', 'menu--hide');  
	} else {
		switchClass('menu', 'menu--hide', 'menu--show');
	}
}

function pageScroller(id) {
  var top = $(id).offset().top;
	$('html, body').animate({
  	scrollTop:top
  }, time, 'easeOutCubic');
}

function switchClass(el, start, to) {
  $('.'+el).removeClass(start);
	$('.'+el).addClass(to);
}

$('.menu-navigator').css('margin-top', - $('.menu-navigator').height() / 2 );

$('.backtotop').on('click', function() {
	$('body, html').animate({
		scrollTop: 0
	}, time, 'easeOutCubic');
});

$(document).ready(function() {
	$('.top-slice--animate').animate({
		top: '-100px'
	}, time*3, 'easeOutCubic', function () {
		$(this).removeClass('top-slice--animate');
	});
});
