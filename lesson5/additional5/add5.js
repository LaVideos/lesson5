// Всі функції повинні бути описані стрілочним типом!!!!


//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// перший спосіб :

// let findMin = (a,b,c) => {
//     let array = [];
//     array.push(a,b,c);
//
//     let min = array[0];
//
//     for (let i = 0; i < array.length; i++) {
//        if(array[i] < min){
//            min = array[i];
//        }
//
//     }
//     console.log(min);
// }
//
// findMin(1,-52,-3)



// другий спосіб :

//
// let findMin = (a,b,c) => {
//     if(a<b&&a<c){
//         console.log(a);
//     }else if(b<a&&b<c){
//         console.log(b);
//     }else if(c<a&&c<b){
//         console.log(c)
//     }else if(a === b && a < c || a === c && a < b){
//         console.log(a);
//     } else if (c === b && c<a || c === a && c < b){
//         console.log(c);
//     }else if(b === a && b < c || b === c && b < a){
//         console.log(b)
//     }
//     else{
//         console.log('error');
//     }
// }
//
// findMin(-10,-11,-13);







// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


// let findMax = (a,b,c) => {
//     let array = [];
//     array.push(a,b,c);
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//        if(max < array[i]){
//            max = array[i];
//        }
//     }
//     console.log(max);
// }
//
//
// findMax(2,343,2877);




// - створити функцію яка повертає найбільше число з масиву

// let findBigNumInArr = (array) =>{
//     let max = array[0];
//
//     for (let i = 0; i < array.length; i++) {
//         if(max < array[i]){
//             max = array[i];
//         }
//
//     }
//
//     return max;
// }
//
// let arr = [343,121,544,121,65654];
//
// console.log(findBigNumInArr(arr));










// - створити функцію яка повертає найменьше число з масиву

// let findlittleNumInArr = (array) => {
//     let min = array[0];
//
//     for (let i = 0; i < array.length; i++) {
//         if(min > array[i] ){
//             min = array[i];
//         }
//
//     }
//
//     return min;
//
// }
//
//
// let arr = [-12,21,-111,-666, -55];
//
// console.log(findlittleNumInArr(arr));







// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let summArr = (array) => {
//     let summ = 0;
//     for (let i = 0; i < array.length; i++) {
//         summ += array[i];
//     }
//
//     return summ;
// }
//
//
// let arr = [5,4,6,8];
//
// console.log(summArr(arr));













// - Дано натуральное число n. Выведите все числа от 1 до n.

// let loopN = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }}
//
// let n = 6;
//
// loopN(n);






// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.

// let loopFrom = (a,b) => {
//     if(a < b){
//         for (let i = a; i <= b; i++) {
//            console.log(i);
//         }
//     }else if(a > b){
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
//     else {
//         console.log(a);
//     }
// }
//
// loopFrom(5,10);








//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// let change = (array, i) => {
//     if(i > array.length){
//         console.log('error')
//     }else {
//         let num = array[i];
//         array[i] = array[i+1];
//         array[i+1] = num;
//
//         console.log(array);
//     }
// }
//
// let arr = [9,8,0,4];
//
// change(arr,1);












// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]



// let zeroToLastIndex = (array) => {
//     let arr =[]
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] !== 0){
//             arr.push(array[i]);
//         }
//     }
//     for (let i = 0; i < array.length; i++) {
//        if(array[i] === 0){
//            arr.push(array[i]);
//        }
//     }
//     return arr;
// }
//
//
//
// let array = [0,0,1,0];
//
// console.log(zeroToLastIndex(array));


