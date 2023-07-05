function typeNarrowing(x) {
    if (typeof x === 'number')
        return x + 1;
    else
        return x + '1';
}
function typeAssertion(x) {
    var array = [];
    array[0] = x; // x를 number로 인식 그러나 실제로 타입을 바꿔주지는 않는다.(주장만)
}
/*
assertion 문법의 용도 -> 디버깅, 비상용(임시로 에러 해결, 값이 명확한데 컴파일러 에러가 방해할 때)
1. union타입을 Narrowing할 떄 사용
2. 무슨 타입이 들어올지 100% 확실할 때 (선언은 union 타입이어도 값이 명확할 떄)
-> 실제로 대부분 if 문법을 사용 (굳이 쓸 필요 없음)
*/
function cleaning(array) {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "string")
            array[i] = Number(array[i]);
    }
    return array;
}
function cleaning2(a) {
    var array = [];
    a.forEach(function (b) {
        if (typeof b === "string") {
            array.push(parseFloat(b));
        }
        else {
            array.push(b);
        }
    });
    return array;
}
