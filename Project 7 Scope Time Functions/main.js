var a = "<br>";

var X = 10;

function AddNumbers1() { // global
    document.write(20 + X + "<br>");
}

function AddNumbers2() { // global
    document.write(X + 100);
}
document.write(a); // break

function AddNumbers3() { //local
    var X = 13;
    console.log(X + 100);
    document.write(X + 100);
}

AddNumbers1();
AddNumbers2();
AddNumbers3();

document.write(a); // break

if (1 < 2) {
    document.write("the left number is smaller than the number on the right.")
}

function GetDate() {
    if (new Date().getHours() < 18) {
        document.getElementsById("Greeting").innerHTML = "How are you today?";
    }
}



