const screenResult = document.querySelector('.screen-result');
const body = document.querySelector('body');
const numbers = document.querySelectorAll('.number');
const btnSum = document.querySelector('.btn-sum');
const btnMinus = document.querySelector('.btn-minus');
const btnMultiply = document.querySelector('.btn-multiply');
const btnDivide = document.querySelector('.btn-divide');
const btnEqual = document.querySelector('.btn-equal');
const btnDot = document.querySelector('.btn-dot');
const btnDelete = document.querySelector('.btn-del');
const btnReset = document.querySelector('.btn-reset');

const maxDigitsOnScreen = 12;
let operation = '';
let numbersBeforeOperation = '';
let numbersAfterOperation = '';

const clearAllOperations = () => {
   numbersBeforeOperation = '';
   numbersAfterOperation = '';
   operation = '';
   percente = '';
}

btnReset.addEventListener('click', () => {
   screenResult.textContent = '';
   clearAllOperations();
})

btnDelete.addEventListener('click', () => {

   if (screenResult.textContent.length > 0) {
      screenResult.textContent = screenResult.textContent.slice(0, -1);
      numbersBeforeOperation = numbersBeforeOperation.slice(0, -1);
      numbersAfterOperation = numbersAfterOperation.slice(0, -1);
      return
   }

})

for (let i = 0; i < numbers.length; i++) {

   numbers[i].addEventListener('click', () => {
      if (!operation && screenResult.textContent.length < maxDigitsOnScreen) {

         numbersBeforeOperation += numbers[i].textContent;
         screenResult.textContent += numbers[i].textContent;
         return
      }
      if (screenResult.textContent.length < maxDigitsOnScreen) {
         numbersAfterOperation += numbers[i].textContent;
         screenResult.textContent += numbers[i].textContent;
         return
      }
   });
}

const showResult = (operation) => {

   let number1 = numbersBeforeOperation.includes('.') ? parseFloat(Number(numbersBeforeOperation)) : Number(numbersBeforeOperation);
   let number2 = numbersAfterOperation.includes('.') ? parseFloat(Number(numbersAfterOperation)) : Number(numbersAfterOperation);

   if (operation === '+') {
      const result = (number1) + (number2);
      return result;
   }

   if (operation === '-') {
      const result = number1 - number2;
      return result;
   }

   if (operation === 'x') {
      const result = number1 * number2;
      return result;
   }

   if (operation === '/') {
      const result = number1 / number2;
      return result;
   }

}

btnSum.addEventListener('click', () => {

   if (!operation) {
      operation = '+';
      screenResult.textContent = '';
      return
   }
});

btnMinus.addEventListener('click', () => {

   if (!operation) {
      operation = '-';
      screenResult.textContent = '';
      return
   }
});

btnMultiply.addEventListener('click', () => {

   if (!operation) {
      operation = 'x';
      screenResult.textContent = '';
      return
   }
});

btnDivide.addEventListener('click', () => {

   if (!operation) {
      operation = '/';
      screenResult.textContent = '';
      return
   }
});

btnDot.addEventListener('click', () => {

   if (!operation && !numbersBeforeOperation.includes('.')) {
      numbersBeforeOperation += '.';
      screenResult.textContent += '.';
      return
   }

   if (operation && !numbersAfterOperation.includes('.')) {
      numbersAfterOperation += '.';
      screenResult.textContent += '.';
      return
   }
});

btnEqual.addEventListener('click', () => {

   if (!operation) {
      screenResult.textContent = numbersBeforeOperation;
      return
   }
   screenResult.textContent = showResult(operation);
   clearAllOperations();
});
