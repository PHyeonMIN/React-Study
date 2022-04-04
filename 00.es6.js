// let & const
// let : 가변한 변수 생성
// const : 상수값, 수정x

//=====================================================================================================================

// 화살표 함수
//      1. this가 들어가서 발생하는 자바스크립트 문제 해결
//      2. 인수가 하나라면 () 생략 가능
function myFuc() {

}

const myFnc = () => {

}
//      3. {}와 return 생략
const multiply = number => number * 2;

//=====================================================================================================================

// Exports & Imports ( Modules )
//      1. 한번 default로 지정해 놓으면 언제나 참조
//      2. 구문을 가져올 때 중괄호를 사용

//=====================================================================================================================

// Classes
//      속성(property) : 클래스의 변수
//      메서드(methods) : 클래스의 함수
//      1. 속성이나 메서드를 추가할 때 클래스는 인스턴스화 된다.
//      2. 속성을 추가하는 가장 쉬운 방법은 constructor(생성자) 추가
class Human {
    constructor() {
        this.gender ='male';
    }
    printGender() { 
        console.log(this.gender);
    }
}

class Person extends Human {        // Human class를 상속   // person을 확장
    constructor() {
        // 다른 클래스를 확장하려고 생성자를 구현 -> 생성자에 super()메서드 추가
        super();                    // 부모 클래스 초기화
        this.name = 'Max';
        this.gender = 'female';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();               // Human class를 상속

//=====================================================================================================================

// Classes, Properties & Methods
//      es6 : constructor X / 화살표함수

//=====================================================================================================================

// Spread & Rest Operators

// 전개 연산자 : 배열 요소나 객체 속성을 나누는 데 사용, 배열이나 객체를 전개
// Spread
const newArray = [...oldArray,1,2];
const newObject = {...oldObject, newProp:5}

// 나머지 연산자 : 매개변수 리스트를 배열로 통합
// Rest
function sortArgs(...args){
    return args.sort();
}

//=====================================================================================================================

// Destructuring(구조분해할당)
// 구조분해 : 배열 요소나 객체 속성을 추출해서 변수로 저장하는 역할
//          object merge시  키가 동일하면 뒷값 저장

// 배열 구조 분해 (Array Destructuring)
[a, b] = ['Hello', 'Max'];
// 객체 구조 분해 (Object Destructuring)
{name} = {name:'Max', age:28}

//=====================================================================================================================

// 참조형(Reference) 및 원시형(primitive) 데이터 타입
//      원시 타입의 종류 : 숫자, 문자, 불린 - 언제든 다른 변수에 변수를 재할당하고 저장
//      참조 타입의 종류 : 객체와 배열
//      ★ 재할당시 값이 아니라 포인터를 복사!!! -> 복사시 새 객체를 만들고 속성만을 복사

const person1 = {
    name:'Max'
};
const secondPerson = {
    ...person1                   // 진짜로 복사
};
person1.name = 'Manu';

//=====================================================================================================================

// Array functions ( 배열 함수 )
// map(), filter(), reduce(), find(), findIndex(), concat()
const numbers = [1,2,3];
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

//=====================================================================================================================

// Shrothand property names
const name = 'Ellie';
const age = '18';

const ellie3 = {
    name,
    age
};

//=====================================================================================================================

// Default parameters
function pirntMessage(message='default'){
    console.log(message);
}

//=====================================================================================================================

// Ternary Operator
{
    const component=isCat?'cat':'dog';
    console.log(component);
}

//=====================================================================================================================

// Template Literals
const weather = '맑음';
console.log(`Today weather is ${weather} and ...`);

//=====================================================================================================================
