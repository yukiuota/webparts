function spMenu() {
    let btn = $('#header-btn');
    let close = $('#header-btn_close');
    let menu = $('#header-menu');
    btn.click(function () {
        menu.slideToggle();
    });
    close.click(function () {
        menu.slideToggle();
    });
}