let test :string = "typescript";
let age :number = 50;
let tempArray :string[] = ['kim', 'park'];
let tempObject : {member1 : string, member2 : string}= { member1 : 'kim', member2 : 'park' };

// 모든 변수에 type을 지정할 필요가 없음
let member3 = 'Jang'; // 타입 지정 자동으로 된다.

let song :{ singer : string, name : string } = {
    singer : 'ive',
    name : 'lovedive'
};

let project :{ 
    member : string[], 
    days : number, 
    started : boolean,
} = {
    member : ['kim', 'park'],
    days: 30,
    started: true,
};