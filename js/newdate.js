// 현재날짜
const dateCurrnt = new Date();
console.log(dateCurrnt);

// 기록에 사용하는 시간 원년 epoch time
const time1 = new Date(0);
console.log(time1);
const time2 = new Date(234121234241);
console.log(time2);

// ISO date (국제표준)
const date1 = new Date('2020-07-01');
console.log(date1);
// 다른 방법
const date2 = new Date('03/25/2015');
console.log(date2)
// 날짜와 시간
const date3 = new Date(2020, 0, 1, 4, 12, 11, 0);
console.log(date3);

// 1970.01.01.00시00분 이후 지금까지 흐른 시간(ms)
const timeMS = Date.now();
console.log(timeMS);

const time = new Date();
// day 일
const date = time.getDate();
console.log(date);
// year 년
const year = time.getFullYear();
console.log(year);
// month 월
const month = time.getMonth() + 1;
console.log(month);

// Countdown
let countDownDate = new Date().getTime();
countDownDate = countDownDate + (1000 * 60 * 1);
console.log(countDownDate);

let xTime = setInterval(function () {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    // console.log(days);
    const hours = Math.floor(timeLeft / (1000 * 60 * 60) % 24);
    // console.log(hours);
    const minutes = Math.floor(timeLeft / (1000 * 60) % 60);
    // console.log(minutes);
    const seconds = Math.floor(timeLeft / (1000) % 60);
    // console.log(seconds);
    console.log(days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ')
    
    if(timeLeft <= 0) {
        clearInterval(xTime);
        console.log('Countdown Finished...');
    }
}, 1000);