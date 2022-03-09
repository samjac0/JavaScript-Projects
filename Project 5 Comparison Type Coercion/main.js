var a = "<br>" // for breaks in functions
document.write(typeof "Word");
document.write(a);
document.write(typeof 3); // instructors told me to...
document.write(a);
document.write("10" + 5); // added to the string
document.write(a);
document.write(2E310); // infinity 
document.write(a);
document.write(-2E310); //infinity 
document.write(a);
document.write(10 > 2); // bolean true
document.write(a);
document.write(10 < 2); // bolean false
document.write(a);
document.write(10 == 10);
document.write(a);
document.write(11 == 3);



function myFunction() { //first function
    document.getElementById("test").innerHTML = 0 / 0;
    document.getElementById("test").innerHTML = isNaN('This is a string');
    document.getElementById("test").innerHTML = isNaN('007');
}

