let literalName :'kim'; // kim이라는 문자만 들어올 수 있다.

let omg :'대머리'|'솔로'; 

// literal types를 통해 변수에 뭐가 들어올지 엄격하게 관리할 수 있다.
// 자동완성도 편함

function literalFunction(a :'hello') :(1 | 0){
    return 1
}

function rsp(a :'가위' | '바위' | '보') :('가위' | '바위' | '보')[]{
    return ['가위']
}

// const 변수의 한계를 업그레이드 한 것이 literal type이다. (유사하게 사용 가능)
var tempData = {
    name : 'kim',
    num : 123,
} as const // name이라는 속성은 이제 'kim' 타입이다.

function myFunc(a :'kim') {

}

function myFunc1(a :123) {

}


// myFunc(tempData.name) 
// 에러 발생 - 'kim'이라는 type만 들어올 수 있다. 'kim'이라는 자료만 들어올 수 있다와 다른 의미이다.
// as const 활용하기