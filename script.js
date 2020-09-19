
// const container = document.getElementsByClassName('container')[0];
// container.firstElementChild.style.borderColor = 'red';
// container.children[4].style.borderColor = 'red';
// container.lastElementChild.style.borderColor = 'red';





/*Покрасить внешние ссылки в красный цвет 
<ul>
 <li><a href="http://google.com">http://google.com</a></li>
 <li><a href="/tutorial">/tutorial.html</a></li>
 <li><a href="local/path">local/path</a></li>
 <li><a href="http://nodejs.org">http://nodejs.org</a></li>
</ul>*/

// const list = document.getElementsByTagName('ul')[0];
// const links = list.children;

// for (i = 0; i < links.length; i++) {
//     const isContainsOuterLinks = links[i].firstElementChild.href.includes('http');
//     if (isContainsOuterLinks) {
//         links[i].style.backgroundColor = 'red';
//     }
// };





/*Напишите функцию showNotification(options), которая создаёт
уведомление: <div class="notification"> с заданным содержимым.
Уведомление должно автоматически исчезнуть через 1,5 секунды.*/








function showNotification(options){
    let div = document.createElement('div');
    div.className = 'notification';
    div.innerHTML = options;
    document.body.append(div);
}



showNotification('Hello There!')
setTimeout(function (){
    let del = document.getElementsByClassName('notification')[0];
    del.remove();
}
, 3000)







































/*написать функцию калькулятор, которая запрашивает у
пользователя данные в таком порядке: число - действие -
число - и в зависимости от действия - производит
соответствующее вычисление*/



// let firstNum = prompt ('Choose the first number', '1');
// let operator = prompt ('Choose the operator', '+');
// let secondNum = prompt ('Choose the second number', '2');

// function calculate(firstNum, operator, secondNum) {
//     if (operator === '+') {
//         return (+firstNum) + (+secondNum);
//     } else if (operator === '-') {
//         return (firstNum) - (secondNum);
//     } else if (operator === '*') {
//         return (firstNum) * (secondNum);
//     } else if (operator === '/') {
//         return (firstNum) / (secondNum);
//     } else if (operator === '%') {
//         return (firstNum) % (secondNum);
//     }
//     else {alert('Choose the right operator')}
//     alert(calculate(firstNum, operator, secondNum))
// } 

// if ((firstNum &&  operator && secondNum) != null ) {
//     alert(`Your result is ${calculate(firstNum, operator, secondNum)}`);
// } else { alert('Wrong number/ operator'); }


/*Создать кэш данных в объекте и возвращать данные из
кэша, если значение имеется или записывать в него
новые значения, если не имеется.*/

// let cash = {};

// function storeData() {

//     let obj = cash;

//     return function (key, property){
            
//         return obj[key] = property;
//         }
        

//     }


// const value = storeData();
// const firstValue = value('age', '25');
// const secondValue = value('name', 'John');
// const thirdValue = value( 'isAdmin', true);
// console.log(Object.keys(cash));



/*Создать объект машины car, который имеет свойство "передача" и
метод, который повышает/понижает передачу на 1. Также у объекта
должен быть метод, который в зависимости от передачи
возвращает сообщение о скорости: (-1) - 'back', 0 - 'neutral', 1 - 'slow',
2 - 'medium', 3 - 'fast', 4 - 'very fast'. При попытке сложить объект car с
числом - число должно складываться в свойство speed и speed
должна возвращаться. Если скорость больше 5 - должно быть
выведено сообщение "Warning! Your speed is too high!"*/



// let gear = +prompt('What is your speed?');

// let car = {
//     gear,
//     valueOf () {
//        return this.gear;
//     },
// };

// car.changeSpeed = (gear) => {
//     return gear += 1;
// };
// car.showSpeed = (gear) => {
//     switch (car.gear) {
//         case -1:
//             alert('back');
//             break;
//         case 0:
//             alert('neutral');
//             break;
//         case 1:
//             alert('slow');
//             break;
//         case 2:
//             alert('medium');
//             break;
//         case 3:
//             alert('fast');
//             break;
//         case 4:
//             alert('very fast');
//             break;
//         case 5 <= gear:
//             alert('Your speed is too high!');
//         default:
//             alert('Choose your speed');
//             break;
//     };
// };
// car.showSpeed();





































/* получить сумму элементов массива*/
// let vegetables = [1, 2, 3, 4, 5];
// let sum = vegetables[0];
// for (i = 1; i < vegetables.length; i++) {
//     sum += vegetables[i]
// }
// console.log(sum)






















// function count  (num) {
//     for(let i = 0; i <= num; i++) console.log (i);
// }

// count(100);



// function count  (num) {
//     if (num == 1){
//         return num;
//     }
//     console.log(num);
//     count(num - 1);
// }

// count(100)

// function sum(num) {
//     if (num == 1) {
//         return num;
//     }

//     return num + sum(num - 1);
// }

// console.log(sum(10));





// function sum(a) {

//     let count = 0;

//     return function(b){
        
//         return count += a;
//     }
// }
// const res = sum();
// const first = res(5);
// const second = res(6);


// console.log(second);
