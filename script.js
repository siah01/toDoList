var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var delBtn = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(delBtn, li);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delBtn.classList.add("delClass");
	delBtn.innerHTML = "Del";
}

function inputLength() {
	return input.value.length;
}

function doneAfterClick(task) {
	if (task.target.tagName === "LI") {
		task.target.classList.toggle("done");
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		console.log(input.value);
		createListElement();
	}
}

function deleteListItem(element) {
	if (element.target.className === "delClass") {
			element.target.parentElement.remove();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function handleUIClick(element) {
	doneAfterClick(element);
	deleteListItem(element);
}

ul.addEventListener("click", handleUIClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);