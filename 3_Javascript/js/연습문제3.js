// console.log(Math.floor(Math.random()*3)+1);
// 1~3 랜덤 숫자!

const click = document.querySelector('.click');
const restart = document.querySelector('.restart');
const imgList = document.querySelectorAll('.main-image img');
const result = document.querySelector('.main-result');
const span = document.querySelector('.click span');
let count = 0;
 
click.addEventListener('click', clickHandler);
restart.addEventListener('click', restartHandler);


function clickHandler() {
    console.log("click!!");
    // count 변수 지정 후 ++로 해주기!
    span.innerHTML = ++count;

    // 클릭했을때마다 랜덤값이 필요한거라서 배열에 담기. 함수안에 담아야 활용 가능
    const arr = [
        Math.floor(Math.random()*3)+1,
        Math.floor(Math.random()*3)+1,
        Math.floor(Math.random()*3)+1
    ];
    console.log(arr);

    for(i=0; i<imgList.length; i++){
        console.log(imgList[i]);
        // 속성 변경하기
        imgList[i].setAttribute("src", `../resources/spy${arr[i]}.jpg`);
    }

    if(arr[0] === arr[1] && arr[1] == arr[2]){
        console.log("이미지 3개 일치!");
        result.innerHTML = "Congratulation!! Press restart to play again!!"
        // 클릭활성화 멈추기. "disabled"은 무조건 값을 명시해줘야함!
        click.setAttribute("disabled", "disabled");
        
    }
}

function restartHandler() {
    console.log("restart!!");
    for(let i=0; i<imgList.length; i++){
        imgList[i].setAttribute("src", "../resources/spy1.jpg")
    }
    count = 0;
    span.innerHTML = "";
    result.innerHTML = "";
    // 비활성화된거 삭제하기.
    click.removeAttribute("disabled");
}





