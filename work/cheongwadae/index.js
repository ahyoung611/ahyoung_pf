
const sections = document.querySelectorAll('section')
const footer = document.querySelector('footer')
const sectLast = sections[sections.length - 1]
const sectLastTop = sectLast.offsetTop



//whell control 제어
sections.forEach((sect, i) => {
    sect.addEventListener('wheel', function (e) {
        e.preventDefault()

        //마우스 휠 내리면 100, 올리면 -100 표시
        let delta = e.deltaY

        //첫번째 섹션 위로 가지 않도록
        if (delta < 0 && i === 0) {
            return

            //마지막 섹션 아래로 가지 않도록   
        } else if (delta > 0 && i === sections.length - 1) {
            //footer 보이게: 하나 위치 찾아갈 때 scrollintoview 사용
            footer.scrollIntoView({ behavior: 'smooth' })
            return
        }


        let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
        if (secTop) {
            let targetSecTop = secTop.offsetTop
            window.scrollTo({ top: targetSecTop, behavior: 'smooth' })
        }
    })
})

//전체 문서의 height 길이 페이지 전체가 3000
// console.log(document.body.scrollHeight);

// scrollY 값 = 2000까지 내렸어
// window.height 값 1080
// 2000 + 1080 = 스크롤의 top 위치 값

window.addEventListener('wheel', function (e) {
    //window.innerHeight + window.scrollY = 현재 스크롤 위치
    if (e.deltaY < 0 && window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
        e.preventDefault()
        window.scrollTo({ top: sectLastTop, behavior: 'smooth' })
    }
})

//nav
$('nav li.main-menu').mouseenter(function () {
    $(this).find('ul.sub-menu').stop().fadeIn()
})

$('nav li.main-menu').mouseleave(function () {
    $(this).find('ul.sub-menu').stop().fadeOut()
})

//updown-btn
$('.updown-btn').click(function () {
    let $this = $(this)
    let $subMenu = $this.parents('.main-m').next()
    let $MainM = $this.parent('.main-m')


    if ($this.hasClass('on')) {
        $this.removeClass('on')
        $subMenu.slideUp()
        $MainM.removeClass('on')


    } else {
        $('.updown-btn').removeClass('on')
        $('.main-m').removeClass('on')
        $('.sub-menu').slideUp()

        $(this).addClass('on')
        $subMenu.slideDown()
        $MainM.addClass('on')

    }
})

$('.open-btn').click(function () {
    $('.sitemap-box').css('left', '0%')
})

$('.close-map-btn').click(function () {
    $('.sitemap-box').css('left', '100%')
})


//gsap 섹션 1 슬라이드 & 글자 나오게
gsap.set('.bg > div', { opacity: 0 });

gsap.registerEffect({
    name: 'textEffect',
    extendTimeline: true,

    defaults: { //defaults는 초기값 //defaults 확인
        x: 20,
        y: -20
    },
    // 기본속성 값은 effect: (target, config)
    effect: (target, { x, y }) => {
        const { chars } = new SplitText(target, { type: 'chars' });
        const index = target[0].dataset.index; //인덱스 값 읽어들인다.
        const tl = gsap.timeline()

        tl.from(chars, { x: x, opacity: 0, filter: 'blur(5px)', stagger: 0.1})
            //bg 안에 첫번째 두번째
            .to(`.bg > div:nth-child(${index})`, { opacity: 1 }, 0)
            .to(chars, { delay: 3, opacity: 0, y: y, stagger: 0.05 })
            .to(`.bg > div:nth-child(${index})`, { opacity: 1 }, .5)
        return tl;
    }
});

function textAnimation() {
    const animation = gsap.timeline({
        repeat: -1
    });
    animation.textEffect('.slide1')
        .textEffect('.slide2')
        .textEffect('.slide3')
        .textEffect('.slide4')
        .textEffect('.slide5')
        .textEffect('.slide6')
        .textEffect('.slide7');
}

textAnimation();


$('.mn-list li').mouseenter(function () {
    $(this).addClass('on')
})

$('.mn-list li').mouseleave(function () {
    $(this).removeClass('on')
})

$('.contents-list li').click(function (e) {
    e.preventDefault()
    let idx = $(this).index()
    $('.tab').removeClass('on')
    $('.tab').eq(idx).addClass('on')

    $('.contents-list a').removeClass('on')
    $(this).find('a').addClass('on')
})