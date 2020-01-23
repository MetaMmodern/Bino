$(".carousel_service").on("slid.bs.carousel", function() {
  $(".carousel-custom-indicators li").removeClass("active_service");
  indicators = $(".carousel-indicators li.active").data("slide-to");
  a = $(".carousel-custom-indicators")
    .find("[data-slide-to='" + indicators + "']")
    .addClass("active_service");
  console.log(indicators);
});
