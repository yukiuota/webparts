function textCat() {
    // SP時
    if (window.matchMedia("(max-width: 640px)").matches) {
        let count = 17;
        $('.text_limit').each(function () {
            var thisText = $(this).text();
            var textLength = thisText.length;
            if (textLength > count) {
                var showText = thisText.substring(0, count);
                var insertText = showText += '…';
                $(this).html(insertText);
            };
        });
    } else {
        //PC時
        let count = 50;
        $('.text_limit').each(function () {
            let thisText = $(this).text();
            let textLength = thisText.length;
            if (textLength > count) {
                var showText = thisText.substring(0, count);
                var insertText = showText += '…';
                $(this).html(insertText);
            };
        });
    }
}