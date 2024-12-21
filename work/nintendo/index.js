

let currentClass=''
$('ul.nav li').click(function(){
    $('ul.nav li').removeClass('on')
    $(this).addClass('on')

    let $li = $(this).attr('data-text')

    let activeClass = 'show'+ $li

    if(currentClass){  
        $('.cube').removeClass(currentClass)
    }
    $('.cube').addClass(activeClass)
    currentClass = activeClass


    let idx = $(this).index()
    $('.tab').hide()
    $('.tab').eq(idx).show()

    let bg= 'bg'+idx
    // alert(bg)
    
    $('body').removeClass()
    $('body').addClass(bg)

})

$('ul.nav li').click(function(){

})


