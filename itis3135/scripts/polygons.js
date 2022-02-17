//launch script on load
object.onload = function(){display()};

//display and get number from user
function display()
{
    var number = window.prompt("Hello! The Aquamarine Monkeys would love to get a number between 1 and 10! This will give you a polygon!");
    roundNum(number);
}

//make sure number is between 1 and 10
function validation(shape)
{
    if(shape < 1 || shape > 10)
    {
        shape = alert("Not between 1 and 10!");
        return display(shape);
    }
}

//round the user number to either positive or non decimal 
function roundNum(number)
{
    let shape = Math.round(Math.abs(number));
    validation(shape);
    getShape(shape);
}

//get the shape based on user number 
function getShape(number)
{
    do{
        if(number == 1)
        {
            alert("You entered a: " + number +"\nYou got a henagon!");
        }
        if(number == 2)
        {
            alert("You entered a: " + number + "\nYou got a digon!");
        }
        if(number == 3)
        {      
            alert("You entered a: " + number + "\nYou got a trigon!");
        }
        if(number == 4)
        {
            alert("You entered a: " + number + "\nYou got a tetragon!");
        }
        if(number == 5)
        {
            alert("You entered a: " + number + "\nYou got a pentagon!");
        }
        if(number == 6)
        {
            alert("You entered a: " + number + "\nYou got a hexagon!");
        }
        if(number == 7)
        {
            alert("You entered a: " + number + "\nYou got a heptagon!");
        }
        if(number == 8)
        {
            alert("You entered a: " + number + "\nYou got a octagon!");
        }
        if(number == 9)
        {
            alert("You entered a: " + number + "\nYou got a enneagon!");
        }
        if(number == 10)
        {   
            alert("You entered a: " + number + "\nYou got a hendecagon!");
        }
        var yes = window.confirm("Click OK to enter another number");
        if(yes == true) 
        {
            return display();
        }
        if(yes == false) 
        {
            break;
        }
    }while(yes == true);
} 
//I did this code all by my self