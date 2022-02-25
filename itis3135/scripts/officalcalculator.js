const calculator = 
{
    displayValue: '0', 
    firstNumber: null,
    secondNumber: false,
    operator: null,
};

function inputNumber(number) 
{
    const { displayValue, secondNumber } = calculator;
    //ready for second number to be entered 
    if(secondNumber == true)
    {
        //display first number
        calculator.displayValue = number;
        //once second number is entered set this to false
        calculator.secondNumber = false;
    }
    else 
    {
        //overwriting value of 0 or adding numbers and not overwriting 
        if(displayValue == '0')
        {
            calculator.displayValue = number;
        }
        else
        {
            calculator.displayValue = displayValue + number;
        }
    }
    console.log(calculator);
}

function inputDec(dot)
{
    //if no decimal is included
    if(!calculator.displayValue.includes(dot))
    {
        //adds a dot
        calculator.displayValue += dot;
    }
}

function calculate(firstNumber, secondNum, operator)
{
    //result of calculation
    var answer;
    //takes operator and does that calculation
    if(operator == '+')
    {
        answer = firstNumber + secondNum;
        return answer;
    }
    if(operator == '-')
    {
        answer = firstNumber - secondNum;
        return answer;
    }
    if(operator == '*')
    {
        answer = firstNumber * secondNum;
        return answer;
    }
    if(operator == '/')
    {
        answer = firstNumber / secondNum;
        return answer;
    }
    if(operator == '%')
    {
        answer = firstNumber % secondNum;
        return answer;
    }
    return answer;
}

function useOperator(nextOperator) {
    const { firstNumber, displayValue, operator } = calculator;
    //converting string values to a float
    const input = parseFloat(displayValue);
    
    //checks if these are true 
    if (operator && calculator.secondNumber == true)  
    {
        //since an operator already exists, a calculation does not need to be performed 
        //setting operator to the value of the next operator which is empty 
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
    }
    //verify first operator is null and that second one a number not NaN(not a number)
    if (firstNumber == null && !isNaN(input)) 
    {
      calculator.firstNumber = input;
    } 
    //checks if the operator is assigned a value and if so, it calculates the input
    else if (operator) 
    {
      const result = calculate(firstNumber, input, operator);
    
      //converting back into string to be displayed 
      calculator.displayValue = String(result);
      //adding first number to results so it can be used in the next calculation
      calculator.firstNumber = result;
    }

    //first number is entered ready for second number
    calculator.secondNumber = true;
    //setting the operator equal to the next operator 
    calculator.operator = nextOperator;
    console.log(calculator);
  }

  //reseting calculator constructor 
function resetCal()
{
    calculator.displayValue = '0';
    calculator.firstNumber = null;
    calculator.secondNumber = false;
    calculator.operator = null;
    console.log(calculator);
}

function display()
{
    //selecting element with class displaycalc
    const display = document.querySelector('.displaycalc');

    //setting display value
    display.value = calculator.displayValue;
    console.log(display);
}

display();

window.onload = function() {
    const button = document.querySelector('.cal_btn');
    button.addEventListener("click", (event) => {

        //access clicked element
      const target = event.target;

      //checking if button is an element 
      if (!target.matches('button')) {
        return;
      }
    
      //if an operator is clicked
      if (target.classList.contains('operator')) {
        useOperator(target.value);
        display();
        return;
      }
    
      //if the decimal button is clicked
      if (target.classList.contains('decimal')) {
        inputDec(target.value);
        display();
        return;
      }
    
      //if the all-clear button is clicked
      if (target.classList.contains('all-clear')) {
        resetCal();
        display();
        return;
      }
      
      //if target is a number 
      inputNumber(target.value);
      display();
    });
}