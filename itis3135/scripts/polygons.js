function display()
{
    
}

function validation()
{
    var number = document.getElementById("num").value;

    if(number < 0 || number > 10)
    {
        alert("This number is not between 0 and 10!");
        return false;
    }
    return true;
}