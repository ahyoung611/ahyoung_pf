
// 메뉴를 클릭하면 에니메이션되면서 해당 section 움직이기
const listElems = document.querySelectorAll('nav ul li')
const sections = document.querySelectorAll('section')
sections[0].classList.add('on')

listElems.forEach((li) => {
    const link = li.querySelector('a[href^="#sect"]')

    link.addEventListener('click', function (e) {
        e.preventDefault()
        const href = this.getAttribute('href')
        // alert(href)
        const sect = document.querySelector(href)

        window.scrollTo({
            top: sect.offsetTop,
            behavior: 'smooth'
        })
    })
})

// 각 section을 sect로 읽어들이겠다. for문 알아서 돌아라?
sections.forEach((sect, i) => {
    sect.addEventListener('wheel', function (e) {
        e.preventDefault()

        // wheel를 Down하면 +값이 발생되고, Up하면 -값이 발생
        let delta = e.deltaY

        //whell의 방향이 up이고 section의 위치가 첫번째이면 foreach구문을 빠져나가라 더이상 없으니깐 이벤트를 하지마라
        if (delta < 0 && i === 0) {

            return  //해당 조건이면 명령 loop를 빠져나가라

            //section의 갯수는 5개, 배열의 index는 [0,1,2,3,4] 이기 때문에 -1를 함.
            //whell의 방향이 down이고 section의 위치가 마지막이면 foreach구문을 빠져나가라 더이상 없으니깐 이벤트를 하지마라
        } else if (delta > 0 && i === sections.length - 1) {
            return
        }

        // 3항연산자 : 조건식? 참:거짓  //  prev형제, next형제
        //delta값이 0보다 작으면 참(이전으로 가라), 아니면 거짓(다음으로 가라) 
        let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling
        if (secTop) {
            let targetSecTop = secTop.offsetTop
            window.scrollTo({ top: targetSecTop, behavior: 'smooth' })
        }
    })
})

window.addEventListener('scroll', function () {
    //document에 세로 위치값 구하기
    let scrollTop = document.documentElement.scrollTop
    // 열린 창의 높이값 가져오기
    // let winHeight = window.innerHeight

    // for (const li of listElems) {
    //     li.classList.remove('on')
    // }
    // for (const sec of sections) {
    //     sec.classList.remove('on')
    // }

    //첫번째 방법 if
    // if(scrollTop>=0 && scrollTop<winHeight){
    //     listElems[0].classList.add('on')
    //     sections[0].classList.add('on')
    // }

    // if(scrollTop>=winHeight && scrollTop<winHeight*2){
    //     listElems[1].classList.add('on')
    //     sections[1].classList.add('on')
    // }

    // if(scrollTop>=winHeight *2 && scrollTop<winHeight*3){
    //     listElems[2].classList.add('on')
    //     sections[2].classList.add('on')
    // }

    // if(scrollTop>=winHeight *3 && scrollTop<winHeight*4){
    //     listElems[3].classList.add('on')
    //     sections[3].classList.add('on')
    // }

    // if(scrollTop>=winHeight * 4){
    //     listElems[4].classList.add('on')
    //     sections[4].classList.add('on')
    // }

    //두번째 방법 for문
    // for (let i = 0; i < sections.length; i++) {
    //     if (scrollTop >= winHeight * i && scrollTop < winHeight *(i+1)) {
    //         listElems[i].classList.add('on')
    //         sections[i].classList.add('on')
    //     }
    // }

    //세번째 방법 foreach방법
    
    sections.forEach((section, i) => {
        let sectionTop = section.offsetTop
        //조건값이 참인 section의 index를 찾아라
        if (scrollTop >= sectionTop - 100) {

            for (const li of listElems) {li.classList.remove('on')}
            for (const sec of sections) {sec.classList.remove('on')}
            
            listElems[i].classList.add('on')
            sections[i].classList.add('on')
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const sections = document.querySelectorAll('section');

    // 각 섹션의 색상 데이터를 저장
    const sectionColors = {
        'sect1': 'rgba(255,255,255,0)', 
        'sect2': 'rgba(249, 218, 237,.8)', 
        'sect3': 'rgba(255,255,255,.8)',
        'sect4': 'rgba(207, 236, 179,.8)',
        'sect5': 'rgba(255,255,255,0)'
    };

    // Intersection Observer 옵션
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6 // 섹션의 60%가 뷰포트에 보일 때 트리거
    };

    // 콜백 함수
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                header.style.backgroundColor = sectionColors[sectionId];
            }
        });
    };

    // Intersection Observer 생성
    const observer = new IntersectionObserver(callback, options);

    // 모든 섹션을 관찰
    sections.forEach(section => observer.observe(section));
});
