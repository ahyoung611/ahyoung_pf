
//next, prev 버튼 시 hslide, vslide 전환
$('button.next').click(function (e) {
    // alert()
    e.preventDefault();
    $('.vslide-wrap').stop().animate({ 'top': '-200%' }, function () {
        $('.vslide').first().appendTo('.vslide-wrap')
        $('.vslide-wrap').css({ 'top': '-100%' })
    })
    $('.hslide-wrap').stop().animate({ 'left': '-200%' }, function () {
        $('.hslide').first().appendTo('.hslide-wrap')
        $('.hslide-wrap').css({ 'left': '-100%' })
    })

    slideReset();
})

$('button.prev').click(function (e) {
    // alert()
    e.preventDefault();
    $('.vslide-wrap').stop().animate({ 'top': '0' }, function () {
        $('.vslide').last().prependTo('.vslide-wrap')
        $('.vslide-wrap').css({ 'top': '-100%' })
    })
    $('.hslide-wrap').stop().animate({ 'left': '0' }, function () {
        $('.hslide').last().prependTo('.hslide-wrap')
        $('.hslide-wrap').css({ 'left': '-100%' })
    })

    slideReset();
})

function slideReset(){
    $('.vslide').find('.tab li').stop().fadeOut()
    $('.vslide').find('.tab li:first-child').stop().fadeIn()
    
    $('.tab-menu li a').removeClass('on')
    $('.tab-menu').find('li:first a').addClass('on')
    
    for (let i = 0; i < $('.tab-menu').length; i++) {
        let tab = $('.tab-menu').eq(i).find('li:first a img').attr('src');
        $('.hslide').eq(i).css({
            'background-image': 'url(' + tab + ')'
        });
    };
}

// tab-menu 클릭 시 tab 전환
$('.tab-menu li a').click(function (e) {
    e.preventDefault();
    let tab = $(this).find('img').attr("src");
    let i = $(this).parents('.tab-menu li').index(); // 누른 li 자릿수
    let idx = $(this).parents('.vslide').index(); // 보고 있는 슬라이드 자릿수

    $('.hslide').eq(idx).css({
        'background-image': 'url(' + tab + ')'
    });

    $(this).closest('.tab-menu').find('a').removeClass('on') //closest = 가장 가까운
    $(this).addClass('on')


    $('.vslide').eq(idx).find('.tab li').fadeOut()
    $('.vslide').eq(idx).find('.tab li').eq(i).fadeIn()

}) 