const calculator =
{
    number: 0,
    operator: null
};

function getNumber(value)
{
    calculator.number = value;
    console.log(calculator.number);
    return calculator.number;
}
function getOperator(value)
{
    calculator.operator = value;
    return calculator.operator;
}
function allclear()
{
    document.getElementById('display').innerHTML = "";
    document.getElementById('displayOP').innerHTML = "";
    calculator.number = 0;
    calculator.operator = null;
}
function display(displayNum)
{
    if(calculator.number != 0)
    {
        document.getElementById('display').innerHTML += displayNum;
    }
     else if(calculator.number == 0)
    {
        document.getElementById('display').innerHTML = displayNum;
    }
}

display();

function calculate()
{
    if(getOperator() == '+')
    {
        console.log('plus');
    }
}