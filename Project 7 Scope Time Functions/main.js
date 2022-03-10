var a = "<br>" // for breaks in functions

var X = 10;

function AddNumbers1() { // global
    document.write(20 + X + "<br>");
}

function AddNumbers2() { // global
    document.write(X + 100);
}

function AddNumbers3() { //local
    var X = 13;
    console.log(X + 100);
    document.write(X + 100);
}

AddNumbers1();
AddNumbers2();
document.write(a); // break
AddNumbers3();

document.write(a); // break

if (1 < 2) {
    document.write("the left number is smaller than the number on the right.")
}

function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementsById("Greeting").innerHTML = "How are you today?";
    }
}

function AgeFunction() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are not old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("DefineAge").innerHTML = Vote;
}

function TimeFunction() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("TimeofDay").innerHTML = Reply;
}