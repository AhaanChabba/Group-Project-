document.getElementById("b1").addEventListener("click", buttonP);
document.getElementById("b2").addEventListener("click", buttonH4);
document.getElementById("colorPurple").addEventListener("click", buttonPurple);
document.getElementById("colorGreen").addEventListener("click", buttonGreen);
document.getElementById("colorPink").addEventListener("click", buttonPink);
//console.log(document.getElementById("b1"))
function buttonP (){
    const paragraph = document.createElement("p");
    const node = document.createTextNode("You pressed a button!");
    paragraph.appendChild(node);
    //console.log("hello i am pressing the button");
    const element = document.getElementById("div1");
    element.appendChild(paragraph);  
}
 function buttonH4 (){
     var gonnaChange = document.getElementById("changing").innerHTML;
     var change = parseInt(gonnaChange) + 1;
     document.getElementById("changing").innerHTML = change;
} 
function buttonPurple (){
    /*const para = getElementById("colorP");
    const.style.color = purple; */
    var para = document.getElementById("colorP"); 
    para.style.color = "purple";
}
function buttonGreen (){
    var para = document.getElementById("colorP"); 
    para.style.color = "green";

}
function buttonPink (){
    var para = document.getElementById("colorP"); 
    para.style.color = "pink";

}
    