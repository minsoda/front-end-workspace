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
