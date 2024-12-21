
$('li.main-menu').mouseenter(function () {
    $(this).find('ul.sub-menu').stop().slideDown()
})
$('li.main-menu').mouseleave(function () {
    $(this).find('ul.sub-menu').stop().slideUp()
})



var swiper1 = new Swiper(".slide1", {
    effect: "fade",
    speed: 1000, //변화속도 지정
    autoplay: {
        delay: 3000,
        disableOnInteration: false,
    },

});
// //버튼 클릭 해당 번째 슬라이드 show
// $('.menu ul li').click(function (e) {
//     e.preventDefault()
//     let idx = $(this).index()
//     $('.menu ul li').removeClass('on')
//     $(this).addClass('on')
//     swiper1.slideTo(idx, 500)//해당 슬라이드 번째 보여줘
// })

//li 모두를 가져와라
const liElems = document.querySelectorAll('.menu ul li')
//    console.log(liElems);

//모든 li를 대상으로 ~ 각각 li요소
//leElem(단수) liElem(복수)
liElems.forEach(function (liElem, idx) {
    // console.log(liElems,idx);
    //각각 li
    liElem.addEventListener('click', function (e) {
        e.preventDefault()
        //모든 li
        liElems.forEach(function (item) {
            item.classList.remove('on')
        })
        //각각 li 활성화(on)
        liElem.classList.add('on')
        swiper1.slideTo(idx, 500)
    })



})

// //해당 슬라이드에 맞는 메뉴 활성화
// swiper1.on('slideChange', function () {
//     let activeIdx = swiper1.activeIndex
//     //    console.log(activeIndex);
//     //모든 네비 비활성화

//     //해당번째 네비를 활성화
//     $('.menu ul li').removeClass('on')
//     $('.menu ul li').eq(activeIdx).addClass('on')
// });

swiper1.on('slideChange', function () {
    let activeIdx = swiper1.activeIndex

    liElems.forEach(function (item) {
        item.classList.remove('on')
    })
    //li 모두를 읽어오면 배열로 저장되어진다.
    liElems[activeIdx].classList.add('on')

})


