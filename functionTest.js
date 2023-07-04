function tempfunction1(x) {
    return x * 2;
}
function tempfunction2(x) {
    // return 하기 싫을 떄
}
// 타입스크립트는 지정된 파라미터 필수
function tempfunction3(x) {
    // return 하기 싫을 떄
}
// ?를 사용해 지정된 파라미터 옵션 = x :number | undefined와 같은 의미
function test1(x) {
    if (x === undefined)
        console.log("이름이 없습니다.");
    else
        console.log("안녕하세요 " + x);
}
function test2(x) {
    return x.toString().length;
}
function test3(month, home, charm) {
    var score = 0;
    score += month;
    if (home)
        score += 500;
    if (charm === '상')
        score += 100;
    if (score >= 600)
        return "결혼가능";
}
