function scriptTest() 
{
    alert("Hey my script is running");
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "#00ffff";
ctx.lineWidth = 17;
ctx.shadowBlur = 15;
ctx.shadowColor = '#00ffff';

function degToRoad(degree)
{
    var factor = Math.PI / 180;
    return degree * factor;
}

function renderTime()
{
    var now = new Date();
    var today = now.toDateString();
    var time = now.toLocaleTimeString();
    var hrs = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var mil = now.getMilliseconds();
    var smoothsec = sec + (mil/1000);
    var smoothmin = min + (smoothsec/60);

    gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, "#03303a");
    gradient.addColorStop(.75, "#caf0f8");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 500);
    //hours
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRoad(270), degToRoad((hrs * 30)- 90));
    ctx.stroke();
    //minutes
    ctx.beginPath();
    ctx.arc(250, 250, 170, degToRoad(270), degToRoad((smoothmin * 6)- 90));
    ctx.stroke();
    //second
    ctx.beginPath();
    ctx.arc(250, 250, 140, degToRoad(270), degToRoad((smoothsec * 6)- 90));
    ctx.stroke();
    //date
    ctx.font = "25px Helvatica";
    ctx.fillStyle = 'rgba(00, 255, 255, 1)';
    ctx.fillText(today, 175, 250);
    //time
    ctx.font = "25px Helvetica Bold";
    ctx.filleStyle = 'rgba(00, 255, 255, 1)';
    ctx.fillText(time + ";" + mil, 175, 280);
}

setInterval(renderTime, 40);

function showInput() 
{
    var usr = document.getElementById("usr").value;
    var feel = document.getElementById("feel").value;
    var display = "McCarter Deli & Company Welcomes you, " + usr + "! We're glad you are doing " + feel;
    alert(display);
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