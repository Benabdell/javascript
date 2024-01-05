const todoList1 = [];

function renderTodoList(){
	let todoHtml = '';

	for (let i = 0; i < todoList1.length; i++){
		const todoObject = todoList1[i];
		// const name = todoObject.name;
		// const dueDate = todoObject.dueDate;
		const {name, dueDate} = todoObject;
		const html = `
				<div>${name}</div>
				<div>${dueDate}</div>
				<button class="delete-button" onclick="
				todoList1.splice(${i}, 1);
				renderTodoList();
				">Delete</button>`;
		todoHtml += html;
	}
	document.querySelector('.picked').innerHTML = todoHtml;
}

function addTodo(){
	 const inputElement = document.querySelector('.js-name');
	const name = inputElement.value;
	const dateElement = document.querySelector('.due-date');
	const dueDate = dateElement.value;
	todoList1.push({
		// name: name,
		// dueDate: dueDate
		name, dueDate
	});
	inputElement.value = '';
	dateElement.value = '';
	console.log(todoList1);
	renderTodoList();
}


function addString(event){
	if (event.key === 'Enter'){
		addTodo();
	}
}