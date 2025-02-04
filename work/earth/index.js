

$('.menu-icon').click(function(){
    // $(this).find('.bar').addClass('on')
    
    $(this).fadeOut() // 아이콘 사라져
    $('header').addClass('on') // 헤더나와
    $('section').addClass('on') //section 기울려
})

$('ul.menu li').click(function(){
    $('ul.menu li').removeClass('on')
    $(this).addClass('on')
    
    $('.menu-icon').fadeIn()//아이콘 나와
    $('header').removeClass('on')//헤어사라져
    $('section').removeClass('on')//전체 화면으로 보여
    let idx=$(this).index()

    $('body').removeClass()//article별 색상 채워
    $('body').addClass('bg'+idx)
    $('article').removeClass('on')//기존에 보이던 article 사라져
    $('article').eq(idx).addClass('on')//해당번째 article 보여
})