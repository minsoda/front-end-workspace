### 목차

- [선택자](#선택자)
- [텍스트 스타일](#텍스트-스타일)

## CSS(Cascading Style Sheet)

- 웹 페이지의 표현(디자인)을 나타내는 언어
- 특정 요소를 선택해서 원하는 "스타일"과 "기능"을 적용시킬 수 있음

```css
selecetor(선택자){
    property(속성): value(값);
}
```
## 스타일 적용 방법


### 내부 방식

1. 인라인 방식

```html
<tag style="property:value;">
```

2. 내부 스타일
```html
<style>
    secetor{
        property: value;
    }
</style>
```

### 외부 방식

3. 링크 방식

```html
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>    
```
```css
selector{
    property: value;
}
```
<br>

[위로 이동](#목차)

# 선택자

1. 전체 선택자 : *
- html 문서 안의 모든 요소에 적용

2. 태그 선택자

- html 태그에 직접 효과 적용
- 해당 태그 작성 시 자동으로 효과 적용

3. 클래스 선택자

- 중복 가능
- .name {}
- <태그 class="name">

4. 아이디 선택자

- 중복 불가
- #name {}
- <태그 id="name">

5. 그룹 선택자

- A, B, C {}

6. 자손 선택자

- A B {}

7. 자식 선택자

- A > B {}

8. 속성 선택자

- 선택자[속성=속성값] : 일치
- 선택자[속성*=속성값] or 선택자[속성~=속성값]: 포함
- 선택자[속성^=속성값] or 선택자[속성|=속성값] : 시작
- 선택자[속성$=속성값] : 끝

9. 형제 선택자

- A + B : A 요소 뒤에 있는 B 요소 "하나만" 선택
- A ~ B : A 요소 뒤에 "모든" B 요소 선택

10. 구조 선택자
- 웹 문서 구조를 기준으로 특정 위치에 있는 요소를 찾아 선택할 때 사용
- 선택자:first-child : 첫번쨰 요소
- 선택자:first-of- type : 첫번째 요소
- 선택자:last-child : 마지막 요소
- 선택자:last-of-type : 마지막 요소
- 선택자:nth-child(n) : 앞에서부터 n번째 요소
- 선택자:nth-of-type(n) : 앞에서부터 n번쨰 요소
- 선택자:nth-last-child(n) : 뒤에서부터 n번쨰 요소
- 선택자:nth-last-of-type(n) : 뒤에서부터 n번째 요소

11. 반응 선택자

- 사용자의 특정 동작에 따라 요소들을 선택할때 사용
- :active : 사용자가 클릭하는 요소
(마우스 누르고 있을때에만)
- :hover : 사용자가 마우스를 올려놓은 요소
- :focus : 초점이 맞추어진 요소

12. 상태 선택자

- 웹 요소의 상태에 따라 요소들을 선택할 때 사용
- :checked : 체크된 상태의 요소
- :enabled : 사용 가능한 요소
- :disabled : 사용 불가능한 요소

## id와 class

- id : 현재 문서내에 "고유"한 값으로 "하나"만을 작성
- class : 현재 문서내에 "중복"된 값 작성 가능, "여러개" 작성 가능

## 선택자 우선순위

1. 동일한 선택자를 사용하는 경우

- 나중에 작성한 효과 적용

```html
<p>TEXT</p>
```

```css
P {
    color: red;
    color: blue;
}
```
2. 다른 방식의 선택자 사용

- css 적용 우선 순위
    :important > 인라인 방식 > 아이디 선택자 > 클래스 선택자 > 태그 선택자

```html
<p class="txt" id="title">TEXT</p>
```

```css
#title {
    color: red;
}
.txt {
    color: blue;
}
p {
    color: green !important;
    /* !important 추천x 작성시 우선순위가 바뀜 */
}
```

## BEM (Block__Element--Modifier)

- 사용자 인터페이스를 독립된 블록으로 분리함으로써 복잡한 페이지에서도 간단하고 신속하게 개발을 수행하는 것이 목적
- 규칙 : 클래스 이름은 영소문자로 입력하고, 단어는 하이픈으로 연결

1. **Block**
    - 클래스 이름은 '그것이 무엇인지', '어떤 목적으로 사용하는가'를 의미하는 이름이 적절
    - 논리적으로 기능적으로 독립한 페이지 모듈
    - 특정한 콘텍스트에 의존하지 않으며 어디에서도 재사용할수 있는 부품
    - 느슨하게 결합

2. **Element**
    - Block의 이름을 상속받고 언더스코어(_) 두개를 입력한 뒤 Element 이름을 붙인다.
    - Block과 마찬가지로 '무엇인지'를 의미하는 단어를 사용

3. **Modifier**
    - Block 혹은 Element의 모습이나 상태 또는 움직임을 정의 
    - 클래스 이름에서 형태, 기능, 역할을 유추
    - 확장하기 쉽게

    ```html
    <!-- menu:block -->
    <ul class="menu"> 
        <li class="menu__item">항목1</li>
        <li class="menu__item menu__item--selected">항목2</li>
        <li class="menu__item">항목3</li>
    </ul>
    ```

<br>

# 텍스트 스타일
[위로 이동](#목차)

## font-family

- 웹 문서에서 사용할 글꼴을 지정하는 속성

```css
선택자 {
    font-family: 글꼴명;
}
```

### 웹 폰트

- 구글 웹 폰트 : http://fonts.google.com

## font-size

- 글자의 크기를 지정한느 속성

```css
선택자 {
    font-size: 크기(px|em|rem|%);
}
```

### 크기를 지정하는 단위

- 절대 크기
    - **px** : 모니터의 픽셀 단위로 크기를 계산

- 상태 크기
    - em : 부모 요소에 지정한 폰트의 대문자 M의 너비를 1em으로 계산
    - **rem** : 최상위 요소(`html`)에서 지정한 폰트의 대문자 M의 너비를 1rem(16px)으로 계산
    - % : 부모 요소의 크기에 대한 상대적인 비율로 계산

## font-weight

- 글자의 굵기를 조절하는 속성

```css
선택자 {
    font-weight: 100~ 900 or normal lighter or bold or bolder;
}
```
- 100 ~ 900 : 글자의 굵기를 세밀하게 조절
- normal : 기본값(400)
- lighter : 기본보다는 더 가늘게
- **bold** : 굵게
- bolder : 기본보다 더 굵게

## font-style

- 글자를 이탤릭체로 표시하도록 지정하는 속성
```css
선택자 {
    font-style: nomal or italic or oblique;
}
```

- italic : 글꼴에 디자인되어 있는 기울어진 글자를 사용
- obique : 원래 글꼴을 기울어지게 표시

## font-variant

- 영어의 작은 대문자로 지정할 수 있는 속성

```css
font-variant : nomal or samll-caps;
```

- nomal : 기본값으로 일반적인 형태로 표시
- small-caps : 작은 대문자로 표시하도록 지정

## font

- 글꼴 스타일 속성을 한 번에 지정할 수 있는 속성

```css
font: font-style font-variant font-weight font-size/line-height font-family;
```

## color

- 글자의 색을 지정하는 속성
- 색을 지정하는 방법은 **영문 색 이름 표기법, 16진수 표기법**, rgb/**rgna** 표기법, hsl/hsla 표기법이 있다.

```css
선택자 {
    color: 색상;
}
```

## text-decoration

- 글자에 밑줄/윗선을 긋거나 취소선을 긋는 속성

```css
선택자 {
    text-decoration: none or underline or overline or line-through;
}
```

- none : 글자에 선을 긋지 않는다.
- underline : 글자에 밑줄을 긋는다.
- overline : 글자 위에 선을 긋는다.
- line-through : 취소선을 긋는다.

## text-transform 

- 영문자를 표시할 때 대소문자를 원하는대로 바꿀수 있는 속성

```css
선택자 {
    text-transform: none or captitalize or uppercase or lowercase;
}
```

- none : 변환없이 표시
- captitalize : 시작하는 첫 번째 글자를 대문자로 변환
- uppercase : 모든 글자를 대문자로 변환
- lowercase : 모든 글자를 소문자로 변환

## text-shadow

1. 텍스트에 그림자를 지정
2. 여러 개 지정(","로 구분)

```css
선택자 {
    text-shadow:[dx] [dy] [blur] [color];
}
```

- dx : 그림자의 가로 방향.(양수값 : 오른쪽, 음수값 : 왼쪽)
- dy : 그림자의 세로 방향.(양수값 : 아래쪽, 음수값 : 위쪽)
- blur : 그림자의 흐려짐 정도.(양수값 : 모든 방향으로 번짐, 음수값 : 모든방향으로 축소)
- color : 그림자의 색상.(기본값 : 현재 글자색)

