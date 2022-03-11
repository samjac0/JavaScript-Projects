//concatenate
function Concatenate() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var WholeSentence = part1.concat(part2, part3, part4);
    document.getElementById("Concatenate").innerHTML = WholeSentence;
}

//slice
function Slice() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}


//uppercase
const sentence = 'The quick brown fox jumps over the lazy dog.';
document.write(sentence.toUpperCase());


//search 
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
document.write(found);

//toString
function NumberstoString() {
    var X = 182;
    document.getElementById("NumberstoString").innerHTML = X.toString();
}

// toPrecision
function Precision() {
    var X = 12938.3012987376112
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//toFixed
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
document.write(financial(123.4564561));



