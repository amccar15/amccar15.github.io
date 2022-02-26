
   var number1 = 0;
   var append = 0;
   var secondNum = 0;
   var operator = null;

function getNumber(value)
{
    if(number1 == 0)
    {
        number1 = value;
        display(number1);
        return number1;
    }
    if(operator == null)
    {
        secondNum = value;
        display(secondNum);
        return secondNum;
    }
    else
    {
        number1 = 0;
        secondNum = 0;
    }
}
function getOperator(value)
{
    operator = value;
    return operator;
}
function allclear()
{
    document.getElementById('display').innerHTML = "";
    number1 = 0;
    secondNum = 0;
    operator = null;
}
function display(displayNum)
{
    document.getElementById('display').innerHTML += displayNum;
}

function calculate()
{
    var result;
    if(operator == '+')
    {
        result = +number1 + +secondNum;
        console.log(number1);
        console.log(secondNum);
        return display(result);
    }
    if(operator == '-')
    {
        result = number1 - secondNum;
        return display(result);
    }
    if(operator == '*')
    {
        result = number1 * secondNum;
        return display(result);
    }
    if(operator == "/")
    {
        result = number1 * secondNum;
        return display(result);
    }
}