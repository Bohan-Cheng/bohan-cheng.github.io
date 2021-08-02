let projectNames = [
	"NthState",
	"PaintMan",
	"Dust Explosion",
	"Q*bert",
	"Multiplayer FPS",
	"Ring of Fire",
	"Viking",
	"UE4 Networking",
	"Ubisoft NEXT 2021",
	"2D Weather System",
	"Pong! 3D",
	"Lord's Blessing",
	"Match3",
	"City 2",
	"Bluestone Engine",
	"Ball Game",
	"Light Project",
	"Matching Bird"
];

let videoSrcs = [
	"https://www.youtube.com/embed/pcO76Q1Q5XM",
	"https://www.youtube.com/embed/qCtEp_JTAik",
	"https://www.youtube.com/embed/d6dAYU2yD0s",
	"https://www.youtube.com/embed/i2v0LIzyGQI",
	"https://www.youtube.com/embed/pIUiR_Ia5iw",
	"https://www.youtube.com/embed/8Biify4rrQc",
	"https://www.youtube.com/embed/yLaqNJtcTQg",
	"https://www.youtube.com/embed/kvk2uDZK0LI",
	"https://www.youtube.com/embed/BSE-Ikgyu7w",
	"https://www.youtube.com/embed/13JcgEIhiq8",
	"https://www.youtube.com/embed/TpxhnMYv5NE",
	"https://www.youtube.com/embed/UuXVlQvSzz4",
	"https://www.youtube.com/embed/LsCQdG0vHxo",
	"https://www.youtube.com/embed/7glaygLfrIo",
	"https://www.youtube.com/embed/vVX61_Sq3KQ",
	"https://www.youtube.com/embed/iphHqxK29og",
	"https://www.youtube.com/embed/1u0vV13f1J0",
	"https://www.youtube.com/embed/cGToVIPQVls"
	
];

let ProjectDescriptions = [
	"This is the description for NthState, something something, blah blah blah blah, this and that, that and that and this thats right.",
	"This is the description for PaintMan, something something, blah blah blah blah, this and that, that and that and this thats right.",
	"This is the description for Dust Explosion, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for Q*bert, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for Multiplayer FPS, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for Ring of Fire, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for Viking, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for UE4 Networking, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for Ubisoft NEXT 2021, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for 2D Weather System, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for Pong! 3D, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for Lord's Blessing, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for Match3, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for City 2, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for Bluestone Engine, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for Ball Game, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for Light Project, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough.",
	"This is the description for Matching Bird, something something, blah blah blah blah, this and that, that and that and this thats right. Dust explosion is a game that blah blah blah blah here should be a lot of text and stuff, something something yes this is long enough."
];

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	/* --------------------- Portfolio Logic ------------------------- */ 
	var opens = document.getElementsByClassName("video-open");

	var projectWindow = document.getElementById("project-window");
	var projectPanel = document.getElementById("project-panel");
	var projectName = document.getElementById("project-name");
	var ProjectDes = document.getElementById("project-description");
	var videoFrame = document.getElementById("video-frame");
	var close = document.getElementById("project-window-close");	

		for(var i = 1; i <= opens.length; i++) 
		{
			(function () {
				var open = opens.item(i-1);
				var name = projectNames[i-1];
				var src  = videoSrcs[i-1];
				var desc = ProjectDescriptions[i-1];

				open.addEventListener('click', ()=> {
					projectWindow.classList.add('show');
					projectPanel.classList.add('input');

					projectName.innerHTML = name;
					videoFrame.src = src;
					ProjectDes.innerHTML = desc;
				})
			}());
		}

		close.addEventListener('click', ()=> {
			projectWindow.classList.remove('show');
			projectPanel.classList.remove('input');
			$("iframe").each(function() { 
				var src= $(this).attr('src');
				$(this).attr('src',src);  
			});
		})
	/* ----------------------------------------------------------------- */

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					//$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						//.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								//$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 0,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);