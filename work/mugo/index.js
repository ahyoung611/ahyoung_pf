
$('.main-menu').mouseenter(function () {
    $(this).find('ul.sub-menu').stop().slideDown()
})

$('.main-menu').mouseleave(function () {
    $(this).find('ul.sub-menu').stop().slideUp()
})

// //a태그에 위치값을 지정해주었다.
// $('.friend li a').click(function (e) {
//     e.preventDefault()

//     $('.friend li a').removeClass('on')
//     $(this).addClass('on')
//     //클릭한 a에서 위치값을 읽어라
//     let href = $(this).attr('href')
//     alert(href)

//     $('article').removeClass('on')
//     //해당 위치값을 보여라
//     $(href).addClass('on')


// })

const aElems = document.querySelectorAll('.friend li a')
console.log(aElems)
aElems.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        aElems.forEach(function (a) {
            a.classList.remove('on')
        })
        this.classList.add('on')

        let href = this.getAttribute('href')
        // alert(href)
        document.querySelectorAll('article').forEach(function (art) {
            art.classList.remove('on')

        })
        document.querySelector(href).classList.add('on')
    })

})

const video = document.querySelectorAll('.video-tabs-menu li a')
console.log(video)
video.forEach(function(anchor){
    anchor.addEventListener('click',function(e){
        e.preventDefault()
        
        video.forEach(function (a) {
            a.classList.remove('on')
        })
        this.classList.add('on')


        let href = this.getAttribute('href')
        // alert(href)
        
        document.querySelectorAll('.tab-panels').forEach(function (art) {
            art.classList.remove('on')

        })
        document.querySelector(href).classList.add('on')
    })

})



// function bannerRotate(){
//     $('.rotate').animate({'rotate':'+=10deg'},'50','linear')
// }

// let stopId

// $('.quick').mouseenter(function(){
//     stopId = setInterval(bannerRotate, 50)
// })

// $('.quick').mouseleave(function(){
//     $('.rotate').stop(1,0)
//     clearInterval(stopId)
// })