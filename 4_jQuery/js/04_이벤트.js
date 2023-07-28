// 1. 이벤트 연결
// 1) on, off

/*
$('#area1').on('mouseenter', function(){
    // 마우스가 올라갔을 때, 배경색상 : beige, 텍스트 : 마우스가 올라감
    $('#area1').css('background-color', 'beige').text('마우스가 올라감.');
    // $(event.target)으로 해도 됨.
});


// mouseleave 함수
// 배경색상 : hotpink, 텍스트 : 마우스가 내려감
$('#area1').on('mouseleave', function(){
    $('#area1').css('background-color', 'hotpink').text('마우스가 내려감.')
});

// 두가지 써도 가능
$('#area1').on('mouseenter mouseleave', function(){
    console.log(event.type); // 확인 가능

    if(event.type === 'mouseenter'){
        $('#area1').css('background-color', 'beige').text('마우스가 올라감.');
    }else if(event.type === 'mouseleave'){
        $('#area1').css('background-color', 'hotpink').text('마우스가 내려감.')
    }
});

$('#area1').on('click', function(event){
    // 배경색은 white, 텍스트는 ''
    $(event.target).css('background-color', 'white').text(' ').off('mouseenter mouseleave');

});
*/

// 객체형식으로도 가능
$('#area1').on({
    mouseenter:function(event){
        $('#area1').css('background-color', 'beige').text('마우스가 올라감.');
    },
    mouseleave:function(event){
        $('#area1').css('background-color', 'hotpink').text('마우스가 내려감.')
    },
    click:function(event){
        $(event.target).css('background-color', 'white').text(' ').off('mouseenter mouseleave');
    }
})

// 2. one. 한번 실행후 사용 안됨.대량의 데이터를 한번만 불러오고 싶을때 사용
$('#area2').one('click', function(){
    alert('실행!');
});

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
// keydown : 키보다가 눌려질 때
$('#textarea1').keydown(function(e){
    console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});

// keypress : 글자가 입력될 때
$('#textarea1').keypress(function(e){
    console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});

// keyup : 키보드가 떼어질 때
$('#textarea1').keyup(function(e){
    console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});

// -> 3가지를 on 메소드로 한번에
$('#textarea1').on({
    keydown:function(e){
        console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    },
    keypress:function(e){
        console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    },
    keyup:function(e){
        console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    }
})

// substr
console.log("Hello~".substring(0,2));

$('#textarea2').on('keyup', function(e){
    console.log($(e.target).val().length);

        const currentlength = $(e.target).val().length;
        $('#counter').text(currentlength);
    
        console.log($('#maxLength').text());

        const maxLength = parseInt($('#maxLength').text());
        // console.log(typeof parseInt(maxLength)); // 문자열 -> 숫자로 parseInt. currentLength와 맞추기 위해서 
        
        // console.log(parseInt($('#maxLength').text()));

    if(currentlength > maxLength){
        // 글자수제한! substring!
        // $(e.target).val().substring(0,maxLength); // 50글자
        $(e.target).val($(e.target).val().substring(0,maxLength));

    }else { // currentLength <= maxLength 카운트 종료
        $('#counter').text(currentlength);
    }

    });

    // 3) 아이디 조건 확인

    $('#userId').on('keyup', function(e){

        const regExp = /^[a-z][a-z0-9]{4,12}$/;
        const id = $(e.target).val();

        if(regExp.test($(e.target).val())){
            
            $('#idCheck').text('사용가능한 아이디입니다.').css('color','green');
        } else if (id === ""){
            $('#idCheck').text("");
        }else { 
            $('#idCheck').text('사용불가능한 아이디입니다.').css('color','red');

        }
    });

    // 3. trigger() 메소드
    $('#area3').on('click', function(e){
        // 문자를 숫자로 바꾸는걸 변수로 담구 늘려주기!
         let currentCount = parseInt($('#counter2').text());
         $('#counter2').text(++currentCount);
    });
    $('#btn').on('click', function(){
        // click 이벤트를 나도 할거야!! trigger()
        $('#area3').trigger('click');
    });

   




