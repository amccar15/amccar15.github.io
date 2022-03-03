
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
        number1 += value;
        display(number1);
        return number1;
    }
    if(secondNum == 0 && operator != null) 
    {
        secondNum = value;
        display(secondNum);
        return secondNum;
    }
    else
    {
        secondNum += value;
        display(secondNum);
        return secondNum;
    }
}
function getOperator(value)
{
    operator = value;
    displayOP(operator);
    return operator;
}
function allclear()
{
    document.getElementById('display').innerHTML = "0";
    number1 = 0;
    secondNum = 0;
    operator = null;
}
function display(displayNum)
{
    document.getElementById('display').innerHTML = displayNum;
}
function displayOP()
{
    document.getElementById('display').innerHTML = operator;
}
function answer(result)
{ 
    document.getElementById('display').innerHTML = result
}
function calculate()
{
    var result;
    if(operator == '+')
    {
        result = +number1 + +secondNum;
        return answer(result);
    }
    if(operator == '-')
    {
        result = number1 - secondNum;
        return answer(result);
    }
    if(operator == '*')
    {
        result = number1 * secondNum;
        return answer(result);
    }
    if(operator == "/")
    {
        result = number1 / secondNum;
        return answer(result);
    }
}