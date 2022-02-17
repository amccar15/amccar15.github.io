function validation()
{
    var number = document.getElementById("num").value;

    if(number < 1 || number > 10)
    {
        alert("This number is not between 1 and 10!");
        return false;
    }
    return true;
}

function resetbtn()
{
    document.getElementById('num').value = '';
}

function getShape()
{
    var id = document.getElementById("num").value;
    var message;
    if(id == 1)
    {
        message = "You got a henagon!"
        document.getElementById("display").innerHTML = message;
    }
    if(id == 2)
    {
        message = "You got a digon!"
        document.getElementById("display").innerHTML = message;
    }
    if(id == 3)
    {
        message = "You got a trigon!"
        document.getElementById("display").innerHTML = message;
    }
    if(id == 4)
    {
        message = "You got a tetragon!"
        document.getElementById("display").innerHTML = message;
    }
    if(id == 5)
    {
        message = "You got a pentagon!"
        document.getElementById("display").innerHTML = message;
    }
    if(id == 6)
    {
        message = "You got a hexagon!"
        document.getElementById("display").innerHTML = message;
    }
    if(id == 7)
    {
        message = "You got a heptagon!"
        document.getElementById("display").innerHTML = message;
    }
    if(id == 8)
    {
        message = "You got a octagon!"
        document.getElementById("display").innerHTML = message;
    }
    if(id == 9)
    {
        message = "You got a enneagon!"
        document.getElementById("display").innerHTML = message;
    }
    if(id == 10)
    {
        message = "You got a hendecagon!"
        document.getElementById("display").innerHTML = message;
    }
}