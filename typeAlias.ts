// convention
// 대문자로 시작
// AnimalType
type Animal1 = string|number|undefined;
type Animal2 = { name : string, age : number };

let animal1 :Animal1;
let animal2 :Animal2 = { name: 'kim', age: 20 };
// 다른 사람이 봐도 깔끔해 보이도록 typeAlias 잘 활용하기

const home = { region: 'seoul'};
// region 수정이 가능하다.
// const는 재할당을 금지하는 키워드이지 안에 있는 오브젝트 수정을 막지는 않는다.
// home.region = 'busan' 가능

type Asepa = { 
    readonly name : string // 읽기 전용 -> name 수정 불가능(은 아님)
    // name? : string // name 속성은 선택사항 (string | undefined)
};

const tempPerson :Asepa = {
    name: 'karina',
};
// tempPerson.name = 'winter'; // 여기서는 오류를 띄우지만 js에서는 문제가 없으므로 변경은 가능하다.
// 실행을 막아주는 것이 아닌 에디터 내에서 경고하는 것이다.

type Name = string;
type Age = number;
type Person = Name | Age; // 타입 간 union type으로 합칠 수 있다.

type PositionX = { x : number };
type PositionY = { y : number };
type NewType = PositionX & PositionY; // { x : number, y : number } 
// object type을 exten하는 방법
// interface에서 많이 다룸


type ExtendType = { 
    color? : string, 
    size: number, 
    readonly position: number[]
};

type CheckObject = {
    name : string,
    phone : number,
    email : string
};

type Adult = { adult : boolean };

type CheckObject2 = CheckObject & Adult;