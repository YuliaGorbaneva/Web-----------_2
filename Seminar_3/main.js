// alert("Привет!");
// let num = 5;
// alert(num);
// num = 10;
// console.log(num);
// const numm = 15;
// console.log(num+numm);

// Задача 1: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, 
// которые ввел пользователь, вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.

// const a = Number.parseFloat(prompt("Введите первоечисло"));
// const b = Number.parseInt(prompt("Введите втрое число"));
// alert(`Результат сложения ${a} и ${b} равен ${(summ(a, b)).toFixed(3)}`);

// const n = 1.45882;
// console.log(n);
// console.log(n * 100);
// console.log(Math.round(n * 100));
// console.log(Math.round(n * 100) / 100);
// console.log(Math.round(n * 10) / 10);

// function summ(a, b) {
//     return a + b
// }


// Задача 2: вывести на экран в диалоговом окне текст с сообщением 
// “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с 
// сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст 
// с сообщением “Ну, вы держитесь там!”.

// let str = confirm("Вам хорошо живется?");
// if (str == true) {
//     alert("Тогда мы идем к вам!")
// } else {
//     alert("Ну, вы держитесь там!")
// }


// Задача 3: перепишите код, используя конструкцию switch-case, 
// запрашивая продукт через диалоговое окно.

// let product = "бананы";

// if (product == "мандарины") {
//     alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "бананы") {
//     alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "груши") {
//     alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//     alert('Нет такого продукта.');
// }

// let prod = prompt("Напишите название продукта");
// switch (prod.toLocaleLowerCase()    ) {
//     case "мандарины":
//         alert ('Мандарины стоят 100 руб/кг.');
//         break;
//     case "бананы":
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     case "груши":
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     default:
//         alert('Нет такого продукта.');
// }


// Задача 4: Функция getMaxEvenElement принимает массив с целыми числами,
// необходимо
// реализовать функцию так, чтобы она возвращала значение большего
// элемента массива,
// который записан в четном индексе включая 0.

// function getMaxEvenElement(arr){
//     best = arr[0];
//     i = 2;

//     while (i < arr.length) {
//         if (arr[i] > best) {
//             best = arr[i];
//         }
//         i += 2;
//     }
//     return best;
// }

// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31

// Задача 5: Необходимо пользователя попросить ввести температуру в градусах Цельсия,
// преобразовать введенное пользователем значение в соответствующую температуру
// в градусах по Фаренгейту и вывести в alert сообщение с текстом:
// "Цельсий: {C}, Фаренгейт: {F}"
// Где вместо {C} и {F} должны быть подставлены соответствующие значения, которые
// были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32


let grad = Number.parseFloat(prompt("Введите температуру:"));
let far = (9 / 5) * grad + 32;
alert(`Цельсий: ${grad}, Фаренгейт: ${far.toFixed(2)}`)