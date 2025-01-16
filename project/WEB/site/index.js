
//mobile-menu-bar
document.getElementById('mobile-menu-bar').addEventListener('click', function(e) {
    e.preventDefault()
    document.getElementById('menu-area').classList.toggle('on');
});

//각 section scroll
const sections = document.querySelectorAll('section');

sections.forEach((sect, i) => {
    sect.addEventListener(
        'wheel',
        function (e) {
            if (e.target.closest('.hidden-text')) {
                return; // 이벤트 중단 (기본 스크롤 허용)
            }

            e.preventDefault(); // 기본 스크롤 동작 차단

            let delta = e.deltaY;

            if ((delta < 0 && !sect.previousElementSibling) || (delta > 0 && !sect.nextElementSibling)) {
                return; // 맨 첫/마지막 섹션에서 스크롤 중단
            }

            // 다음 또는 이전 섹션으로 이동
            let secTop = delta < 0 ? sect.previousElementSibling : sect.nextElementSibling;
            if (secTop) {
                secTop.scrollIntoView({ behavior: 'smooth' });
            }
        },
        { passive: false } // `passive: false` 설정
    );
});


// sect5 tab 활성화
tabFuc('.tablist');
function tabFuc(target) {
    let targetElem = document.querySelector(target);
    if (!targetElem) {
        console.error(`Invalid target: ${target}`);
        return;
    }

    let aElems = targetElem.querySelectorAll(".tab-menu li a");
    aElems.forEach(function (a) {
        a.addEventListener("click", function (e) {
            e.preventDefault();

            targetElem.querySelectorAll(".tab-menu li a").forEach((menu) => {
                menu.classList.remove("on"); // 기존 탭 메뉴에서 'on' 클래스 제거
            });

            this.classList.add("on"); // 클릭한 메뉴에 'on' 클래스 추가

            let href = this.getAttribute("href"); // 클릭한 탭의 href 값 가져오기

            if (!href || href === "#") {
                console.error("Invalid href value:", href);
                return;
            }

            // 모든 탭에 'on' 클래스 제거
            targetElem.querySelectorAll(".tab").forEach((tab) => {
                tab.classList.remove("on");
            });

            // 해당 href에 맞는 탭을 찾아 'on' 클래스 추가
            const targetTab = targetElem.querySelector(href);
            if (targetTab) {
                targetTab.classList.add("on");
            } else {
                console.error(`Tab not found: ${href}`);
            }
        });
    });
}

// sect5 theme
function initializeSwipers() {
    const swiperConfigs = [
        { container: ".Hong-Swiper", nextEl: "#Hongdae .swiper-button-next", prevEl: "#Hongdae .swiper-button-prev" },
        { container: ".Inc-Swiper", nextEl: "#Incheon .swiper-button-next", prevEl: "#Incheon .swiper-button-prev" },
        { container: ".Jeon-Swiper", nextEl: "#Jeonju .swiper-button-next", prevEl: "#Jeonju .swiper-button-prev" },
        { container: ".Jamsil-Swiper", nextEl: "#Jamsil .swiper-button-next", prevEl: "#Jamsil .swiper-button-prev" },
        { container: ".Daejeon-Swiper", nextEl: "#Daejeon .swiper-button-next", prevEl: "#Daejeon .swiper-button-prev" },
        { container: ".Cheon-Swiper", nextEl: "#Cheonho .swiper-button-next", prevEl: "#Cheonho .swiper-button-prev" },
        { container: ".Suyu-Swiper", nextEl: "#Suyu .swiper-button-next", prevEl: "#Suyu .swiper-button-prev" },
    ];

    const swipers = [];

    swiperConfigs.forEach((config) => {
        const wrapper = document.querySelector(`${config.container} .swiper-wrapper`);
        const slides = wrapper ? wrapper.querySelectorAll(".swiper-slide") : [];
        const hasEnoughSlides = slides.length >= 3;

        // 슬라이드가 부족하면 복제본을 추가하여 최소 3개로 맞추기
        if (!hasEnoughSlides) {
            console.warn(`Swiper ${config.container} does not have enough slides: ${slides.length}`);
            for (let i = 0; i < 3 - slides.length; i++) {
                const cloneSlide = slides[i % slides.length].cloneNode(true);
                wrapper.appendChild(cloneSlide);
            }
        }

        // Swiper 초기화
        const swiper = new Swiper(config.container, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 2,
            centeredSlides: true,
            navigation: {
                nextEl: config.nextEl,
                prevEl: config.prevEl,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            breakpoints: {
                800: {
                  slidesPerView: 3, // 슬라이드 3개 보이기
                  spaceBetween: 10,
                },

                1200: {
                  slidesPerView: 3, // 슬라이드 4개 보이기
                  spaceBetween: 30,
                },
              },
        });

        // 동적으로 슬라이드를 추가한 후 Swiper 갱신
        swiper.update();

        swipers.push({ element: config.container, swiper });
    });

    // 슬라이더에 마우스를 올릴 때 자동 재생 멈춤
    swipers.forEach((swiperObj) => {
        const swiperElement = document.querySelector(swiperObj.element);
        if (swiperElement) {
            swiperElement.addEventListener("mouseenter", () => {
                swiperObj.swiper.autoplay.stop();
            });

            swiperElement.addEventListener("mouseleave", () => {
                swiperObj.swiper.autoplay.start();
            });
        } else {
            console.error(`Swiper element not found: ${swiperObj.element}`);
        }
    });
}

// 초기화 함수 실행
document.addEventListener("DOMContentLoaded", () => {
    // DOM 요소가 로드된 후 Swiper와 탭 초기화
    initializeSwipers();
    tabFuc('.tablist');
});









