//Exercise 2

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("firstbutton");
    var currentList = document.getElementById("list");

    button.addEventListener("click", () => {
        var newLine=document.createElement('li');
        newLine.appendChild(document.createTextNode("You pressed a button!"));
        currentList.appendChild(newLine);
    });
    
});

//Exercise 3
document.addEventListener("DOMContentLoaded", function(){
    var button= document.getElementById("secondbutton");
    var counter = document.getElementById("head");

    button.addEventListener("click",() => {
        var currentValue = parseInt(counter.innerText);
        counter.innerText = (currentValue+1);
    })
})

//Exercise 4

document.addEventListener("DOMContentLoaded", function (){
    var button = document.getElementById("black");

    button.addEventListener("click",() => {
        var colorCurrent= document.getElementById ("color").style.color = "black";
    })
})

document.addEventListener("DOMContentLoaded", function (){
    var button = document.getElementById("white");

    button.addEventListener("click",() => {
        var colorCurrent= document.getElementById ("color").style.color = "white";
    })
})

document.addEventListener("DOMContentLoaded", function (){
    var button = document.getElementById("blue");

    button.addEventListener("click",() => {
        var colorCurrent= document.getElementById ("color").style.color = "blue";
    })
})

//Exercise 5

document.addEventListener("DOMContentLoaded",function() {
    var button = document.getElementById("mirror");
    var userInput = document.getElementById("input");
    var output = document.getElementById ("output");

    button.addEventListener("click", () => {
        output.innerText=userInput.value ;
    
    })
})

//Exercise 6

document.addEventListener("DOMContentLoaded", function() {
    var paragraph = document.getElementById("words");
    var fontSelector = document.getElementById("fonts");

    fontSelector.addEventListener("change", function() {
        var selectedFont = fontSelector.options [fontSelector.selectedIndex].value;
        paragraph.style.fontFamily= selectedFont;
    })
    
})