/*написать функцию калькулятор, которая запрашивает у
пользователя данные в таком порядке: число - действие -
число - и в зависимости от действия - производит
соответствующее вычисление*/



let firstNum = prompt ('Choose the first number', '1');
let operator = prompt ('Choose the operator', '+');
let secondNum = prompt ('Choose the second number', '2');

function calculate(firstNum, operator, secondNum) {
    if (operator === '+') {
        return (+firstNum) + (+secondNum);
    } else if (operator === '-') {
        return (+firstNum) - (+secondNum);
    } else if (operator === '*') {
        return (+firstNum) * (+secondNum);
    } else if (operator === '/') {
        return (+firstNum) / (+secondNum);
    } else if (operator === '%') {
        return (+firstNum) % (+secondNum);
    }
    else {alert('Choose the right operator')}
} 

alert(calculate(firstNum, operator, secondNum));