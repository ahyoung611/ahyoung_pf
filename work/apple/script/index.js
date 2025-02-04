
// menu
function myFunction(x) {
    x.classList.toggle("change");
}

// header
$('.menu-icon').click(function () {
    $('.menu').slideToggle(800)
})
$('.user').click(function () {
    $('.login').slideToggle(800)
})


$('.product-color a').click(function (e) {
    e.preventDefault()
    let productImg = $(this).attr('href')
    $(this).closest('.product').find('figure img').attr('src', productImg)

})



// $('.product-item li').first().addClass('on')
// 위에 처럼하면 첫번째만 되니, 아래 사용함
// 아래사용>> 1,2,3 product 다 아이템이 활성화됨
$('.product-item').each(function () {
    $(this).find('li').first().addClass('on')
})

// 첫번째 상품 상세페이지만 보여줘
// $('.product-summary li').first().siblings().css('display','none')
// 위에처럼하면 하나만 읽음
$('.product-summary').each(function () {
    $(this).find('li').first().siblings().css('display', 'none')
})

//product-item li 클릭
$('.product-item li a').click(function (e) {
    e.preventDefault()
    let productImg = $(this).attr('href')//get 값을 읽어라
    // $('figure img').attr('src',productImg)//set 값을 할당하겠다.
    $(this).closest('.product').find('figure img').attr('src', productImg)

    //버튼 활성화
    // $('.product-item li').removeClass('on')
    //위에 처럼하면 다 지워져서 
    $(this).parent().siblings().removeClass('on')
    $(this).parent().addClass('on')

    // 해당 상품 설명 보여줘
    let i = $(this).parent().index()
    $(this).closest('.product-item').prev().find('li').hide()
    $(this).closest('.product-item').prev().find('li').eq(i).show()
})
// $('.product-more').slideUp()
////////////////////////////////////////////////////////////
$('.more').click(function () {
    let $this = $(this)
    let $productMore = $this.parent('h2').next('.product-more')
   

    // hasclass 클래스 있는지/ 거짓(없으면)아무것도 안함. 참(있으면) on을 지우고, 슬라이드 업
    if ($this.hasClass('on')) { //상세보기가 열려있는 상태이면
        $this.removeClass('on') //상세보기 버튼 remove 하고
        $productMore.slideUp()//상세보기 내용을 닫아라
    } else {
        $('.more').removeClass('on') //기존에 있는 모든것 닫기
        $('.product-more').slideUp() //기존에 열려있는 페이지 닫기

        $(this).addClass('on') //현재 활성화
        $productMore.slideDown()//현재에 해당하는 상세설명 보기
    }


    // $('.product-more').slideDown()
})
