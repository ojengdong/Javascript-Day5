const ages = [20, 28, 19, 56];
const newAges = [];

// 익명함수
// ()안에 들어가는건 함수 선언
// ages.forEach(function (age) {
//     newAges.push(age + 5);
// });

// function increaseAgeBy5(age) {
//     newAges.push(age + 5);
// }
// ages.forEach(increaseAgeBy5);

// Arrow function
ages.forEach((age) => {
    newAges.push(age + 5);
})

// console.log(newAges);

// ForEach문의 두번째 파라미터(인덱스)
const courses = ['B', 'M', 'C', 'P'];
courses.forEach(function (course, index) {
    // console.log(index + ': ' + course);
})

// ForEach문의 세번째 파라미터(원본 배열)
courses.forEach(function (course, index, array){
    // console.log(array);
});

const students = [
    {firstName: 'John', lastName: 'Doe'},
    {firstName: 'stephen', lastName: 'Matt'},
    {firstName: 'Abi', lastName: 'Susu'}
];

// 객체배열의 forEach문
students.forEach( (student) => {
    // console.log(student.firstName + " " + student.lastName);
});

const student = [
    {name:'John', courses:['Math', 'English', 'Physics']},
    {name:'Sarah', courses:['Chem', 'Math', 'Computer']}
];

// ForEach문 안의 다른 ForEach문
student.forEach((student) => {
    // console.log(student);
    student.courses.forEach((c) => {
        console.log(c);
    })
})