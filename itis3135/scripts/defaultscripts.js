function scriptTest() 
{
    alert("Hey my script is running");
}

var dt = new Date();
    document.getElementById("date-time").innerHTML = dt

function showInput() 
{
    document.getElementById("outputUser").innerHTML = document.getElementById("usr").value;
    document.getElementById("outputFeeling").innerHTML = document.getElementById("feel").value;
}

function sandwhich()
{
    const sandwichList = ["Ham & Cheese", "Turkey & Cheese", "Cheese", "Meats"];
    var randomItem = sandwichList[Math.floor(Math.random()*sandwichList.length)];
    document.getElementById("sandwhich").innerHTML = randomItem;
}

function insult()
{
    const insults = ["You stinky", "Bean Boi", "No bread", "Zero Drip"];
    randomItem = insults[Math.floor(Math.random()*insults.length)];
    document.getElementById("insultme").innerHTML = randomItem
}

function compliment()
{
    const compliments = ["You're the prettiest", "Your mom's favorite", "The smartest person", "Your so strong"];
    randomItem = compliments[Math.floor(Math.random()*compliments.length)];
    document.getElementById("complimentme").innerHTML = randomItem;
}

function addNumbers() 
{
   var price1 = document.getElementById("price1").value;
   var price2 = document.getElementById("price2").value;
   var total = Number(price1) + Number(price2);
   document.getElementById("sandwhichprice").innerHTML = total;
}

function coinflip()
{
    const coin = ["Heads", "Tails"];
    randomItem = coin[Math.floor(Math.random()*coin.length)];
    document.getElementById("flipcoin").innerHTML = randomItem;
}