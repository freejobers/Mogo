$(function() {
  var header = $("#header");
  var introH = $("#intro").innerHeight();
  var scrollOffset = $(window).scrollTop();
  checkScroll(scrollOffset);
  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  })

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }

  }
  // smooth scroll

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    var $this = $(this);
    var blockId = $(this).data('scroll');
    var blockOffset = $(blockId).offset().top;
    $("#nav a").removeClass('active');
    $this.addClass('active');
    $("html, body").animate({
      scrollTop: blockOffset
    }, 500)

  })

  $("#nav_toggle").on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $("#nav_toggle").toggleClass('active');
    $("#nav").toggleClass('active');
  });

    $("[data-collaps]").on('click', function(event) {
      event.preventDefault();

      var $this = $(this);
      var blockId = $this.data('collaps');
      $this.toggleClass('active');
    });

    $("[data-slider]").slick({
      infinite: true,
      fade: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });

});
