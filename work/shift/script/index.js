
$('li.shift').click(function () {
    $('#sect1').show()
    lineShow()
    mainHide()
    
})

$('a.close1').click(function () {
    lineHide()
    mainShow()
    $('#sect1').hide()
})

$('a.close2').click(function () {
    lineHide()
    mainShow()
    $('#sect2').animate({ 'height': '0' }, function () {
        $('#sect2').hide()
    })
})

$('li.vitamin').click(function(){
    mainHide()
    $('#sect2').delay(100).show()
    $('#sect2').animate({'height':'400px'},1000)
})



function lineShow() {
    $('.top').delay(500).animate({ 'width': '100%' }, 600, function () {
        $('.right').animate({ 'height': '100%' }, 600, function () {
            $('.bottom').animate({ 'width': '100%'}, 600, function () {
                $('.left').animate({ 'height': '100%' }, 600, function () {
                    $('#sect1 figure').fadeIn()
                })
            })
        })
    })
}

function lineHide() {
    $('.top').animate({ 'width': '0%'})
    $('.right').animate({ 'height': '0%'})
    $('.bottom').animate({ 'width': '0%'})
    $('.left').animate({ 'height':'0%'},600, function () {
        $('#sect1 figure').fadeOut()
    })
}

function mainHide(){
    $('.video').animate({'top':'-1000px'},500)
    $('.menu').delay(300).animate({'top':'1000px'},500)
    $('.main-visual').addClass('on')
 
}

function mainShow(){
    $('.video').animate({'top':'-0'},500)
    $('.menu').delay(300).animate({'top':'0'},500)
    $('.main-visual').removeClass('on')
    
}
