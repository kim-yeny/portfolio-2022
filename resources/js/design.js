// Design - 썸네일, 모달
const data = [
    {
        num: 1,
        sub: 'Branding',
        title: '강한 친구들 합기도',
        text: '으아아악 '
    },
    {
        num: 2,
        sub: 'Branding',
        title: '육회한 사시미',
        text: '으아아악 으아아악 '
    },
    {
        num: 3,
        sub: 'cvbc',
        title: 'sdfsdfsdf vbc',
        text: '으아아악 으아아악 으아아악 '
    },
    {
        num: 4,
        sub: 'tyrty',
        title: 'ryrtyrty qew',
        text: '으아아악 으아아악 으아아악 으아아악 '
    },
    {
        num: 1,
        sub: 'Branding',
        title: '강한 친구들 합기도',
        text: '으아아악 으아아악 으아아악 으아아악 으아아악 '
    },
    {
        num: 2,
        sub: 'Branding',
        title: '육회한 사시미',
        text: '으아아악 으아아악 으아아악 으아아악 으아아악 으아아악 '
    },
    {
        num: 3,
        sub: 'cvbc',
        title: 'sdfsdfsdf vbc',
        text: '으아아악 으아아악 으아아악 으아아악 으아아악 으아아악 으아아악 '
    },
    {
        num: 4,
        sub: 'tyrty',
        title: 'ryrtyrty qew',
        text: '으아아악 으아아악 으아아악 으아아악 으아아악 으아아악 으아아악 으아아악 '
    },
]

const thumbUrl = './resources/img/design/design-thumb-';
const modalUrl = './resources/img/design/design-modal-';

// Append data of the Design file list
$(function () {
    for (key in data) {
        $('.container').append(
            '<div class="item flex" name="'
            + data[key].num
            + '" style="background-image: url('
            + thumbUrl
            + data[key].num
            + '.jpg)" alt="'
            + data[key].title
            + '"><div class="hide"><h1 class=""><span>'
            + data[key].sub
            + '</span>'
            + data[key].title
            + '</h1></div></div>'
        );
    };
});

// Toggle MODAL and Append design
$(document).on('click', '.container .item', function(){
    // Index of the IMG in the Child ITEM
    var idx = $(this).attr('name') - 1;

    // Append data into MODAL
    $('.modal .title').append(
        '<h1>'
        + data[idx].title
        + '<span>'
        + data[idx].text
        + '<span></h1>'
    );

    $('.modal .item').append(
        '<img src="'
        + modalUrl
        + data[idx].num
        + '.jpg" alt="'
        + data[idx].title
        + '">'
    );
    
    // Open MODAL
    modal.show();
    $('body').css('overflow-y', 'hidden');
});

// 동적으로 불러온 요소에 이벤트 주는 방식 $(document).on 필수
// 문제: 요소가 아니라 body 전체를 변수로 인식함.
// 변수를 사용하지 않고, 직접 요소를 작성해주니 해결됨.
// 아마 상단에서 선언한 변수는 ready이기 때문에
// 동적 내용으로 업데이트 되지 않는 문제... 비슷한게 아닐까 추측 중.