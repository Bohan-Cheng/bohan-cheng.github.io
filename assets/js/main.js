let projectNames = [
  "Bullet Blitz (Multiplayer)",
  "Dungeon Game",
  "LuvBug Learning",
  "Cosmic Survival",
  "Beat Hero (1-day demo)",
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
  "<span style=\"font-weight: bold;\">Bullet Blitz</span> is a 2D multiplayer shooter I developed using <span style=\"color: orange; font-weight: bold;\">Unity</span> and <span style=\"color: orange; font-weight: bold;\">C#</span>. I designed and implemented core gameplay systems, including the character controller, weapon mechanics, and the aerial mobility system (double jump + mid-air shooting). I also built and optimized online multiplayer functionality using <span style=\"color: orange; font-weight: bold;\">Unity Netcode</span>, ensuring responsive and competitive play. The project showcases my strengths in gameplay programming, real-time networking, and delivering tight, responsive controls in a fast-paced environment.",
  "<span style=\"font-weight: bold;\">Currently in development</span>, this is a solo-built dungeon-crawling RPG created in <span style=\"color: orange; font-weight: bold;\">Unity</span> with <span style=\"color: orange; font-weight: bold;\">C#</span>, focused on exploration, replayability, and progression. I’ve implemented procedural generation systems for both dungeon layout and <span style=\"color: orange; font-weight: bold;\">enemy AI behavior</span>, along with a scalable <span style=\"color: orange; font-weight: bold;\">character progression system</span>. Designed for short, engaging runs filled with secrets, traps, and loot, the game blends fast session play with lasting rewards. Still in early development, the project highlights my abilities in solo game development, procedural design, and systems architecture.",
  "<span style=\"font-weight: bold;\">LuvBug Learning</span> is an educational game platform centered on social-emotional learning for kids. I developed the platform’s <span style=\"color: orange; font-weight: bold;\">core Checkpoint System (Mid-game Interactive Learning System)</span>, which seamlessly integrates across a variety of unique mini-games and pulls real-time data from our back-end database using <span style=\"color: orange; font-weight: bold;\">AWS APIs</span>. I also <span style=\"color: orange; font-weight: bold;\">implemented gameplay features across multiple games</span> to support engaging, interactive learning experiences. Built using <span style=\"color: orange; font-weight: bold;\">Unity</span> and <span style=\"color: orange; font-weight: bold;\">C#</span>, this project highlights my strengths in back-end integration, gameplay programming, and building scalable <span style=\"color: orange; font-weight: bold;\">interactive learning systems</span>.",
  "<span style=\"font-weight: bold;\">Cosmic Survival</span> is a completed and <span style=\"color: orange; font-weight: bold;\">shipped</span> 2D roguelike survival game developed using <span style=\"color: orange; font-weight: bold;\">Unity</span> and <span style=\"color: orange; font-weight: bold;\">C#</span>. I designed and implemented core systems such as <span style=\"color: orange; font-weight: bold;\">enemy wave spawning</span>, <span style=\"color: orange; font-weight: bold;\">player progression and ability upgrades</span>, and <span style=\"color: orange; font-weight: bold;\">boss battle mechanics</span>. The game features escalating challenges, ability-based progression, and intense survival gameplay. I also focused on <span style=\"color: orange; font-weight: bold;\">performance optimization</span> to ensure smooth, consistent play on lower-end devices. This project demonstrates my attention to gameplay quality, technical implementation, and performance tuning. </br></br>Download for free on itch.io: <a target=\"_blank\" href=\"https://depressedcookie.itch.io/cosmic-survival\" style=\"color: blue;\"> Click here to download </a> </br>Download for free on APP Store: <a target=\"_blank\" href=\"https://apps.apple.com/ca/app/cosmic-survival/id6465034433\" style=\"color: blue;\"> Click here to download </a> </br>Download for free on Google Play: <a target=\"_blank\" href=\"https://play.google.com/store/apps/details?id=com.DefaultCompany.CosmicSurvival\" style=\"color: blue;\"> Click here to download </a>",
  "<span style=\"font-weight: bold;\">Currently in development:</span> <span style=\"font-weight: bold;\">Beat Hero</span> – a fast-paced rhythm game prototype built solo in <span style=\"color: orange; font-weight: bold;\">Unity</span> with <span style=\"color: orange; font-weight: bold;\">C#</span>. Developed in just one day, this playable demo features a responsive beat-matching system where players block incoming notes in sync with the music. I focused on precision timing mechanics, visual/audio feedback, and input responsiveness. Despite its short development time, the project highlights my ability to quickly prototype polished gameplay loops and explore rhythm-based interaction design.",
  "<span style=\"font-weight: bold;\">NthState</span> is a physics-driven puzzle game developed solo in <span style=\"color: orange; font-weight: bold;\">Unity</span> with <span style=\"color: orange; font-weight: bold;\">C#</span> for a game jam themed <span style=\"color: orange; font-weight: bold;\">“Your environment impacts you.”</span> Built around a rotating-world mechanic, the game has no player character—only physics, momentum, and level design drive gameplay. I designed and implemented systems for angular rotation, realistic object collisions, and gravity manipulation to create compelling, constraint-driven puzzles. The project showcases my strengths in physics tuning, creative problem solving, and rapid prototyping under time constraints. </br></br>Play for free on itch.io : <a target=\"_blank\" href=\"https://depressedcookie.itch.io/nth-state\" style=\"color: blue;\"> Click here to play </a>",
  "PaintMan is an infinite runner created in 48 hours for the theme ‘Color changes everything’. Control a character collecting paint orbs to change or mix your body color and match the upcoming gates. Instead of using procedural generation, a teleportation loop keeps the runway endless and seamless. Developed as both a creative and technical challenge, PaintMan explores shader programming, material manipulation, and Unity’s new input system—all wrapped in a vibrant, color-focused experience. </br></br>Play for free on itch.io : <a target=\"_blank\" href=\"https://depressedcookie.itch.io/paintman\" style=\"color: blue;\"> Click here to play </a>",
  "Dust Explosion is a UE4 experimental project built using both C++ and Blueprints, designed as a testbed for deeper Unreal Engine development. Focused on expanding C++ skills, the project features a modular, object-oriented weapon system, allowing for easy extension and customization. It also includes AI voice acting via a custom voice trigger system, adding personality to the gameplay. Player hands and weapons were modeled and animated from scratch, with a reactive camera system that enhances realism—especially when shrunk. Subtle touches of game feel were added to bring the level to life, making it both a technical and creative exploration.",
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
  "https://www.youtube.com/embed/BVJx4v1RM4o",
  "https://www.youtube.com/embed/RxnVSwKfU8s",
  "https://www.youtube.com/embed/6GpMojlC7pg",
  "https://www.youtube.com/embed/p0scC458pgg",
  "https://www.youtube.com/embed/NjaWHjFWECU",
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

(function ($) {

  var $window = $(window),
    $body = $('body'),
    $nav = $('#nav');

  // Breakpoints.
  breakpoints({
    wide: ['961px', '1880px'],
    normal: ['961px', '1620px'],
    narrow: ['961px', '1320px'],
    narrower: ['737px', '960px'],
    mobile: [null, '736px']
  });

  // Play initial animations on page load.
  $window.on('load', function () {
    window.setTimeout(function () {
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

  for (var i = 1; i <= opens.length; i++) {
    (function () {
      var open = opens.item(i - 1);
      var name = projectNames[i - 1];
      var src = videoSrcs[i - 1];
      var desc = ProjectDescriptions[i - 1];

      open.addEventListener('click', () => {
        projectWindow.classList.add('show');
        projectPanel.classList.add('input');

        projectName.innerHTML = name;
        videoFrame.src = src;
        ProjectDes.innerHTML = desc;
      })
    }());
  }

  close.addEventListener('click', () => {
    projectWindow.classList.remove('show');
    projectPanel.classList.remove('input');
    $("iframe").each(function () {
      var src = $(this).attr('src');
      $(this).attr('src', src);
    });
  })
  /* ----------------------------------------------------------------- */

  // Nav.
  var $nav_a = $nav.find('a');

  $nav_a
    .addClass('scrolly')
    .on('click', function (e) {

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
    .each(function () {

      var $this = $(this),
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
        initialize: function () {

          // Deactivate section.
          $section.addClass('inactive');

        },
        enter: function () {

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