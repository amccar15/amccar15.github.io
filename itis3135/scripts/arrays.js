const person = ["Vanessa", "Austin", "Rachel"];
const salaries = [75, 88, 100];

var $ = function (id) { return document.getElementById(id); };

function addSalary()
{
    var personSelect = document.getElementById('employee').value;
    var salaryInput = document.getElementById('salary').value;

    if(salaryInput > 500 || salaryInput < 1)
    {
        alert("Please enter a valid salary");
        salaryInput = "";
    }
}

function displayResults()
{
    var salariesSum = 0;
    for(var i in salaries)
    {
        salariesSum += salaries[i];
    }
    var average = salariesSum / 3;
    var max = salaries.reduce(function(a,b)
    {
        return Math.max(a,b);
    }, -Infinity);
    $('results').innerHTML = "<h2>Results</h2>" + "<p> The Average Salary was :" + average + " thousand</p>" + "<p> The highest salary was :" + max + " thousand</p>";
}

function displaySalary()
{
    var table = "";
    table += "<tr><th>Salaries</th> <th>Names</th></tr>";
    for(var i in salaries)
    {
        table += "<tr><td>" + salaries[i] + "</td><td>" + person[i] + "</td></tr>";
    }
    $('table_results').innerHTML = "<h2> Table </h2>" + table;
}