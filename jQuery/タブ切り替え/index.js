function tabSelect() {
    let tabs = $(".tab");
    $(".tab").on("click", function () {
        $(".active").removeClass("active");
        $(this).addClass("active");
        const index = tabs.index(this);
        $(".tab-content").removeClass("show").eq(index).addClass("show");
    })
}