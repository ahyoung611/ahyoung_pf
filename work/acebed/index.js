//header
let prevScrollTop = 0
let header = document.querySelector('header')

const sectionElems = document.querySelectorAll('section')

window.addEventListener('scroll', function () {
    let currentScrollTop = window.pageYOffset

    if (currentScrollTop > prevScrollTop) {
        header.classList.add('up')
    } else {
        header.classList.remove('up')
    }
    prevScrollTop = currentScrollTop

})

// menu
$('.left-menu li.main-menu').mouseenter(function () {
    $('.left-menu .sub-menu').stop().slideDown(200)
    $('.nav-a').addClass('on')
})

$('.left-menu').mouseleave(function () {
    $('.left-menu .sub-menu').stop().slideUp(200)
    $('.nav-a').removeClass('on')
})

$('.right-menu li.main-menu').mouseenter(function () {
    $('.right-menu .sub-menu').stop().slideDown(200)
    $('.nav-a').addClass('on')
})

$('.right-menu').mouseleave(function () {
    $('.right-menu .sub-menu').stop().slideUp(200)
    $('.nav-a').removeClass('on')
})

//sect1 -----------------------------------------------------

var swiper1 = new Swiper(".Swiper1", {
    navigation: {
        nextEl: ".next1",
        prevEl: ".prev1",
    },
});


// prev & next 네비게이션 --------------
let prev = document.querySelectorAll('.prev')
let next = document.querySelectorAll('.next')

prev.forEach(function (prevElem) {
    prevElem.addEventListener('mouseenter', function () {
        this.querySelector('path').setAttribute('d', 'M 40 10 Q 10 65 40 140')

    })

    prevElem.addEventListener('mouseleave', function () {
        this.querySelector('path').setAttribute('d', 'M 40 10 Q 40 65 40 140')
    })
})


next.forEach(function (nextElem) {
    nextElem.addEventListener('mouseenter', function () {
        this.querySelector('path').setAttribute('d', 'M 10 10 Q 40 65 10 140')
    })

    nextElem.addEventListener('mouseleave', function () {
        this.querySelector('path').setAttribute('d', 'M 10 10 Q 10 65 10 140')
    })
})


//sect2 ------------------------------------------------

var hswiper = new Swiper(".hSwiper", {
    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: ".next2",
        prevEl: ".prev2",
    },
});

var vswiper = new Swiper(".vSwiper", {
    direction: "vertical",

    navigation: {
        nextEl: ".next2",
        prevEl: ".prev2",
    },

});

const sElems = document.querySelectorAll('.sect2 .tab-menu li a')
// console.log(liElems);

sElems.forEach(function (sElem, idx) {
    // console.log(liElem, idx);

    sElem.addEventListener('click', function (e) {
        e.preventDefault()

        sElems.forEach(function (item) {
            item.classList.remove('on')
        })

        sElem.classList.add('on')
        hswiper.slideTo(idx, 500)
        vswiper.slideTo(idx, 500)
    })
})

hswiper.on('slideChange', function () {
    let activeIdx = hswiper.activeIndex

    sElems.forEach(function (item) {
        item.classList.remove('on')
    })

    sElems[activeIdx].classList.add('on')
})


//sect3 -----------------------------------------


var col1swiper = new Swiper(".col1Swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    navigation: {
        nextEl: ".next3",
        prevEl: ".prev3",
    },
});

var col2swiper = new Swiper(".col2Swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    scrollbar: {
        el: ".swiper-scrollbar",
    },

    navigation: {
        nextEl: ".next3",
        prevEl: ".prev3",
    },
});


// 초기 상태 설정
document.querySelector('.col1Swiper').style.display = 'block';
document.querySelector('.col2Swiper').style.display = 'none';

const cElems = document.querySelectorAll('.art1 .tab-menu li a');
const csElems1 = document.querySelectorAll('.col1Swiper .swiper-slide');
const csElems2 = document.querySelectorAll('.col2Swiper .swiper-slide');
const descElems1 = document.querySelectorAll('.art1 .col1Swiper .desc');
const descElems2 = document.querySelectorAll('.art1 .col2Swiper .desc');


cElems.forEach(function (cElem, idx) {
    cElem.addEventListener('click', function (e) {
        e.preventDefault();

        // 모든 탭에서 'on' 클래스 제거 후 클릭된 탭에 추가
        cElems.forEach(function (item) {
            item.classList.remove('on');
        });
        cElem.classList.add('on');

        // 클릭된 탭에 따라 첫 번째 슬라이드로 이동 및 Swiper 요소 업데이트
        if (idx === 0) {
            // 첫 번째 Swiper를 첫 번째 슬라이드로 이동하고 표시
            col1swiper.slideTo(0);
            document.querySelector('.col1Swiper').style.display = 'block';
            document.querySelector('.col2Swiper').style.display = 'none';

            // Swiper 업데이트 호출
            col1swiper.update();

            // 첫 번째 Swiper 관련 슬라이드와 설명 업데이트
            csElems1.forEach(function (item) {
                item.classList.remove('on');
            });
            descElems1.forEach(function (item) {
                item.classList.remove('on');
            });
            csElems1[0].classList.add('on');
            descElems1[0].classList.add('on');
        } else if (idx === 1) {
            // 두 번째 Swiper를 첫 번째 슬라이드로 이동하고 표시
            col2swiper.slideTo(0);
            document.querySelector('.col1Swiper').style.display = 'none';
            document.querySelector('.col2Swiper').style.display = 'block';

            // Swiper 업데이트 호출
            col2swiper.update();

            // 두 번째 Swiper 관련 슬라이드와 설명 업데이트
            csElems2.forEach(function (item) {
                item.classList.remove('on');
            });
            descElems2.forEach(function (item) {
                item.classList.remove('on');
            });
            csElems2[0].classList.add('on');
            descElems2[0].classList.add('on');
        }
    });
});

// col1swiper 슬라이드 변경 시 'on' 클래스 업데이트
col1swiper.on('slideChange', function(){
    let activeIdx = col1swiper.activeIndex;
    
    csElems1.forEach(function (item) {
        item.classList.remove('on');
    });
    descElems1.forEach(function(item){
        item.classList.remove('on');
    });

    csElems1[activeIdx].classList.add('on');
    descElems1[activeIdx].classList.add('on'); 
});

// col2swiper 슬라이드 변경 시 'on' 클래스 업데이트
col2swiper.on('slideChange', function(){
    let activeIdx = col2swiper.activeIndex;
    
    csElems2.forEach(function (item) {
        item.classList.remove('on');
    });
    descElems2.forEach(function(item){
        item.classList.remove('on');
    });

    csElems2[activeIdx].classList.add('on');
    descElems2[activeIdx].classList.add('on'); 
});

//art2 -------------------------------------

var openSwiper = new Swiper(".openSwiper ", {
    pagination: {
        el: ".swiper-pagination",
    },

});

const nElems = document.querySelectorAll('.art2 .tab-menu li a')

nElems.forEach(function (nElem, idx) {
    // console.log(nElem, idx);

    nElem.addEventListener('click', function (e) {
        e.preventDefault()

        nElems.forEach(function (item) {
            item.classList.remove('on')
        })

        nElem.classList.add('on')
        openSwiper.slideTo(idx, 500)
    })
})

openSwiper.on('slideChange', function () {
    let activeIdx = openSwiper.activeIndex

    nElems.forEach(function (item) {
        item.classList.remove('on')
    })

    nElems[activeIdx].classList.add('on')
}
)

//sect4 ---------------------------------------------------------

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    grid: {
        rows: 2,
    },
    spaceBetween: 40,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});