//your code here

function todo(){
	var node = document.createElement("li");
var  inputValue=document.getElemntById("newTodoInput").value;
document.write("work");
var textnode = document.createTextNode(inputValue);
node.appendChild(textnode);
document.getElementById("todoList").appendChild(node);
	
}
const btn = document.querySelector("button");
btn.onclick=todo;