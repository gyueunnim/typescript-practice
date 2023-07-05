var methodType = function (a) {
    return 10;
};
var userInfo = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("안녕");
    }
};
var userInfo2 = {
    name: 'hello',
    age: 25,
    plusOne: function (a) {
        return 1;
    },
    changeName: function () {
        console.log('gonichiwa');
    }
};
// 콜백함수
function func1(a) {
    a();
}
;
function func2() {
}
;
func1(func2); // func2는 콜백함수
var cutZero = function (a) {
    if (a[0] === '0')
        return a.replace('0', '');
    return a;
    // let result = a.replace(/^0+/, "");
    // return result;
};
var removeDash = function (a) {
    return parseFloat(a.replace(/-/g, ""));
};
function func3(a, b, c) {
    return c(b(a));
}
console.log(func3('010-1111-2222', cutZero, removeDash));
