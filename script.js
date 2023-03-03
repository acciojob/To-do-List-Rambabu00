//your code here

function todo(){
	var node = document.createElement("li");
var  inputValue=document.querySelector("input").value;

var textnode = document.createTextNode(inputValue);
node.appendChild(textnode);
document.querySelector("ol").appendChild(node);
	
}
const btn = document.querySelector("button");
btn.onclick=todo;