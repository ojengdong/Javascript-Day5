// input 데이터를 받아서 localStorage에 저장한다.
// input태그객체.value
// localStorage.setItem(키, 벨류)
// 이벤트는 submit (submit 이벤트는 강제 리프레쉬되는 것을 막아야 함)

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onSubmit(e) {
    console.log("call");
    e.preventDefault();
    localStorage.setItem('username', loginInput.value);
    greeting.innerHTML = 'Hello, ' + loginInput.value;
    greeting.classList.remove('hidden');
    loginForm.classList.add('hidden');
}

loginForm.addEventListener('submit', onSubmit);

// 1.localStorage를 읽어서 이름이 있는지 확인
// 2.이름이 있으면 h1태그에 "Hello, 이름" 출력
// 3.hidden 클래스 삭제

const savedUserName = localStorage.getItem('username');
if(savedUserName != null) {
    greeting.innerHTML = 'Hello, ' + savedUserName;
    greeting.classList.remove('hidden');
    loginForm.classList.add('hidden');
} 