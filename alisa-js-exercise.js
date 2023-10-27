document.getElementById("b1").addEventListener("click", buttonP);
//  <p>
// You pressed a button!
//</p>
document.getElementById("b2").addEventListener("click", buttonH4)

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