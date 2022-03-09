window.alert(Math.random() * 100);

var X = 5.25;
X++;
document.write(X);


function myFunction() { //first function
    var sentence = "I am learning";
    sentence += " a lot to learn from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

function addition_Function() { //add function
    var addition = 2 + 2;
    document.getElementById("Math+").innerHTML = "2+2 = " + addition;
}

function subtraction_Function() { //sub function
    var subtraction = 5 - 2;
    document.getElementById("Math-").innerHTML = "5 - 2 = " + subtraction;
}

function more_Math() { //multi function
    var simple_math = (1+2) * 10 / 2 -5;
    document.getElementById("Mathlots").innerHTML = "1 plus 2, multiplied by 10, devided in half and then subtracted by 5 equals " + simple_math;
}

function negation_Operator() { //operator function
    var x = 10;
    document.getElementById("MathU").innerHTML = -x;
}

