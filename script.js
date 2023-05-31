let year = 2007;
const(year);

let a = 10;
alert(a);

let a = 20;
alert(a);

let firstname = Brendan Eich;
alert(firstname);

let a = 2;
let b = 10;
console.log(a += b);

let a = 2;
let b = 10;
console.log(b -= a); 

let a = 2;
let b = 10;
console.log(b *= a); 

let a = 2;
let b = 10;
console.log(b /= a); 

let result = 2;
alert(result**5);

let a = 9;
let b = 2;
alert(a%b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt('Сколько вам лет?');
alert(age);

let user = /
    name: "Mike",
    age: 23,
    city: "Toronto"
  /;
  alert( user.name );
  alert( user.age );
  alert( user.city);
  delete ["user.city"];
  user.isAdmin = true;
  
  let info = prompt('Какую информацию хотите узнать о пользователе?', "name");
  alert(user[info]);

  let userName = prompt('Введите ваше имя');
  alert('Привет ${userName}');