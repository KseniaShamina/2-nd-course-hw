const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 people.sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    return 0;
  });

console.log(people);

function isPositive(number) {
  return number > 0;
}

function isMale(person) {
  if (person === 'male') {
    return (person);
}

}

function filter(arr, ruleFunction) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      output.push(arr[i]);
    }
  }
  return output;
}
console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

console.log(filter(people2, isMale));

function showTime() {
    let date = setInterval(() => alert(new Date()), 3000);

    setTimeout(() => { clearInterval(date); alert('Прошло 30 секунд'); }, 1000 * 3);
}


function delayForSecond() {
  console.log('Привет, Глеб!');
}
setTimeout (delayForSecond, 1000);


function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}


delayForSecond(cb() => sayHi(‘Gleb’));