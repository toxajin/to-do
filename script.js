var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("ul2");
function inputLength() {
	return input.value.length;
}
function getli(){
	var done = document.getElementsByTagName("li");
	return done;
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var dele = document.createElement("button");
	dele.appendChild(document.createTextNode("delete"));
	li.appendChild(dele);
	dele.setAttribute("class","hidden")
}
function deleteItem(event){
	event.target.parentElement.remove();
}
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
};
function strikethrough(event){
	if (event.target.tagName === "LI")
	{
		event.target.classList.toggle("done");
		event.target.children[0].classList.toggle("hidden");
	}
	else if(event.target.tagName === "BUTTON")
	{
		deleteItem(event);
	}
}
button.addEventListener("click", addListAfterClick);
ul.addEventListener("click", strikethrough);
input.addEventListener("keypress", addListAfterKeypress);