$(function () {
  $(".main_slide").slick({
    arrows: false,
    autoplay: false,
    pauseOnHover: false,
    dots: false,
    fade: true,
  });

  $(".img_slide").slick({
    arrows: true,
    autoplay: false,
    pauseOnHover: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  $(".main_visual .arrows .left").on("click", function () {
    $(".main_slide").slick("slickPrev");
  });

  $(".main_visual .arrows .right").on("click", function () {
    $(".main_slide").slick("slickNext");
  });

  $(".main_visual .main_slide").on("afterChange", function (e, s, c) {
    console.log(e, s, c); //c=0,1
    $(".main_visual .num span").text("0" + (c + 1));
  });

  $(window).on("scroll", function () {
    const sct = $(window).scrollTop();
    if (sct > 0) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  $(".mbt").on("click", function () {
    $(".gnb").toggleClass("on");
    $(".h1").toggleClass("on");
    $(".header").toggleClass("on");
    $(".icon").toggleClass("on");
  });
});
