// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let amountMediumArif = (array) => {
//     let summ = 0;
//     for (const arrayElement of array) {
//         summ+=arrayElement;
//     }
//
//     return summ / array.length;
// }
//
// let arr = [2,4,6,8];
//
// console.log(amountMediumArif(arr));






// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// let returnMinOutputMax = (array) => {
//     let min = array[0];
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//        if(array[i] < min){
//            min = array[i];
//         }
//        else if(array[i] > max){
//            max = array[i];
//        }
//
//     }
//     console.log(`max : ${max}`);
//     return min;
// }
//
//
// let arraARA = [1,2,42,-3,-22];
//
// console.log(`min : ${returnMinOutputMax(arraARA)}`);






// - створити функцію яка заповнює масив рандомними числами

// чи можливо якось передати в аргумент - функцію, яка робить рандомні значення, щоб, при тому,
// всередині циклу не було повторене лиш одне число
// чи в тому напросто немає потреби
// п.с соре за тупе питання

//функція, яку хотів би передати в аргумент
// let random = (min, max) => {
//     let rand = min - 0.5 + Math.random() * (max - min + 1); //код з нету, не замітив той що знизу
//     return Math.round(rand);
// }


// розв. завдання

// let randNumFill = (array, numbers) => {
//
//     let arr = [];
//     for (let i = 0; i < numbers; i++) {
//         arr[i] = Math.round(Math.random()*100);
//     }
//
//     return arr;
// }
//
//
// let array = [];
// console.log(randNumFill(array, 5));









// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.


// let random = (min,max) => {
//     let rand = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(rand);
// }
//
// let randFill = (array,maxNum, limit) => {
//     let arr = [];
//     for (let i = 0; i < maxNum; i++) {
//         arr[i] = random(0,limit);
//     }
//
//     return arr;
// }
//
// let arar = [];
//
// console.log(randFill(arar,3,40));










// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let reverse = (array) => {
//     let arr = []
//     let i = array.length;
//    while (i > 0){
//        i--;
//        arr.push(array[i]);
//
//    }
//
//     return arr;
// }
//
// let arr = [1,2,3];
// console.log(reverse(arr));








//     Переробити на стрілочні функції з попереднього дз


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let square = (a,b) => a*b;
//
// console.log(square(5,5));





// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let squareCircle = (r) => Math.PI * Math.pow(r,2);
//
// console.log(squareCircle(5));





// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let squareCylinder = (h,r) => 2 * Math.PI * r *(r+h);
//
// console.log(squareCylinder(5,5));




// - створити функцію яка приймає масив та виводить кожен його елемент

// let arrayOutput = (array) => {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// let arr = [3,4,5,67,7];
//
// arrayOutput(arr);





// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraf = (text) => document.write(`<p>${text}</p>`);
//
// paragraf('some text');





// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let ul3Li = (content) => {
//     document.write(`<ul>`)
//     document.write(`<li>${content}</li>`)
//     document.write(`<li>${content}</li>`)
//     document.write(`<li>${content}</li>`)
//     document.write(`</ul>`)
// }
//
// ul3Li("hhehehehehehhhehe");





// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//
// let ulLiLoop = (content, amount) =>{
//     document.write(`<ul>`)
//     for (let i = 0; i < amount; i++) {
//         document.write(`<li>${content}</li>`);
//
//     }
//     document.write(`</ul>`);
// }
//
//
// ulLiLoop('boo',666);





// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrayPrimitive = (array) =>{
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//        document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// let arr = [true,false,'blr','dd',33,3];
//
// arrayPrimitive(arr);






// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let objArr = (array) =>{
//     for (const items of array) {
//         document.write(`<div>
// ${items.id}</br>
// ${items.name}</br>
// ${items.age}</br>
// </div>`);
//     }
// }
//
// let aaarrr = [
//     {id:1, name: 'little boy', age: 100},
//     {id:2, name: 'medium boy', age: 101},
//     {id:3, name: 'big boy', age: 102},
// ]
//
// objArr(aaarrr);







// - створити функцію яка повертає найменьше число з масиву

// let littleOnes = (array) =>{
//     let min = array[0];
//
//     for (let i = 0; i < array.length; i++) {
//        if(array[i] < min){
//            min = array[i];
//        }
//
//     }
//
//     return min;
// }
//
// let arr = [-2,-3,-3,333,-232,23,555,-2334];
//
// console.log(littleOnes(arr))







// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// let summ = (array) => {
//     let summa = 0;
//     for (const arrayElement of array) {
//         summa+=arrayElement;
//     }
//     return summa;
// }
//
// let arr = [5,5,5];
//
// console.log(summ(arr));






// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.


// let changePlace = (array) =>{
//     let change = []
//     let i = array.length;
//     while (i>0){
//         i--;
//         change.push(array[i]);
//
//     }
//     return change
// }
//
// let aaarr = [
//     {min:5,max:6},
//     {min:6,max: 6}
// ];
//
// console.log(changePlace(aaarr));
