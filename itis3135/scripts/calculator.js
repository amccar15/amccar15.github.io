const calculator = 
{
    displayValue: 0, 
    firstNumber: null,
    secondNumber: false,
    operator: null,
};

function display()
{
    const display = document.querySelectorAll('.cal_display');

    display.value = calculator.displayValue;
}

display();

function inputNumber(number) 
{
    const { displayValue } = calculator;
    calculator.displayValue = display == '0' ? number : displayValue + number;
}

window.onload = function() {
    const button = document.querySelector('.cal_btn');
    button.addEventListener("click", (event) => {

      const { target } = event;

      if (!target.matches('button')) {
        return;
      }
    
      if (target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
      }
    
      if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return;
      }
    
      if (target.classList.contains('all-clear')) {
        console.log('clear', target.value);
        return;
      }
    
      inputDigit(target.value);
      updateDisplay();
    });
}