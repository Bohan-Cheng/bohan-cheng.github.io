let projectNames = [
	"Cosmic Survival",
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

let ProjectDescriptions = [
	"Cosmic Survival was completed in 2 months' time. This game is an exhilarating 2D roguelike survival game where players face an endless swarm of oncoming enemies, continuously leveling up and gaining powerful abilities to withstand the ever-escalating threat. Featuring intense, non-stop action, the game challenges players to test their reflexes and strategic thinking as they strive to survive and conquer the cosmic onslaught. Epic boss battles add thrilling milestones to this relentless battle for survival.",
	"During the development of NthState, I tried a lot of camera styles, lighting styles and colorings. The theme for the jam was 'Your environment impacts you.' I quickly came up with an idea of rotating the map to win concept. It was challenging to design a game with no controllable character. The game was heavily based on Unity physics, so I configured few things to have a fairly realistic bouncing and collision physics.",
	"PaintMan is a 48 hour game jam game with the theme 'Color changes everything'. I came up with an infinite runner idea. The player controls a character to collect paint orbs that can be used to paint the body color or mix them to match the next gate. I used a teleportation loop instead of a map generator to achieve the infinite runway. During the dev of this game, I learned how to play with materials in code, shader programming and the new input system.",
	"Dust Explosion was made with Unreal in both C++ and blueprint combined. It was an experimental project to test my C++ skills with Unreal Engine 4. During this project. I found a way to do AI voice acting and programed a voice trigger system. I played around with different types of weapons. They were wrote in a good object-oriented way, so any other weapons can be implemented easily. I also modeled and animated the player hands and the weapons. I made the camera more realistic when shrank. I also adde some game feel into the level.",
	"This is the description for Q*bert.",
	"This is the description for Multiplayer FPS.",
	"This is the description for Ring of Fire.",
	"This is the description for Viking.",
	"This is the description for UE4 Networking.",
	"This is the description for Ubisoft NEXT 2021.",
	"This is the description for 2D Weather System.",
	"This is the description for Pong! 3D.",
	"This is the description for Lord's Blessing.",
	"This is the description for Match3.",
	"This is the description for City 2.",
	"This is the description for Bluestone Engine.",
	"This is the description for Ball Game.",
	"This is the description for Light Project.",
	"Matching Bird is the very first game that I made back in high school. The game was written in pure Java and with default drawing functions. It was sure an enlightenment. I learned how computers draws vertices and fills pixels, how to process keyboard and mouse inputs. I also learned how to program a simple collision. During the development of the game, I tried and explored a lot of things that came up on my mind that could be achieved by programming."
];

let videoSrcs = [
	"https://www.youtube.com/embed/p0scC458pgg",
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