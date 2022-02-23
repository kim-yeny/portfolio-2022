const data = [
    {
        num: 1,
        sub: "Branding",
        title: "강친합기도",
        text: "합기도 전문 교육 시설 브랜딩"
    },
    {
        num: 2,
        sub: "Branding",
        title: "달빛바다",
        text: "무인 카페 브랜딩"
    },
    {
        num: 3,
        sub: "Branding",
        title: "달콤한 캬라멜 연구소",
        text: "카페 브랜딩"
    },
    {
        num: 4,
        sub: "Branding",
        title: "도그앤캣",
        text: "셀프 반려동물 사우나 브랜딩"
    },
    {
        num: 5,
        sub: "Promotion",
        title: "논산지역자활센터",
        text: "공공기관 비품 및 판촉 디자인"
    },
    {
        num: 6,
        sub: "Promotion",
        title: "베어독 D&M",
        text: "사내 비품 및 판촉 디자인"
    },
    {
        num: 7,
        sub: "Promotion",
        title: "육회한 사시미",
        text: "요식업 비품 및 판촉 디자인"
    },
    {
        num: 8,
        sub: "Business card",
        title: "메리츠화재",
        text: "개인 명함 디자인"
    },
    {
        num: 9,
        sub: "Business card",
        title: "미래산업",
        text: "개인 명함 디자인"
    },
    {
        num: 10,
        sub: "Business card",
        title: "소망카센타",
        text: "개인 명함 디자인"
    },
    {
        num: 11,
        sub: "Business card",
        title: "토마스몬슨",
        text: "개인 명함 디자인"
    },
    {
        num: 12,
        sub: "Business card",
        title: "피엘로직스",
        text: "단체 명함 디자인"
    },
    {
        num: 13,
        sub: "Naver Blog",
        title: "광천제재소",
        text: "블로그 스킨 및 위젯 디자인"
    },
    {
        num: 14,
        sub: "Naver Blog",
        title: "베어독 D&M",
        text: "블로그 스킨 및 위젯 디자인"
    },
    {
        num: 15,
        sub: "Naver Blog",
        title: "우드테일러",
        text: "블로그 스킨 및 위젯 디자인"
    },
    {
        num: 16,
        sub: "Naver Blog",
        title: "하나로사랑의원",
        text: "블로그 스킨 및 위젯 디자인"
    },
]

const thumbUrl = "./resources/img/design/design-thumb-";
const modalUrl = "./resources/img/design/design-modal-";

// Append data into the container"s item
$(function () {
    for (key in data) {
        $(".container").append(
            `<div class="item flex" name="${data[key].num}"`
            + `style="background-image: url(${thumbUrl}${data[key].num}.jpg)" alt="${data[key].title}">`
            + `<div class="hide"><h1><span>${data[key].sub}</span>`
            + `${data[key].title}</h1></div></div>`

        );
    };
});

// Toggle MODAL and Append data
$(document).on("click", ".container .item", function(){
    // Index of the IMG in the container"s item
    var idx = $(this).attr("name") - 1;

    // Append data into the MODAL
    $(".modal .title").append(
        `<h1>${data[idx].sub}<span>${data[idx].text}</span></h1>`
    );

    $(".modal .item").append(
        `<img src="${modalUrl}${data[idx].num}.jpg" alt="${data[idx].title}">`
    );
    
    // Open MODAL
    modal.show();
    $("body").css("overflow-y", "hidden");
});

// 동적으로 불러온 요소에 이벤트 주는 방식 $(document).on 필수
// 문제: 요소가 아닌 body 전체를 변수로 인식함.
// 변수를 사용하지 않고, 직접 요소를 작성해주니 해결됨.
// 아마 상단에서 선언한 변수는 ready이기 때문에
// 동적 내용으로 업데이트 되지 않는 문제... 비슷한게 아닐까 추측 중.