// Variables
var hamburger = document.querySelector('.hamburger'),
menu          = document.querySelector('.menu'),
elm           = $('.js-portfolio'),
hire          = $('.js-hire');

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
	}, time*2, 'easeOutCubic');
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

$('.js-scroll').on('click', function() {
	pageScroller('.bio')
});

elm.each(function() {
	var $that = $(this)[0];
	var img = $that.getElementsByTagName('img')[0];
	var myScrollWatcher = scrollWatcher($that, { 
		onEnter: function(self) {
			$that.classList.add('alive');
		},
		onActive: function(self) {
			$that.classList.add('active');
		},
		onFocus: function(self) {
			$that.setAttribute('data-alive-progress', Math.floor(self.aliveProgress * 100));
			$that.setAttribute('data-active-progress', Math.floor(self.activeProgress * 100));

			if( $that.getAttribute('data-alive-progress') > 25 ) {
				img.classList.add('animate--visible');
			}
		},
		onInactive: function(self) {
			$that.classList.remove('active');
		},
		onLeave: function(self) {
			$that.classList.remove('alive');
		}
	}); 
});

var myScrollWatcher = scrollWatcher(hire[0], { 
	onEnter: function(self) {
		hire[0].classList.add('alive');
	},
	onActive: function(self) {
		hire[0].classList.add('active');
	},
	onFocus: function(self) {
		hire[0].setAttribute('data-alive-progress', Math.floor(self.aliveProgress * 100));
		hire[0].setAttribute('data-active-progress', Math.floor(self.activeProgress * 100));

		if( hire[0].getAttribute('data-alive-progress') > 25 ) {
			var element = hire[0].getElementsByTagName('div');
			for (var i = 0; i < element.length; i++) {
				element[i].classList.add('animate--visible');
			}
		};
	},
	onInactive: function(self) {
		hire[0].classList.remove('active');
	},
	onLeave: function(self) {
		hire[0].classList.remove('alive');
	}
}); 