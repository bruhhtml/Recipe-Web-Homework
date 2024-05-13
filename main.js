var lastScrollTop = 0;
var threshold = 50; // threshold value in pixels

$(window).on("scroll", function() {
    var st = $(this).scrollTop();
    if (st > lastScrollTop && st > threshold) {
    // if user is scrolling down and is past the threshold
    $(".recipeHeadingImage").height("50vh");
    $(".recipeHeadingDiv").css("backdrop-filter", "blur(7px) brightness(0.5)");
    $(".down-arrow").css("opacity", "0")
    } else if (st < lastScrollTop && st < (threshold)) {
    // if user is scrolling up and has scrolled past the negative threshold
    $(".recipeHeadingImage").height("100vh");
    $(".recipeHeadingDiv").css("backdrop-filter", "blur(4px) brightness(0.8)");
    $(".down-arrow").css("opacity", "1")
    }
    lastScrollTop = st;
});