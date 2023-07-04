
let member :(number | string) = 123;
// member + 1 연산 불가 (엄격한 것 좋아함)

let members :(number | string)[] = [1, '2', 3];
let membersOb : { a : (number | string) }= { a : '123' };

let temp :any; // 아무거나 가능 but 타입스크립트 의미가 없다.
let temp2 :unknown; // any와 용도는 같다. but 조금 더 안전하다.

let user :string = 'kim';
let age :(undefined | number) = undefined;
let married :boolean = false;
let 철수 :(string|undefined|number|boolean)[] = [user, age, married];

let 학교 : {
    score : (number | boolean)[], 
    teacher : string,
    friend : string[] | string
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John,'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]
