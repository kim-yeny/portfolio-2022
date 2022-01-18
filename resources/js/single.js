// Design - 썸네일, 모달
const data = [
    {
        num: 1,
        title: 'EsRP Landing page',
        sub: '팀 프로젝트 웹 ERP 서비스의 가상 랜딩 페이지',
        text: '팀 프로젝트로 구현했던 웹 ERP 서비스의 가상 랜딩 페이지입니다. Flex 속성을 이용한 반응형 웹사이트로, 플러그인을 최소화하고 jQuery를 이용하여 퍼블리싱하였습니다.<span>【작업환경】 VSCODE, jQuery</span>',
    },
    {
        num: 2,
        title: 'KKONDAE Test',
        sub: '키치한 컨셉의 꼰대력 테스트 사이트입니다.',
        text: '키치한 컨셉의 꼰대력 테스트 사이트입니다. 바닐라JS를 이용하여 데이터를 핸들링하였고, 카카오톡 API를 활용하여 공유 기능을 구현하였습니다. <span>【작업환경】 Atom, JavaScript</span>',
    },
    {
        num: 3,
        title: 'Law Firm Website',
        sub: '가상의 법무법인 홈페이지',
        text: '가상의 법무법인 홈페이지를 디자인하고 퍼블리싱하였습니다. jQuery를 이용하였고, Flex 속성을 이용한 반응형 웹사이트입니다. <공지사항> 카테고리를 서브페이지로 확인할 수 있습니다. <span>【작업환경】 VSCODE, jQuery</span>'
    },
]

const thumbUrl = './resources/img/single/single-thumb-';
const modalUrl = './resources/img/single/single-modal-';

// Append data of the Design file list
$(function () {
    for (key in data) {
        $('.container').append(
            '<div class="item flex" name="'
            + data[key].num
            + '"> <h1>'
            + data[key].title
            + '</h1> <img src="'
            + thumbUrl
            + data[key].num
            + '.jpg" alt="'
            + data[key].title
            + '"><p>'
            + data[key].text
            + '</p></div>'
        );
    };
});

// Toggle MODAL and Append single
$(document).on('click', '.container .item', function () {
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