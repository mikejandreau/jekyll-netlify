$(document).ready(function() {

  // Variables
  var $nav = $('.navbar'),
      $body = $('body'),
      $window = $(window),
      navOffsetTop = $nav.offset().top,
      $document = $(document),
      entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
      };

  function init() {
    $('a[href^="#"]').on('click', smoothScroll);
  }

  function smoothScroll(e) {
    e.preventDefault();
    $document.off("scroll");
    var target = this.hash,
        menu = target;
        $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-40
    }, 500, 'swing');
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }


  
  // add scrollup button for the long pages
  $window.scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  // toggle the hamburger open and closed states
  var removeClass = true;
  $(".navbar-toggle").click(function () {
    $(".navbar-toggle").toggleClass('is-active');
    $(".navbar-menu").toggleClass('active-menu');
    removeClass = false;
  });

  // $(".navbar-menu").click(function() {
  //   removeClass = false;
  // });

  $("html").click(function () {
    if (removeClass) {
      $(".navbar-toggle").removeClass('is-active');
      $(".navbar-menu").removeClass('active-menu');
    }
    removeClass = true;
  });

  $(".navbar-link").click(function () {
    if (removeClass) {
      $(".navbar-toggle").removeClass('is-active');
      $(".navbar-menu").removeClass('active-menu');
    }
    removeClass = true;
  });

  // disable mobile nav for laptop and desktop
  $(window).resize(function() {
    if( $(this).width() > 1000 ) {
      $(".navbar-toggle").removeClass('is-active');
      $(".navbar-menu").removeClass('active-menu');
    }
  });

  // change header color and size on scroll
  // $window.scroll(function() {
  //     if ($(this).scrollTop() > 100) {
  //         $(".navbar").addClass('nav-scrolled');
  //     } else {
  //         $(".navbar").removeClass('nav-scrolled');
  //     }
  // });

  init();

});



