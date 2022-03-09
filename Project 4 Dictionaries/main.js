
function myFunction() { //first function
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function myFunction1() { //second showing KVP priority
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!",
        Sound: "Meow!"
    };
    document.getElementById("Dictionary1").innerHTML = Animal.Sound;
}

function myFunction2() { //third showing "undefined"
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound
    document.getElementById("Dictionary2").innerHTML = Animal.Sound;
}