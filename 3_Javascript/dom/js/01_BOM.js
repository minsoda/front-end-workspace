/* open */ 
function btn1() {
    // window.open("http://naver.com"); // 탭 추가실행
    window.open("http://naver.com", "네이버", "width=500, height=600, resizable=no, location=no, menubar=no, scrollbar=no, status=no, toolbar=no"); // 새창 추가 실행
}

/* timer */
function btn2() {
    let newWindow = open();
    newWindow.alert('3초 후에 페이지 종료!'); // 새로운 탭 추가되어서 alert 사용가능
    setTimeout(() => {
        newWindow.close(); // 종료 함수
    }, 3000); 
}

function btn3() {
    let second = 0;
    setInterval(() => {
        console.log(`${++second}초!`);
    }, 1000);
} 

function btn4() {
    for(const key in location) {
        console.log(`key : ${key}, value : ${location[key]}`); 
        // 객체를 만나면 key
    }
}

function btn5() {
    for(const key in navigator) {
        console.log(`key : ${key}, value : ${navigator[key]}`); 
        // 객체를 만나면 key
    }
}

function btn6() {
    for(const key in screen) {
        console.log(`key : ${key}, value : ${screen[key]}`); 
        // 객체를 만나면 key
    }
}

