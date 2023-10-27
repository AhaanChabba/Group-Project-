
// Excercise 2

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("button1");
    var currentList = document.getElementById("list");

    button.addEventListener("click", () => {
        var newLine = document.createElement('li');
        newLine.appendChild(document.createTextNode("You pressed a button"));
        currentList.appendChild(newLine);
    });
});


// Excercise 3

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("button2");
    var counter = document.getElementById("head");

    button.addEventListener("click", () => {
        var currentValue = parseInt(counter.innerText);
        counter.innerText = (currentValue + 1);

    });
});


// Excercise 4

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("redtext");


    button.addEventListener("click", () => {
        var colorCurrent = document.getElementById("color").style.color = "red";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("bluetext");


    button.addEventListener("click", () => {
        var colorCurrent = document.getElementById("color").style.color = "blue";

    });
});

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("greentext");


    button.addEventListener("click", () => {
        var colorCurrent = document.getElementById("color").style.color = "green";

    });
});

// Excercise 5

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("regenerate");
    var userInput = document.getElementById("entry");
    var output = document.getElementById("output");

    button.addEventListener("click", () => {
        output.innerText = userInput.value;
    });
});

//Exercise 6



document.addEventListener("DOMContentLoaded", function () {
    var paragraph = document.getElementById("Paragraph");
    var fontSelector = document.getElementById("fontSelector");

    fontSelector.addEventListener("change", function () {
        var selectedFont = fontSelector.options[fontSelector.selectedIndex].value;
        paragraph.style.fontFamily = selectedFont;
    });
});
