type MethodType = (a :string) => number; // string 입력, number 출력

let methodType :MethodType = function(a) { 
    return 10;
};

// 함수 표현식에만 type alias 사용 가능
// 함수 선언식에서는 불가능

type Member = {
    name: string,
    age: number,
    plusOne: (a :number) => number,
    changeName: () => void,
};

let userInfo = {
    name: 'kim',
    plusOne(a :number) :number{
        return a + 1;
    },
    changeName: () => { 
        console.log("안녕")
    }
};

let userInfo2 :Member = {
    name: 'hello',
    age: 25,
    plusOne(a) {
        return 1
    },
    changeName: () => {
        console.log('gonichiwa')
    }
};

// 콜백함수
function func1(a) {
    a()
};
function func2() {

};

func1(func2); // func2는 콜백함수

type FuncType1 = (a :string) => string;

let cutZero :FuncType1 = function(a) {
    if(a[0] === '0')
        return a.replace('0', '');
    return a;
    // let result = a.replace(/^0+/, "");
    // return result;
}

type FuncType2 = (a :string) => number;

let removeDash :FuncType2 = function(a) {
    return parseFloat(a.replace(/-/g, ""));
}

function func3(a :string, b :FuncType1, c :FuncType2) {
    return c(b(a));
}
console.log(func3('010-1111-2222', cutZero, removeDash))