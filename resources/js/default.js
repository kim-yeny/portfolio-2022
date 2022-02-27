// Elements in MODAL
let modal = $(".modal");
let itemModal = $(".modal .item");
let itemCon = $(".container .item");
let alertModal = $(".alert");
let alertCon = $(".alert div p");
let alertBtn = $(".alert div button");

// Close MODAL
function closeModal() {
    // Reset MODAL
    $(".modal .title, .modal .item").empty();
    modal.scrollTop(0);

    // Hide MODAL and Reset body
    modal.hide();
    $("body").css("overflow-y", "scroll");
}

// Close ALERT
function closeAlert() {
    alertModal.animate({
        top: "-150px"
    }, 300);
    setTimeout(() => {
        alertModal.css("display", "none");
    }, 300);
}

// Custom alert modal
function alertCustom(txt) {
    // Print alert text
    alertCon.text(txt);
    alertModal.css("display", "flex");
    alertModal.animate({
        top: "0"
    }, 300);
}

// Copy contents
function copyClip(val, txt) {
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = val;
    textarea.select();
    document.execCommand('copy');
    alertCustom(`${txt} 클립보드에 복사했습니다.`);
    document.body.removeChild(textarea);
}

// Close MODAL
// It must be loaded as an HTML element.
$(document).on("click", ".modal .side, .modal .bottom, .modal .bottom-box > div, .modal .btn-close", function () {
    closeModal();
});

// READY
$(function () {
    // Toggle NAV
    const nav = $("header nav");
    const menuBtn = $(".btn-menu");
    $(menuBtn).click(function () {
        $(nav).toggleClass("on");
    });

    // Click footer and then scroll move to the Top
    const footer = $("footer");
    footer.click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 500);
    });
});