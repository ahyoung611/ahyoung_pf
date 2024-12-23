// header -------------------------------------
const header = document.querySelector('header');

if (window.scrollY <= 645) {
    header.classList.remove('fixed');
} else {
    header.classList.add('fixed');
}

// 스크롤 이벤트 추가
window.addEventListener('scroll', () => {
    
    const scrollY = window.scrollY;

    if (scrollY > 645) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

//banner -----------------------------------------------

var BSwiper = new Swiper(".BSwiper", {
    effect: "fade",
    centeredSlides: true,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,// 사용자 상호작용 후에도 자동재생 유지
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//배너 swiper1의 화면전환 ------------------
BSwiper.on('slideChangeTransitionStart', function () {
    if (BSwiper.autoplay.running) {
        BSwiper.params.speed = 1500; // autoplay 중일 때는 서서히 전환
    } else {
        BSwiper.params.speed = 0; // 네비게이션 클릭 시 즉각 전환
    }
});

BSwiper.on('navigationPrev', function () {
    BSwiper.params.speed = 0; // 네비게이션 이전 버튼 클릭 시 즉각 전환
});

BSwiper.on('navigationNext', function () {
    BSwiper.params.speed = 0; // 네비게이션 다음 버튼 클릭 시 즉각 전환
});

//배너 하단의 page-wrap  클릭시 화면 전환 ----------------
const liElems = document.querySelectorAll('.page-wrap li a')
// console.log(liElems);

liElems.forEach(function (liElem, idx) {

    liElem.addEventListener('click', function (e) {
        e.preventDefault()

        liElems.forEach(function (item) {
            item.classList.remove('on')
        })

        liElem.classList.add('on')

        BSwiper.slideToLoop(idx, 500)
    })

    liElem.addEventListener('mouseenter', function () {

        liElems.forEach(function (item) {
            item.classList.remove('on')
        })

        liElem.classList.add('on')

    })

})

BSwiper.on('slideChange', function () {

    //해당 번째 인덱스 값을 get   //진짜 슬라이드의 인덱스 realIndex
    let activeIdx = BSwiper.realIndex

    liElems.forEach(function (item) {
        item.classList.remove('on')
    })
    //li 모두를 읽어오면 배열로 지정되어진다. [몇번째]배열번째 활성화를 때문에
    liElems[activeIdx].classList.add('on')
})

//menu-bar 클릭하면 gnb-wrap이 열림 ---------------------
$('.open-btn').click(function (e) {
    e.preventDefault()
    $('.gnb-wrap').css('left', '0')
})

$('.close-btn').click(function (e) {
    e.preventDefault()
    $('.gnb-wrap').css('left', '-100%')
})


//gnb-list1의 menu 슬라이드 
$('.main-menu').mouseenter(function () {
    $(this).find('.sub-menu').stop().slideDown(500)
})

$('.main-menu').mouseleave(function () {
    $(this).find('.sub-menu').stop().slideUp(500)
})


//gnb-list4의 swiper 
var gnbSwiper = new Swiper(".gnbSwiper", {

    navigation: {
        nextEl: ".gnbSwiper .swiper-button-next", // gnbSwiper 내의 next 버튼
        prevEl: ".gnbSwiper .swiper-button-prev", // gnbSwiper 내의 prev 버튼
    },
});

//sect1 TICKET OPEN ----------------------------------------------
var tSwiper = new Swiper(".t-Swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
});


//sect2 rankSwiper --------------------------
var rankSwiper = new Swiper(".rank-Swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
});

//tablist에  첫번째 li a.on
$('.sect2 .tab-menu li:first-child a').addClass('on');
$('.sect2 .tab:first-child').addClass('on');

tabFuc('#sect2')
tabFuc('#sect5')

function tabFuc(target) {

    let targetElem = document.querySelector(target)
    let aElems = targetElem.querySelectorAll('.tab-menu li a')

    aElems.forEach(function (a) {
        a.addEventListener('click', function (e) {
            e.preventDefault()

            for (let menu of targetElem.querySelectorAll('.tab-menu li a')) {
                menu.classList.remove('on')
            }

            this.classList.add('on')

            let href = this.getAttribute('href')

            for (let tab of targetElem.querySelectorAll('.tab')) {
                tab.classList.remove('on')
            }

            targetElem.querySelector(href).classList.add('on')

        })
    })
}

//sect3 Swiper3 -------------------------------
var bnrSwiper = new Swiper(".bnr-Swiper", {
    effect: "fade",
    centeredSlides: true,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,// 사용자 상호작용 후에도 자동재생 유지
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    fadeEffect: { // fade 효과 설정
        crossFade: true,
    },
});

const bElems = document.querySelectorAll('.swiper-pagination-bullet')

bnrSwiper.on('init', function () {
    let activeIdx = bnrSwiper.realIndex;
    bElems[activeIdx].classList.add('on'); // 초기 로드시 첫 번째 인덱스에 on 클래스 추가
});

bnrSwiper.on('slideChange', function () {
    let activeIdx = bnrSwiper.realIndex

    bElems.forEach(function (item) {
        item.classList.remove('on')
    })

    bElems[activeIdx].classList.add('on')
})

bnrSwiper.init(); // Swiper를 수동으로 초기화

//sect4 -----------------------------------------------

const hedings = document.querySelectorAll('.sect4 .accordion_title')
const tabs = document.querySelectorAll('.sect4 .tab')

// 열려있는 tab을 기억하는 변수명
let activeTab = tabs[0]

// 초기 상태로 첫 번째 탭 열기
openTab(activeTab)

hedings.forEach((title) => {
    title.addEventListener('mouseenter', function () {
        const parentTab = title.parentNode // 클릭한 title의 부모
        openTab(parentTab)

        if (activeTab && activeTab !== parentTab) {
            closeTab(activeTab)
        }

        activeTab = parentTab
    })
})

function openTab(tab) {
    const desc = tab.querySelector('.accordion_desc')
    tab.classList.add('on')
    desc.style.maxHeight = desc.scrollHeight + 'px'
    desc.style.opacity = 1
}

function closeTab(tab) {
    const desc = tab.querySelector('.accordion_desc')
    tab.classList.remove('on')
    desc.style.maxHeight = 0
    desc.style.opacity = 0
}

var evnSwiper = new Swiper(".evnSwiper", {
    direction: "vertical", // 세로 슬라이드 설정
    slidesPerView: 3, // 한 화면에 보여질 슬라이드 개수
    spaceBetween: 10, // 슬라이드 간 간격 (옵션)
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    loop: true,
});


//sect5 RegSwiper -----------------------------------------------
var RegSwiper = new Swiper(".region-Swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
});

//footer
document.querySelector(".family-btn").addEventListener("click", (event) => {
    event.preventDefault(); // 기본 동작 방지
    const familyMenu = document.querySelector(".family");
    const button = event.currentTarget;

    // 버튼과 메뉴에 동시에 on 클래스 토글
    button.classList.toggle("on");
    familyMenu.classList.toggle("on");

    // 높이 조정
    if (button.classList.contains("on")) {
        familyMenu.style.height = "210px"; // 펼쳐진 높이
    } else {
        familyMenu.style.height = "28px"; // 기본 높이
    }
});


