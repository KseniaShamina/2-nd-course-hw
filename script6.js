const answerUser = prompt('Без рук, а рисует. Без зубов, а кусает'); 
const answer = 'Мороз';

if (answerUser.toUpperCase() === answer.toUpperCase()) { 
	alert('Это правильный ответ!'); 
} else {
	alert('Не угадал, правильный ответ: ${answer}'); 
}

Math.floor(32.58884);
Math.ceil(32.58884);
Math.round(32.58884);

function FindNumbers(numbers) {
const arrayOfNumbers = numbers.split ('52 53 49 77 21 32')
return `${Math.max(...arrayOfNumbers)} ${Math.min(...arrayOfNumbers)}`
}

function GetRandomInt (minValue, maxValue) {
    return Math.round (Math.random() * (maxValue - minValue)) + minValue; 
}

console.log (1, 10);

function newArray(a, b) {
    let array = [];
    for (let i = a; i <= b; i++) array.push(i);
    return array;
  }

let currentDate = new Date();
console.log(currentDate);

let currentDate = new Date("9/17/2023");
console.log(currentDate); 

myDate.setDate(73);
console.log(currentDate); 

function getDate () {
    let myDate = new Date (2025, 5, 42, 12, 30, 20, 10);
    return (myDate);
}

let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
list = list.sort(() => Math.random() - 0.5);
alert(list); 

const question = ('Чему равнялся первый элемент массива?');
const questionTwo = ('Чему равнялся последний элемент массива?')




