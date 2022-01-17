$(function () {

    // [EVENT] Toggle NAV
    const nav = $('header nav');
    const menuBtn = $('.btn-menu');
    $(menuBtn).click(function () {
        console.log('click');
        $(nav).toggleClass('on');
    });

    // [EVENT] Click footer - Scroll move to the Top
    const footer = $('footer');
    footer.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500);
    });

    // [EVENT] Toggle Modal
    var modal = $('.modal');
    var modalCon = $('.modal .content');
    var item = $('.item');

    item.click(function () {
        modal.show();
        $('body').css('overflow-y', 'hidden');
    });

    // [EVENT] Close modal
    // Full width of window
    var full = $(window).width();

    // Position 10%, 90%
    var left = full * 90 / 100;
    var right = full * 10 / 100;

    // Where the window minus the % value (parseInt)
    var leftSide = parseInt(full - left);
    var rightSide = parseInt(full - right);
    console.log('full, leftSide, rightSide= ', full, leftSide, rightSide);

    // Close modal - When click outside the CONTENT
    modal.click(function (event) {
        var x = event.clientX;
        var y = event.clientY;

        if ( x < leftSide || x > rightSide ) {
            modalCon.scrollTop(0);
            modal.hide();
            $('body').css('overflow-y', 'scroll');
        } else {
            return false;
        }
    });

});
