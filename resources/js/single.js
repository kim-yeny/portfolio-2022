const data = [
    {
        num: 1,
        title: "EsRP Landing page",
        ait: "ESRP 랜딩 페이지",
        linkSite: "https://project-esrp.netlify.app/",
        linkGit: "https://github.com/kim-yeny/project-esrp",
        text: "팀 프로젝트로 구현했던 웹 ERP 서비스의 가상 랜딩 페이지입니다. Flex 속성을 이용한 반응형 웹사이트로, 플러그인을 최소화하고 jQuery를 이용하여 퍼블리싱 하였습니다.",
        code: `<img src="./resources/img/single/single-qr-1.png" alt="ESRP 랜딩 페이지 QR코드">`
    },
    {
        num: 2,
        title: "KKONDAE Test",
        ait: "꼰대력 테스트",
        linkSite: "https://project-kkondae.netlify.app/",
        linkGit: "https://github.com/kim-yeny/project-kkondae",
        text: "키치한 컨셉의 꼰대력 테스트 사이트입니다. 부트스트랩을 활용하여 퍼블리싱하였습니다. 데이터는 Javascript 핸들링하였고, 카카오톡 API를 활용한 공유 기능까지 구현하였습니다.",
        code: `<img src="./resources/img/single/single-qr-2.png" alt="꼰대력 테스트 QR코드">`
    },
    {
        num: 3,
        title: "Law Firm Website",
        ait: "로펌 웹사이트",
        linkSite: "https://project-lawfirm.netlify.app/",
        linkGit: "https://github.com/kim-yeny/project-lawfirm",
        text: "가상의 법무법인 홈페이지를 디자인 및 퍼블리싱하였습니다. jQuery를 이용하였고, Flex 속성을 이용한 반응형 웹사이트입니다. <b>'고객센터 > 공지사항'</b> 카테고리를 서브 페이지로 확인하실 수 있습니다.",
        code: `<img src="./resources/img/single/single-qr-3.png" alt="로펌 웹사이트 QR코드">`
    },
    {
        num: 4,
        title: "Momentum Clone",
        ait: "모멘텀 클론코딩",
        linkSite: "https://new-momentum.netlify.app/",
        linkGit: "https://github.com/kim-yeny/project-momentum",
        text: "구글 크롬(Chrome) 확장 프로그램 모멘텀(Momentum)을 클론 코딩하였습니다. Javascript, Local Storage, 날씨 API를 사용하여 기본 기능을 재현하였으며 리디자인한 UI에 추가 기능을 더하여 완성하였습니다.",
        code: ``
    },
    {
        num: 5,
        title: "Online Shopping",
        ait: "온라인 쇼핑몰",
        linkSite: "https://project-shop-01.netlify.app/",
        linkGit: "https://github.com/kim-yeny/project-shop-1",
        text: "가상의 온라인 웹 쇼핑몰 메인 화면을 디자인 및 퍼블리싱하였습니다. 너비 1280px의 고정형 웹사이트로, 별도의 플러그인 없이 jQuery를 사용하여 완성하였습니다.",
        code: ``
    },
]

const thumbUrl = "./resources/img/single/single-thumb-";
const modalUrl = "./resources/img/single/single-modal-";

// Append data into the container's item
$(function () {
    for (key in data) {
        $(".container").append(
            `<div class="item flex" name="${data[key].num}" tabindex="0">`
            + `<h1>${data[key].title}</h1>`
            + `<img src="${thumbUrl}${data[key].num}.jpg" alt="${data[key].alt}">`
            + `<p>${data[key].text}</p></div>`
        );
    };
});

// Toggle MODAL and Append data
$(document).on("click", ".container .item", function () {
    // Index of the IMG in the container"s item
    var idx = $(this).attr("name") - 1;

    // Append data into the MODAL
    $(".modal .title").append(
        `<h1>${data[idx].title}</h1>`
        + `<a href="${data[idx].linkSite}" target="_blank">`
        // + `<i class="fas fa-arrow-alt-circle-right"></i></a>`
        + `<a href="${data[idx].linkGit}" target="_blank">`
        // + `<i class="fab fa-github"></i>`
        + `</a>`
    );

    $(".modal .item").append(
        `<img src="${modalUrl}${data[idx].num}.jpg" alt="${data[idx].alt}">`
        + `<div class="bottom"></div>`
        + `<div class="btn-move flex">`
        + `<a href="${data[idx].linkSite}" class="flex" target="_blank">`
        + `<div><i class="fas fa-arrow-alt-circle-right"></i>View site</div>`
        + `${data[idx].code}`
        + `<a href="${data[idx].linkGit}" class="flex" target="_blank">`
        + `<div><i class="fab fa-github"></i>GitHub</div></a>`
        + `</div>`
    );
    
    // Open MODAL
    modal.show();
    $("body").css("overflow-y", "hidden");
});