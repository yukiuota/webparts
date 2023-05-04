function smoothScroll() {
    $('a[href^="#"]').click(function () {
        var speed = 1500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "easeInOutQuart");
        return false;
    });
}