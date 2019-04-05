(function($){

  function verifyNavScroll() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $('nav').addClass('active');
    }
    else {
      $('nav').removeClass('active');
    }
  }

  function verifyHamburgerPopup() {
    if ($('nav.hamburger-active').length > 0 && window.innerWidth > 1024) {
      toggleHamburgerPopup();
    }
  }

  function toggleHamburgerPopup() {
    var isActive = $('nav.hamburger-active').length > 0;

    if (isActive) {
      $('nav').removeClass('hamburger-active');
      $('nav .hamburger').removeClass('active');
      $('.hamburger-popup').hide();
    }
    else {
      $('nav').removeClass('hamburger-active').addClass('hamburger-active');
      $('nav .hamburger').removeClass('active').addClass('active');
      $('.hamburger-popup').show();
    }

  }

  function toggleAccordionSection(index) {

  }

  $(document).ready(function () {

    // Initialize parallax
    $('.img-parallax').each(function(){
      var img = $(this);
      var imgParent = $(this).parent();
      function parallaxImg () {
        if (window.innerWidth > 768) {
          var speed = img.data('speed');
          var imgY = imgParent.offset().top;
          var winY = $(this).scrollTop();
          var winH = $(this).height();
          var parentH = imgParent.innerHeight();


          // The next pixel to show on screen
          var winBottom = winY + winH;

          // If block is shown on screen
          if (winBottom > imgY && winY < imgY + parentH) {
            // Number of pixels shown after block appear
            var imgBottom = ((winBottom - imgY) * speed);
            // Max number of pixels until block disappear
            var imgTop = winH + parentH;
            // Porcentage between start showing until disappearing
            var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
          }
          img.css({
            top: imgPercent + '%',
            transform: 'translate(0, -' + imgPercent + '%)'
          });
        }
        else {
          img.css({
            top: '', transform: ''
          });
        }
      }
      $(document).on({
        scroll: function () {
          parallaxImg();
        }, ready: function () {
          parallaxImg();
        }
      });
    });

    $('.slick-carousel').on('init', function () {

      $('<div class="slick-actions-wrapper"><div class="slick-actions"></div></div>')
        .appendTo('.slick-carousel');

      $('.slick-actions').append($('.slick-prev'));
      $('.slick-actions').append($('.slick-dots'));
      $('.slick-actions').append($('.slick-next'));

      // alert('slick carousel initialized');
    });

    // Initialize Owl carousel
    $('.slick-carousel').removeClass('hidden');
    $('.slick-carousel').slick({
      dots: true,
      prevArrow: '' +
        '<div class="slick-prev">' +
        '  <svg xmlns="http://www.w3.org/2000/svg" width="5.64" height="11.28" viewBox="0 0 5.64 11.28">\n' +
        '    <path id="Path_11" data-name="Path 11" d="M0,0,5.64,5.64,0,11.28Z" transform="translate(5.64 11.28) rotate(180)" fill="#28aa69"/>\n' +
        '  </svg>\n' +
        '</div>',
      nextArrow: '' +
        '<div class="slick-next">' +
        '  <svg xmlns="http://www.w3.org/2000/svg" width="5.64" height="11.28" viewBox="0 0 5.64 11.28">\n' +
        '    <path id="Path_10" data-name="Path 10" d="M2279.906,6258.238l5.64,5.64-5.64,5.64Z" transform="translate(-2279.906 -6258.238)" fill="#28aa69"/>\n' +
        '  </svg>\n' +
        '</div>',
      // nav: true,
      // center: true,
      // items: 1,
    });

    verifyNavScroll();

    $('.hamburger').on('click', function () {
      toggleHamburgerPopup();
    });

    $('.accordion').on('click', '.acc-btn', function () {
      var $section = $(this).closest('.content');

      if ($section.hasClass('active'))
        $section.removeClass('active');
      else
        $section.addClass('active');

    });

    $(window).scroll(function() {
      verifyNavScroll();
    });

    $(window).resize(function() {
      verifyHamburgerPopup();
    });

  });

})(jQuery);


