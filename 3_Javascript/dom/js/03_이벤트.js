// window.addEventListener('load', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// });
// 모든 구조가 끝난후 바로 됨

// window.addEventListener('DOMContentloaded', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// });
//DOM 구조만 실행되어도 바로 됨. 빨라서 이걸 더 많이 사용-> 그래도 귀찮아서 바디 안에 맨 아래 스크립트 파일 IN

    const h1 = document.querySelector('h1');
    console.log(h1);

    // 클릭 후 변화
    // h1.addEventListener('click', function(){
    //     h1.style.backgroundColor="skyblue";
    // });

    // 마우스를 올려놔도 변화
    h1.addEventListener('mouseenter', function(){
        h1.style.backgroundColor="skyblue";
    });

    
    // 1번 방법
    // const img1 = document.querySelector('.container img:nth-child(1)');
    // const img2 = document.querySelector('.container img:nth-child(2)');
    // const img3 = document.querySelector('.container img:nth-child(3)');
    // const img4 = document.querySelector('.container img:nth-child(4)');
    // const img5 = document.querySelector('.container img:nth-child(5)');

    // img1.addEventListener('click', function(){
    //     img1.style.visibility = 'hidden';
    //     img1.style.diplay = 'none';
    // });

    // 2번 방법
    // const imgList = document.querySelectorAll('.container img');
    
        // imgList[0].addEventListener('click', function(){
        //     imgList[0].style.visibility = 'hidden';
        //     imgList[0].style.diplay = 'none';
        // });
    
    // 3번 방법

        // for(s of imgList){
        //     imgList[s].style.visibility = 'hidden';
        // }

    //     for(let i=0; i<imgList.length; i++) {
    //         imgList[i].addEventListener('click', function(){
    //             imgList[i].style.visibility = 'hidden'; 
    //     })
    // }

    const container = document.querySelector('.container');

        function removeHandler(event){ // 이벤트 객체
            console.log(event.currentTarget); //  this와 같은 아이!
            // console.log(event.target);
            // console.log(this);
            // this.style.display = 'none';

            // 배경 눌러도 사라지기 때문에 if로 조건을 걸어야함!
            if(event.target!== container){
                // if(event.target!== event.currentTarget)와 같음
                event.target.style.visibility = 'hidden';
            }
        }
        
        container.addEventListener ('click', removeHandler);

        // for(let i=0; i<imgList.length; i++) {
        // imgList[i].addEventListener ('click', removeHandler);
        // }
