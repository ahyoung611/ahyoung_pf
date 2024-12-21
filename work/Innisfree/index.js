

// document.querySelectorAll('li').forEach(function (li) {
//     li.addEventListener('mouseenter', function () {
//         let img = this.dataset.bg
//         // alert(img)

//         this.classList.add('on')
//         document.querySelector('.b-bg video').setAttribute('src', img)

//     })
//     li.addEventListener('mouseleave',function(){
//         this.classList.remove('on')
//     })
// })

const section = document.querySelector('section')
const article = document.querySelectorAll('.title li')
const frame = document.querySelector('.frame')//하단 영역
const scene = document.querySelector('.scene')//불러들일 파일 공간
const video = document.querySelector('video')

document.querySelectorAll('.title li').forEach((li) => {

    const h3 = li.querySelector('h3')
    splitText(h3)

    li.addEventListener('mouseenter', function () {
        this.classList.add('on')

        let bg = li.dataset.bg
        // alert(bg)
        console.log(bg);
        video.setAttribute('src', bg)

        moveUp(h3)

    })

    li.addEventListener('mouseleave', function () {
        this.classList.remove('on')
        const h3 = li.querySelector('h3')
        resetText(h3)

    })
})

document.querySelectorAll('button a').forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const href = this.getAttribute('href')
        // alert(href)
        frame.style.top = 0

        //fetch api 자료 불러오기
        fetch(href)
            .then(res => res.text())
            .then(data => { scene.innerHTML = data })
        document.body.style.overflowY = 'auto'
    })
})

window.addEventListener('scroll', function () {
    if (window.scrollY === 0) {
        frame.style.top = '100%'
        document.body.style.overflowY = 'hidden'
    }
})

function splitText(el) {
    const txt = el.innerText
    let tags = ''
    txt.split('').forEach((letter) => {
        tags+= `<span>${letter}</span>`
    })
    el.innerHTML = tags
}

function moveUp(el){
    const spans=el.querySelectorAll('span')
    spans.forEach((span,i)=>{
        span.style.transitionDelay=`${i*.06}s`
        span.style.transform="translateY(0)"
        span.style.opacity='1'
    })
}

function resetText(el){
    const spans = el.querySelectorAll('span')
    spans.forEach((span,i)=>{
        span.style.transform="translateY(100%)"
        span.style.opacity='0'
    }
)}