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


		const open = document.getElementById('open');
		const videoPanel = document.getElementById('video_panel');
		const videoWindow = document.getElementById('video_window');
		const close = document.getElementById('close');

		const open2 = document.getElementById('open2');
		const videoPanel2 = document.getElementById('video_panel2');
		const videoWindow2 = document.getElementById('video_window2');
		const close2 = document.getElementById('close2');

		const open3 = document.getElementById('open3');
		const videoPanel3 = document.getElementById('video_panel3');
		const videoWindow3 = document.getElementById('video_window3');
		const close3 = document.getElementById('close3');

		const open4 = document.getElementById('open4');
		const videoPanel4 = document.getElementById('video_panel4');
		const videoWindow4 = document.getElementById('video_window4');
		const close4 = document.getElementById('close4');

		const open5 = document.getElementById('open5');
		const videoPanel5 = document.getElementById('video_panel5');
		const videoWindow5 = document.getElementById('video_window5');
		const close5 = document.getElementById('close5');

		const open6 = document.getElementById('open6');
		const videoPanel6 = document.getElementById('video_panel6');
		const videoWindow6 = document.getElementById('video_window6');
		const close6 = document.getElementById('close6');

		open.addEventListener('click', ()=> {
			videoWindow.classList.add('show');
			videoPanel.classList.add('input');
		})

		close.addEventListener('click', ()=> {
			videoWindow.classList.remove('show');
			videoPanel.classList.remove('input');
			$('iframe').attr('src', $('iframe').attr('src'));
		})

		open2.addEventListener('click', ()=> {
			videoWindow2.classList.add('show');
			videoPanel2.classList.add('input');
		})

		close2.addEventListener('click', ()=> {
			videoWindow2.classList.remove('show');
			videoPanel2.classList.remove('input');
			$('iframe').attr('src', $('iframe').attr('src'));
		})

		open3.addEventListener('click', ()=> {
			videoWindow3.classList.add('show');
			videoPanel3.classList.add('input');
		})

		close3.addEventListener('click', ()=> {
			videoWindow3.classList.remove('show');
			videoPanel3.classList.remove('input');
			$('iframe').attr('src', $('iframe').attr('src'));
		})

		open4.addEventListener('click', ()=> {
			videoWindow4.classList.add('show');
			videoPanel4.classList.add('input');
		})

		close4.addEventListener('click', ()=> {
			videoWindow4.classList.remove('show');
			videoPanel4.classList.remove('input');
			$('iframe').attr('src', $('iframe').attr('src'));
		})

		open5.addEventListener('click', ()=> {
			videoWindow5.classList.add('show');
			videoPanel5.classList.add('input');
		})

		close5.addEventListener('click', ()=> {
			videoWindow5.classList.remove('show');
			videoPanel5.classList.remove('input');
			$('iframe').attr('src', $('iframe').attr('src'));
		})

		open6.addEventListener('click', ()=> {
			videoWindow6.classList.add('show');
			videoPanel6.classList.add('input');
		})

		close6.addEventListener('click', ()=> {
			videoWindow6.classList.remove('show');
			videoPanel6.classList.remove('input');
			$('iframe').attr('src', $('iframe').attr('src'));
		})

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