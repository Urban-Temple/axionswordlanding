// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    //$('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
    //    console.log("scroll!!");
    //});

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    if ($(".navbar-custom").hasClass("affix")){
        $(".navbar-brand").attr("src", "https://s3-us-west-1.amazonaws.com/urbantemple/logo/logo_main_wht.png");
        $("nav li a").css("color", "#fff");
    }
    $('#mainNav').on( 'affixed-top.bs.affix', function () {
        console.log('unaff');
        $(".navbar-brand").attr("src", "https://s3-us-west-1.amazonaws.com/urbantemple/logo/logo_main_blk.png");
        $("nav li a").css("color", "#000");
    });

    $('#mainNav').on( 'affix.bs.affix', function () {
        console.log('aff');
        $(".navbar-brand").attr("src", "https://s3-us-west-1.amazonaws.com/urbantemple/logo/logo_main_wht.png");
        $("nav li a").css("color", "#fff");
    });



})(jQuery); // End of use strict
