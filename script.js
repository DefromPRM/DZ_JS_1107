// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// userArray = [];
// for (let i = 0; i < 11; i++) {
//     if (i===0) {
//         console.log(`${i} - это ноль`);
//     }
//     else if (i%2 === 1) {
//         console.log(`${i} - это нечентное число`);
//     }
//     else if (i%2 === 0) {
//         console.log(`${i} - это чентное число`);
//     }
// }


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const userArray = [1, 2, 3, 4, 5, 6, 7];
// console.log(userArray);
// userArray.splice(3, 2);
// console.log(userArray);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9 
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// function getRandomNumber(min, max) {
//     min = Math.ceil(0);
//     max = Math.floor(10);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const userArray = [];
// for (let i = 0; i < 10; i++) {
//     userArray.push(getRandomNumber(5));
// }
// console.log(userArray);
// // 3.1
// let sumOfUserArrayValues = 0
// for (let i = 0; i < userArray.length; i++) {
//     sumOfUserArrayValues = sumOfUserArrayValues+userArray[i];
// }
// console.log(sumOfUserArrayValues);
// // 3.2
// let minValues = 9;
// for (let i = 0; i < userArray.length; i++) {
//     if (userArray[i]<=minValues) {
//         minValues = userArray[i]
//     }
// }
// console.log(minValues);
// // 3.3
// for (let i = 0; i < userArray.length; i++) {
//     if (userArray[i] === 3) {
//         console.log('Такое число есть');
//     }
// }