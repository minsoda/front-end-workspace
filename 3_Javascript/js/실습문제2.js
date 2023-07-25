console.log("!!"); 
let maxScrollvalue = document.body.offsetHeight - window.innerHeight;
const progressBar = document.querySelector('.progress-bar');

// 반복되는 수식에 함수로 만들어버리기.
function resizeHandler() {
    maxScrollvalue = document.body.offsetHeight - window.innerHeight;
    // 전체 스크롤 할 수 있는 범위 = 바디 전체 높이 - 윈도위 현재 창의 높이

}

// 스크롤 위치를 알려준다. 
window.addEventListener('scroll', function(){
    console.log((window.scrollY / maxScrollvalue) * 100);
    progressBar.style.width = (window.scrollY / maxScrollvalue) * 100 + '%';

    // console.log(window.pageYOffset); // deprecated
    // console.log(window.scrollY);
    
    // 스크롤 끝까지 내렸을때의 숫자. 바디의 전체 높이를 나타냄
    // console.log(document.body.offsetHeight);

    // 스크롤 한번 내렸을때의 숫자.
    // console.log(window.innerHeight);
});

// 이해안가면 그냥 외워도 됑!-만든 함수 넣기!
window.addEventListener('resize', resizeHandler);
// 처음에 호출되던게 한번더 호출이 되어야하니까 밖에 호출
resizeHandler();

// navigation click event
const nav = document.querySelector('nav');
// 현재 선택 변수 설정
let current;

function navHandler(e) {
    // nav를 건들였을때 적용되는 스타일 방지 조건
    if(e.target !== e.currentTarget){
    console.log(e.target);
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'white';
    }

    // 클릭했을 현재 조건 
    if(current){
        current.style.backgroundColor = 'transparent';
        current.style.color = 'black';
    }

    // 현재를 담아야함!
    current = e.target;
}

nav.addEventListener('click', navHandler);

// mouse wheel event
// 휠 눌릴때마다 넘어가는 구간별로 필요
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

// 위에서부터 가는걸로 section1 명시
let currentSection = section1;

window.addEventListener('wheel', function(event){
    if(event.deltaY > 0){ // 휠을 아래로 내린 경우
        if(currentSection === section1) {
            window.scrollTo({top: section2.offsetTop, behavior: 'smooth'});
            currentSection = section2;

        } else if(currentSection === section2){
            window.scrollTo({top: section3.offsetTop, behavior: 'smooth'});
            currentSection = section3;
        }
    } else { // 휠을 위로 올린 경우
        if(currentSection === section3){
            window.scrollTo({top: section2.offsetTop, behavior: 'smooth'});
            currentSection = section2;

        }else if(currentSection == section2){
            window.scrollTo({top: section1.offsetTop, behavior: 'smooth'});
            currentSection = section1;
        }
    }

});

// scroll - animation 살짝
window.addEventListener('scroll', function(){
    // top처럼 고정이 아니라서 휠로 움직였을 경우 0으로 감
    console.log(section2.getBoundingClientRect().top);

    if(section2.getBoundingClientRect().top === 0){
        console.log(section2.children[0]);
        section2.children[0].classList.add('text-animation');
    }else {
        section2.children[0].classList.remove('text-animation');
    }
});
