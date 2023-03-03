//your code here

function todo(){
	var node = document.createElement("li");
var  inputValue=document.querySelector("input").value;

var textnode = document.createTextNode(inputValue);
node.appendChild(textnode);
	if(inputValue!=''){
document.querySelector("ol").appendChild(node);
document.querySelector("input").value="";

	}
	
}
const btn = document.querySelector("button");
btn.onclick=todo;