const div = document.querySelector('#output')
const button1 = document.querySelector('#myButton1');
const button2 = document.querySelector('#myButton2');
const button3 = document.querySelector('#myButton3');

// button1.addEventListener('click', function() {
//     div.innerHTML = '1';
// })

// button2.addEventListener('click', function() {
//     div.innerHTML = '2';
// })

// button3.addEventListener('click', function() {
//     div.innerHTML = '3';
// })

const buttons = document.querySelectorAll('button');
// console.log(buttons);

buttons.forEach((button, index) => {
    button.addEventListener('click', function(){
        div.innerHTML = 'Button' + (index + 1) + 'was clicked';
    })
})

// object
const student = {
    firstName: 'ram',
    class: 10
};

console.log(typeof student);
console.log(student.firstName);
console.log(student['firstName']);

// nested ovject
const 학생 = {
    mame: 'John',
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}

console.log(학생.marks.math);

// 객체속의 함수
const person = {
    name: 'Sam',
    age: 30,
    greet:function() {
        // console.log('hello')
    }
}
// 객체안에 있는 함수 호출
person.greet();
person.height = 187;
// console.log(person.height);

// 빈 객체에 멤버를 따로 구성해도 됨
// let perple = {};
// people.name = 'John';
// people.greet = function () {
//     // console.log('hello');
// }

// people.greet();

// Constructor 생성자
// LOL의 영웅들 만들기 = 객체
// Life, Attack, Shield, Speed, 특수능력

// Constructor function 생성자 함수
function Hero() {
    this.name = 'Hero',
    this.age = 23,
    this.speed = 10,
    this.life = 50
} 
// 사용법
const azir = new Hero();
azir.name = 'Azir';
console.log(azir.name + ' ' + azir.life);

function 영웅(name, age, speed, life) {
    this.name = name,
    this.age = age,
    this.speed = speed,
    this.life = life
}

const 이즈리얼 = new 영웅('이즈리얼', 20, 12, 30);
const 바루스 = new 영웅('바루스', 40, 8, 35);

바루스.특수능력 = "꿰뚫는화살"; 

console.log(이즈리얼);
console.log(바루스);

// new는 키워드. new로 생성하면 새로운 메모리영역을 가진다.
let obj = {
    name: 'Sam'
}
let a = obj; //new로 만들지 않음에 주의
a.name = 'Tom';
console.log(obj.name);

function Persson() {
    this.name = 'John',
    this.age = 23
}

let person1 = new Person();
let person2 = new Person();

per.prototype.gender = 'Male';

console.log(person1);
console.log(person2);