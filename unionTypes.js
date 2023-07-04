var member = 123;
// member + 1 연산 불가 (엄격한 것 좋아함)
var members = [1, '2', 3];
var membersOb = { a: '123' };
var temp; // 아무거나 가능 but 타입스크립트 의미가 없다.
var temp2; // any와 용도는 같다. but 조금 더 안전하다.
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John,'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
