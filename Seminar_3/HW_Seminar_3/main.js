// Вариант 1

function greeting() {
    let name = prompt("Как вас зовут?");
    switch (name) {
        case "Алексей":
            alert("Привет, Алексей! Мой старый друг!");
            break;
        case "Юлия":
            alert("Давно не видились, Юлия!");
            break;
        case "Иван":
            alert("Это снова ты!? Иван!?");
            break;
        default:
            console.log(`Приветствую тебя ${name}! Хорошоге дня!`)
    }
}
console.log(greeting());

// ----------------------------------------------------------------------------------------

// Вариант 2

function greeting() {
    let name = prompt("Как ваше имя?");
    return name;
}

console.log(`Приветствую тебя ${greeting()}! Хорошоге дня!`)

