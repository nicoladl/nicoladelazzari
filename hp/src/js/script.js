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

$(document).on('scroll', function() {
	if ( $(document).scrollTop() > 100 ) {
		$('.backtotop').removeClass('backtotop--disable');
	} else {
		$('.backtotop').addClass('backtotop--disable');
	}
})

$('.backtotop').on('click', function() {
	pageScroller('html')
});

var varWidth = $('.section').outerWidth();
$('.top-slice').css('border-right-width', varWidth);
$(window).resize(function(event) {
	varWidth = $('.section').outerWidth();
	$('.top-slice').css('border-right-width', varWidth);
});

