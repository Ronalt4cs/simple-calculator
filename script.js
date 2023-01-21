const body = document.querySelector('body');
const root = document.querySelector(':root');
const screenResult = document.querySelector('.screen-result');
const numbers = document.querySelectorAll('.number');
const btnSum = document.querySelector('.btn-sum');
const btnMinus = document.querySelector('.btn-minus');
const btnMultiply = document.querySelector('.btn-multiply');
const btnDivide = document.querySelector('.btn-divide');
const btnEqual = document.querySelector('.btn-equal');
const btnDot = document.querySelector('.btn-dot');
const btnDelete = document.querySelector('.btn-del');
const btnReset = document.querySelector('.btn-reset');

const btnThemeOne = document.getElementById('one');
const btnThemeTwo = document.getElementById('two');
const btnThemeThree = document.getElementById('three');
const circleTheme = document.getElementById('circle');

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

const changeTheme = (newTheme) => {
   if (newTheme === 1) {
      root.style.setProperty('--bg-color', 'hsl(222, 26%, 31%)');
      root.style.setProperty('--bg-keyboard', 'hsl(223, 31%, 20%)');
      root.style.setProperty('--bg-screen', 'hsl(224, 36%, 15%)');
      root.style.setProperty('--bg-key', 'hsl(30, 25%, 89%)');

      root.style.setProperty('--btn-secondary', 'hsl(225, 21%, 49%)');
      root.style.setProperty('--btn-spotlight', 'hsl(6, 63%, 50%)');
      root.style.setProperty('--key-shadow', 'hsl(28, 16%, 65%)');
      root.style.setProperty('--secondary-key-shadow', 'hsl(224, 28%, 35%)');
      root.style.setProperty('--spotlight-key-shadow', 'hsl(6, 70%, 34%)');

      root.style.setProperty('--txt-color', 'hsl(221, 14%, 31%)');
      root.style.setProperty('--txt-secondary', 'hsl(0, 0%, 100%)');
      btnEqual.style.color = 'hsl(0, 0%, 100%)';
      screenResult.style.color = 'hsl(0, 0%, 100%)';
      circleTheme.style.left = 0;
      return
   }
   if (newTheme === 2) {
      root.style.setProperty('--bg-color', 'hsl(0, 0%, 90%)');
      root.style.setProperty('--bg-keyboard', 'hsl(0, 5%, 81%)');
      root.style.setProperty('--bg-screen', 'hsl(0, 0%, 93%)');
      root.style.setProperty('--bg-key', 'hsl(45, 7%, 89%)');

      root.style.setProperty('--btn-secondary', 'hsl(185, 42%, 37%)');
      root.style.setProperty('--btn-spotlight', 'hsl(25, 98%, 40%)');
      root.style.setProperty('--key-shadow', 'hsl(35, 11%, 61%)');
      root.style.setProperty('--secondary-key-shadow', 'hsl(185, 58%, 25%)');
      root.style.setProperty('--spotlight-key-shadow', 'hsl(25, 99%, 27%)');

      root.style.setProperty('--txt-color', 'hsl(60, 10%, 19%)');
      root.style.setProperty('--txt-secondary', 'hsl(60, 10%, 19%)');
      btnEqual.style.color = 'hsl(0, 0%, 100%)';
      screenResult.style.color = 'hsl(60, 10%, 19%)';
      circleTheme.style.left = '22px';
      return
   }
   if (newTheme === 3) {
      root.style.setProperty('--bg-color', 'hsl(268, 75%, 9%)');
      root.style.setProperty('--bg-keyboard', 'hsl(268, 71%, 12%)');
      root.style.setProperty('--bg-screen', 'hsl(268, 71%, 12%)');
      root.style.setProperty('--bg-key', 'hsl(281, 89%, 26%)');

      root.style.setProperty('--btn-secondary', 'hsl(268, 47%, 21%)');
      root.style.setProperty('--btn-spotlight', 'hsl(176, 100%, 44%)');
      root.style.setProperty('--key-shadow', 'hsl(290, 70%, 36%)');
      root.style.setProperty('--secondary-key-shadow', 'hsl(285, 91%, 52%)');
      root.style.setProperty('--spotlight-key-shadow', 'hsl(177, 92%, 70%)');

      root.style.setProperty('--txt-color', 'hsl(52, 100%, 62%)');
      root.style.setProperty('--txt-secondary', 'hsl(52, 100%, 62%)');
      btnEqual.style.color = 'hsl(198, 20%, 13%)';
      screenResult.style.color = 'hsl(52, 100%, 62%)';

      circleTheme.style.left = '44px';
      return
   }
}

btnThemeOne.addEventListener('click', () => {
   changeTheme(1);
})

btnThemeTwo.addEventListener('click', () => {
   changeTheme(2);
})
btnThemeThree.addEventListener('click', () => {
   changeTheme(3)
})

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
