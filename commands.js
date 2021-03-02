$(window).on("scroll", function () {
    if ($(window).scrollTop() > 400) {
        $(".navbar-fixed-top").addClass("on-scroll");
    } else {
        $(".navbar-fixed-top").removeClass("on-scroll");
    }
});