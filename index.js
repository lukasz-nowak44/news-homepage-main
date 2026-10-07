$(window).resize( function () {
  
  if ($(".hamburger").css("display") === "flex") {

    $(".main-image img").attr("src", "assets/images/image-web-3-mobile.jpg");
        
  } else {

    $(".main-image img").attr("src", "assets/images/image-web-3-desktop.jpg");

    window.location.reload();
  }
});

$(".hamburger").click( function () {
  
  let isNavbarEnabled = $("ul").hasClass("navbar-mobile");

  if (isNavbarEnabled) {

    $(".navbar-mobile").animate({width: "0%"}, 700);

    setTimeout (function () {
      
      $("ul").removeClass("navbar-mobile");
      $("ul").addClass("navbar");
      $(".hamburger img").attr("src", "assets/images/icon-menu.svg");
      $(".hamburger img").attr("aria-label", "open navbar");
      $(".hamburger").css("position", "static");

    }, 700);
    
  } else {

    $("ul").removeClass("navbar");
    $("ul").addClass("navbar-mobile");
    $(".navbar-mobile").animate({width: "65%"}, 700);
    $(".hamburger img").attr("src", "assets/images/icon-menu-close.svg");
    $(".hamburger img").attr("aria-label", "close navbar");
    $(".hamburger").css("position", "fixed");

  }

});

