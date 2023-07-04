function tempfunction1(x :number) :number {
    return x * 2
}

function tempfunction2(x :number) :void {
    // return 하기 싫을 떄
}
// 타입스크립트는 지정된 파라미터 필수

function tempfunction3(x? :number) :void {
    // return 하기 싫을 떄
}
// ?를 사용해 지정된 파라미터 옵션 = x :number | undefined와 같은 의미

function test1(x? :string) : void {
    if(x === undefined) 
        console.log("이름이 없습니다.");
    else
        console.log("안녕하세요 " + x);
}

function test2(x :(string | number)) :number {
    return x.toString().length;
}

function test3(month :number, home :boolean, charm :string) : (void | string) {
    let score :number = 0;
    score += month;
    if(home)
        score += 500;

    if(charm === '상')
        score += 100;
    
    if(score >= 600)
        return "결혼가능";
}