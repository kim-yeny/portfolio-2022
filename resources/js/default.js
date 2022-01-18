// Modal's elements
let itemCon = $('.container .item');
let modal = $('.modal');
let itemModal = $('.modal .item');

// Close modal
function closeModal() {
    // Reset MODAL
    $('.modal .title, .modal .item').empty();
    modal.scrollTop(0);

    // Hide MODAL and Reset body
    modal.hide();
    $('body').css('overflow-y', 'scroll');
}

// Close MODAL
$(document).on('click', '.modal .side, .modal .bottom, .modal .bottom-box > div, .modal .btn-close', function(){ 		
    closeModal();
});

$(function () {
    // Toggle NAV
    const nav = $('header nav');
    const menuBtn = $('.btn-menu');
    $(menuBtn).click(function () {
        console.log('click');
        $(nav).toggleClass('on');
    });

    // Click footer and then scroll move to the Top
    const footer = $('footer');
    footer.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500);
    });
});