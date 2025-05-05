let projectNames = [
  "Bullet Blitz (Multiplayer)",
  "Dungeon Game",
  "LuvBug Learning",
  "Cosmic Survival",
  "Beat Hero (1-day demo)",
  "NthState",
  "PaintMan",
  "Dust Explosion",
  "Q*bert Remake",
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
  "<span style=\"font-weight: bold;\">PaintMan</span> is an infinite runner developed solo in <span style=\"color: orange; font-weight: bold;\">Unity</span> with <span style=\"color: orange; font-weight: bold;\">C#</span> over 48 hours for a game jam with the theme <span style=\"color: orange; font-weight: bold;\">“Color changes everything.”</span> Players collect paint orbs to change or mix body color to match upcoming gates, blending fast reflexes with color logic. Instead of procedural generation, I implemented a seamless teleportation loop to simulate an endless runway. The project showcases my work with <span style=\"color: orange; font-weight: bold;\">shader programming</span>, <span style=\"color: orange; font-weight: bold;\">material manipulation</span>, and Unity’s <span style=\"color: orange; font-weight: bold;\">new Input System</span>, combining creative gameplay with technical experimentation. </br></br>Play for free on itch.io : <a target=\"_blank\" href=\"https://depressedcookie.itch.io/paintman\" style=\"color: blue;\"> Click here to play </a>",
  "<span style=\"font-weight: bold;\">Dust Explosion</span> is an experimental project built in <span style=\"color: orange; font-weight: bold;\">Unreal Engine 4</span> using both <span style=\"color: orange; font-weight: bold;\">C++</span> and <span style=\"color: orange; font-weight: bold;\">Blueprints</span>, created as a personal testbed for deeper engine exploration. I developed a modular, object-oriented weapon system in C++ for easy extensibility, and implemented a custom voice trigger system to add <span style=\"color: orange; font-weight: bold;\">AI voice acting</span> and gameplay personality. Player hands and weapons were modeled and animated from scratch, supported by a reactive camera system that enhances immersion—especially during scale changes. The project blends advanced programming with hands-on content creation, showcasing my abilities in Unreal Engine development, system architecture, and visual polish.",
  "<span style=\"font-weight: bold;\">Q*bert Remake</span> is a modern visual reimagining of the classic arcade game, developed solo in <span style=\"color: orange; font-weight: bold;\">Unity</span> using <span style=\"color: orange; font-weight: bold;\">C#</span>. I faithfully replicated the original isometric movement, tile-flipping mechanics, and enemy behaviors, while enhancing the experience with improved visuals, smoother animations, and polished UI. This project demonstrates my skills in modernizing legacy gameplay, implementing 2.5D systems, and creating responsive arcade-style controls—all while staying true to the charm of the original.",
  "<span style=\"font-weight: bold;\">MultiplayerFPS</span> is a 3D first-person shooter developed in <span style=\"color: orange; font-weight: bold;\">Unity</span> using <span style=\"color: orange; font-weight: bold;\">C#</span> and the legacy <span style=\"color: orange; font-weight: bold;\">UNet</span> networking system—my first successful multiplayer project, built during high school. The game features real-time online play with multiple maps, each with unique gravity settings, a range of weapons, and even co-op boss fights. I implemented player synchronization, shooting mechanics, and custom map physics to deliver a responsive multiplayer experience. This project kickstarted my passion for networked gameplay and introduced me to core concepts like client-server architecture, latency handling, and multiplayer design.",
  "<span style=\"font-weight: bold;\">Ring of Fire</span> is a fully self-developed 3D action game built in <span style=\"color: orange; font-weight: bold;\">Unreal Engine 4</span> using <span style=\"color: orange; font-weight: bold;\">C++</span>. Every asset in the game—character models, enemy designs, buildings, environments, animations, textures, and materials—was created entirely by me using <span style=\"color: orange; font-weight: bold;\">Blender</span>. I handled everything from modeling and rigging to animation and level design, building a fully playable experience from the ground up. This project demonstrates my ability to take a complete game from concept to execution, combining advanced programming with hands-on content creation, asset pipeline management, and solo development discipline.",
  "<span style=\"font-weight: bold;\">Viking</span> is a 2D side-scrolling platformer developed entirely from scratch in <span style=\"color: orange; font-weight: bold;\">C++</span> using <span style=\"color: orange; font-weight: bold;\">SDL</span>, including a custom-built game engine. I implemented every core system myself—rendering, physics, input, game logic, collision detection, and a modular level system. The game features a Viking protagonist who throws axes to defeat enemies and navigate light platforming challenges. This project demonstrates my low-level programming skills, deep understanding of game engine architecture, and ability to create performant, self-contained game systems without relying on third-party engines.",
  "<span style=\"font-weight: bold;\">UE4 Multiplayer Customization Test</span> is a study project built in <span style=\"color: orange; font-weight: bold;\">Unreal Engine 4</span> using <span style=\"color: orange; font-weight: bold;\">C++</span> and <span style=\"color: orange; font-weight: bold;\">Blueprints</span>, focused on exploring multiplayer networking. I built a networked arena where players can join sessions and use a character customization system to modify their avatar’s appearance. This project was my first hands-on experience with Unreal’s networking stack, and I implemented replication for character visuals, inputs, and player state. It served as a foundational step toward understanding multiplayer architecture, data synchronization, and Unreal's client-server model.",
  "<span style=\"font-weight: bold;\">Ubisoft NEXT 2021 Programming Challenge – Tower Defense</span> was a solo submission where I built a fully functional tower defense game from a minimal line-rendering engine provided by Ubisoft. Using <span style=\"color: orange; font-weight: bold;\">C++</span>, I created a custom sprite rendering system, built my own <span style=\"color: orange; font-weight: bold;\">vector math</span> and <span style=\"color: orange; font-weight: bold;\">physics collision</span> logic, and designed a lightweight engine architecture to support gameplay. I developed systems for tower placement, upgrades, and modular abilities, and also created all the 2D art assets for towers and enemies. The result was a complete, intuitive game loop with strategic depth and a polished user experience—showcasing my ability to build game systems from scratch under strict technical constraints.",
  "<span style=\"font-weight: bold;\">Dynamic Weather System (Unity Package)</span> is a modular weather control system I developed in <span style=\"color: orange; font-weight: bold;\">Unity</span> using <span style=\"color: orange; font-weight: bold;\">C#</span>, featuring dynamic weather transitions, <span style=\"color: orange; font-weight: bold;\">visual effects</span>, <span style=\"color: orange; font-weight: bold;\">sound design</span>, and logic-based progression (e.g., storms follow rain with defined probabilities). Designed as a reusable Unity package, the system supports real-time weather changes with customizable parameters and event triggers. I integrated it into my multiplayer shooter <span style=\"font-weight: bold;\">Bullet Blitz</span> to enhance immersion and gameplay variety. This project demonstrates my ability to build flexible, scalable systems and improve moment-to-moment player experience through environmental feedback.",
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