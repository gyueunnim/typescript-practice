let title = document.querySelector('#title');
// title?.innerHTML = '반가워요' // type narrowing 필요
if(title != null) {
    title.innerHTML = '반가워요';
}

// HTML 조작 시, narrowing 하는 방법 5가지
// 1. 위의 내용

// 2. instanceof 가장 많이 사용함
if(title instanceof Element) { 
    title.innerHTML = '반가워요';
}

// 3. as 키워드 사용 (type assertion)
// let title = document.querySelector('#title') as Element; // 잘못 찾아올 수도 있음... 자주 쓰면 안됨

// 4. 오브젝트에 ?. 붙이기 (optional chaining) : 제목에 innerHTML이 있으면 출력, 없으면 undefined 출력
if(title?.innerHTML != undefined) {
    title.innerHTML = '반가워요';
}

// 5. tsconfig.json의 strict 모드를 끄면 됨

// 그냥 자바스크립트 코드 짤 때도 자주 사용함

// <a>의 href 속성 바꾸기
let link = document.querySelector('.link');
// if (link instanceof Element) { // 오류
//     link.href = 'https://kakao.com'
// }

if (link instanceof HTMLAnchorElement) { // 정확히 narrowing을 상세하게 해야한다.
    link.href = 'https://kakao.com'
}

// HTMLAnchorElement, HTMLHeadingElement, HTMLButtonElement 등


// Eventlister 사용 관련
let button = document.querySelector('#button');
// narrowing을 해야하는데 ?.를 쓰면 narrowing을 생략 (undefined으로 남겨줌) 
button?.addEventListener('click', function(){

});

let img = document.querySelector('#id');
if(img instanceof HTMLImageElement) {
    img.src = "new.jpg"
}

let anchor = document.querySelectorAll('.naver');
anchor.forEach((a) => {
    if(a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
})