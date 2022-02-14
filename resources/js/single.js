const data = [
    {
        num: 1,
        title: 'EsRP Landing page',
        ait: 'ESRP 랜딩 페이지',
        linkSite: 'https://project-esrp.netlify.app/',
        linkGit: 'https://github.com/kim-yeny/project-esrp',
        text: '팀 프로젝트로 구현했던 웹 ERP 서비스의 가상 랜딩 페이지입니다. Flex 속성을 이용한 반응형 웹사이트로, 플러그인을 최소화하고 jQuery를 이용하여 퍼블리싱하였습니다.',
    },
    {
        num: 2,
        title: 'KKONDAE Test',
        ait: '꼰대력 테스트',
        linkSite: 'https://project-kkondae.netlify.app/',
        linkGit: 'https://github.com/kim-yeny/project-kkondae',
        text: '키치한 컨셉의 꼰대력 테스트 사이트입니다. 부트스트랩을 활용하여 퍼블리싱하였습니다. 데이터는 바닐라JS로 핸들링하였고, 카카오톡 API를 활용한 공유 기능까지 구현하였습니다.',
    },
    {
        num: 3,
        title: 'Law Firm Website',
        ait: '로펌 웹사이트',
        linkSite: 'https://project-lawfirm.netlify.app/',
        linkGit: 'https://github.com/kim-yeny/project-lawfirm',
        text: '가상의 법무법인 홈페이지를 디자인 및 퍼블리싱하였습니다. jQuery를 이용하였고, Flex 속성을 이용한 반응형 웹사이트입니다. <b>\'고객센터 > 공지사항\'</b> 카테고리를 서브페이지로 확인하실 수 있습니다.',
    },
    {
        num: 4,
        title: 'Online Shopping',
        ait: '온라인 쇼핑몰',
        linkSite: 'https://project-shop-1.netlify.app/',
        linkGit: 'https://github.com/kim-yeny/project-shop-1',
        text: '가상의 온라인 웹 쇼핑몰 메인 화면을 디자인 및 퍼블리싱하였습니다. 너비 1280px의 고정형 웹사이트로, 별도의 플러그인 없이 jQuery를 사용하여 완성하였습니다.',
    },
]

const thumbUrl = './resources/img/single/single-thumb-';
const modalUrl = './resources/img/single/single-modal-';

// Append data into the container's item
$(function () {
    for (key in data) {
        $('.container').append(
            '<div class="item flex" name="'
            + data[key].num
            + '"><h1>'
            + data[key].title
            + '</h1><img src="'
            + thumbUrl
            + data[key].num
            + '.jpg" alt="'
            + data[key].alt
            + '"><p>'
            + data[key].text
            + '</p></div>'
        );
    };
});

// Toggle MODAL and Append data
$(document).on('click', '.container .item', function () {
    // Index of the IMG in the container's item
    var idx = $(this).attr('name') - 1;

    // Append data into the MODAL
    $('.modal .title').append(
        '<h1>'
        + data[idx].title
        + '</h1><a href="'
        + data[idx].linkSite
        + '" target="_blank"><i class="fas fa-arrow-alt-circle-right"></i></a><a href="'
        + data[idx].linkGit
        + '" target="_blank"><i class="fab fa-github"></i></a>'
    );

    $('.modal .item').append(
        '<img src="'
        + modalUrl
        + data[idx].num
        + '.jpg" alt="'
        + data[idx].alt
        + '"><div class="bottom"></div><div class="btn-move"><a href="'
        + data[idx].linkSite
        + '" target="_blank"><i class="fas fa-arrow-alt-circle-right"></i>Visit site</a><a href="'
        + data[idx].linkGit
        + '" target="_blank"><i class="fab fa-github"></i>GitHub</a></div>'
    );

    // Open MODAL
    modal.show();
    $('body').css('overflow-y', 'hidden');
});