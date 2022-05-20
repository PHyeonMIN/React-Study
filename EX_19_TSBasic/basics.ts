// Primitives : number, string, boolean
// More complex types : arrays, objects
// Function types, parameters

// 1. Primitives
let age: number = 12;
let userName: string = "max";
let isInstructor: boolean = true;

// 2. More complex types
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person1: any; // 어떤 값이든 저장
let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//     isEmployee: true
// }

// 객체 배열
let people: Person[];

// Type inference
let course: string | number = "React - The Complete Guide";
course = 12345;

// Functions && types
function add(a: number, b: number): number {
    return a+b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics
function insertAtBeginning(array: any[], value: any) {

}