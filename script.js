//Add the tasks

function addTasksFunction() {
	let table = document.getElementById('table');
	let textInput = document.getElementById('textInput');
	let dateInput = document.getElementById('dateInput');
	let idInput = document.getElementById('numbersInput');

	let counter = table.rows.length - 1;
	document.getElementById('total').innerHTML = counter;
	if (textInput.value == '') {
		alert('Please fill task name');
	} else if (dateInput.value === '') {
		alert('Please fill task date');
	} else if (idInput.value === '') {
		alert('Please fill the task ID ');
	} else {
		var row = table.insertRow();
		var cell1 = row.insertCell();
		var cell2 = row.insertCell();
		var cell3 = row.insertCell();
		cell1.innerHTML = textInput.value;
		cell2.innerHTML = dateInput.value;
		cell3.innerHTML = numbersInput.value;
	}
}

//Delete the tasks
function deleteTasksFunction() {
	let table = document.getElementById('table');
	let tableLength = table.rows.length;
	let textDelete = document.getElementById('textDelete').value;
	let taskId = document.getElementById('numbersInput').value;
	if (textDelete !== taskId || textDelete === '') {
		alert('Enter a valid ID');
	} else {
		table.deleteRow(textDelete);
	}
	let counter = table.rows.length - 1;
	document.getElementById('total').innerHTML = counter;
}

//Change fontWeight
let mouseOver = document.getElementById('table');
mouseOver.addEventListener('mouseenter', function (event) {
	event.target.style.fontWeight = 'bold';
});

mouseOver.addEventListener('mouseleave', function (event) {
	event.target.style.fontWeight = 'normal';
});

//Filter

let table = document.getElementById('table');
let enterKey = document.getElementById('taskSearch');

document.getElementById('taskSearch').addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		let searchFor = document.getElementById('taskSearch').value;
		let nrOfRows = table.rows.length;

		for (let i = 1; i < nrOfRows; i++) {
			let currentTaskName = table.rows[i].innerText;
			if (currentTaskName.includes(searchFor)) {
				table.rows[i].style.display = 'block';
			} else {
				table.rows[i].style.display = 'none';
			}
		}
	}
});
