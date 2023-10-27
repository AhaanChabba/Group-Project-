document.getElementById("b1").addEventListener("click", buttonP);
document.getElementById("b2").addEventListener("click", buttonH4);
document.getElementById("colorPurple").addEventListener("click", buttonPurple);
document.getElementById("colorGreen").addEventListener("click", buttonGreen);
document.getElementById("colorPink").addEventListener("click", buttonPink);
document.getElementById("submit").addEventListener("click", mirror);

//console.log(document.getElementById("b1"))
//add p element that says "you pressed a button!"
function buttonP (){
    const paragraph = document.createElement("p");
    const node = document.createTextNode("You pressed a button!");
    paragraph.appendChild(node);
    //console.log("hello i am pressing the button");
    const element = document.getElementById("div1");
    element.appendChild(paragraph);  
}
//function that changes the inner html text 
 function buttonH4 (){
     var gonnaChange = document.getElementById("changing").innerHTML;
     var change = parseInt(gonnaChange) + 1; //parseint casts the innerNTML to an int
     document.getElementById("changing").innerHTML = change;
}
//makes para purple 
function buttonPurple (){
    /*const para = getElementById("colorP");
    const.style.color = purple; */
    var para = document.getElementById("colorP"); 
    para.style.color = "purple";
}
//makes para green
function buttonGreen (){
    var para = document.getElementById("colorP"); 
    para.style.color = "green";

}
//makes para pink
function buttonPink (){
    var para = document.getElementById("colorP"); 
    para.style.color = "pink";

}
// question 5: mirroring

function mirror (){
    var inp = document.getElementById("tbox").innerText;
    var change = inp;
    document.getElementById("tbox").innerText = change;

}

var changeFontStyle = function (font) { 
    document.getElementById( 
        "fontsP").style.fontFamily 
                = font.value; 
} 


    