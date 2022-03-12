//count to ten
function CountingtoTenFunction() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("CountingtoTen").innerHTML = Digit;
}

//list of instruments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function forLoop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("ListofInstruments").innerHTML = Content;
}


// cat array
function CatPics() {
    var CatPicture = [];
    CatPicture[0] = "sleeping";
    CatPicture[1] = "playing";
    CatPicture[2] = "eating";
    CatPicture[3] = "purring";


    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        CatPicture[2] + ".";
}

// constant function
function ConstantFunction() {
    const Musical_Instrumant = { type: "guitar", brand: "Fender", color: "black" };
    Musical_Instrumant.color = "blue";
    Musical_Instrumant.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrumant.type + " was " + Musical_Instrumant.price;
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("CarObject").innerHTML = car.description();