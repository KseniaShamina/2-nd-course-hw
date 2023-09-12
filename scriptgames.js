function GamesSeasons() {
    let month = Number(prompt("Введите месяц"));
    if (month===1 || month===2 || month===12) {
        console.log("Зима");
    } else if(month >= 3 && month < 6) {
        console.log("Весна");
    } else if(month >=7 && month < 9) {
        console.log("лето");
    } else if (month >=9 && month < 12) {
        console.log("Зима");
    } else {
        alert("такого месяца не существует");
    }
}