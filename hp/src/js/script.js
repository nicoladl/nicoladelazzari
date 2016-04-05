// Varibles
var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');

// On click
hamburger.addEventListener('click', function() {
	// Toggle class 'is-active'
	hamburgerController();
	menuController();

	if ( !$('.hat').hasClass('active') ) {
		$('.hat')
			.css('z-index', '4')
			.css('background-color', 'transparent')
			.css('box-shadow', 'none')
			.addClass('active');
	} else {
		$('.hat')
			.css('z-index', '2')
			.css('background-color', '#ffd300')
			.css('box-shadow', '3px 3px 3px 0 rgba(0,0,0,.15)').
			removeClass('active');
	}
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
    menu.classList.remove('menu--show');
		menu.classList.add('menu--hide');
	} else {
		menu.classList.remove('menu--hide');
		menu.classList.add('menu--show');
	}
}

function pageScroller(id) {
  var top = $(id).offset().top;
  
  	$('html, body').animate({
	  	scrollTop:top
	  }, 500);
}

$('.menu__navigator').css('margin-top', - $('.menu__navigator').height() / 2 );

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 53) {
    $('.hat').stop().animate({
	  	top: 0
	  }, 500);
  } 
  if (y == 0) {
  	$('.hat').stop().animate({
	  	top: '-53px'
	  }, 500);
  }
});
