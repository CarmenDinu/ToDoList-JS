//Add the tasks

function addTasksFunction() {
  let table = document.getElementById("table");
  let textInput = document.getElementById("textInput");
  let dateInput = document.getElementById("dateInput");
  let numbersInput = document.getElementById("numbersInput");
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();
  cell1.innerHTML = textInput.value;
  cell2.innerHTML = dateInput.value;
  cell3.innerHTML = numbersInput.value;
  let counter = table.rows.length - 1;
  document.getElementById("total").innerHTML = counter;
}

//Delete the tasks
function deleteTasksFunction() {
  let table = document.getElementById("table");
  let tableLength = table.rows.length - 1;
  let textDelete = document.getElementById("textDelete").value;
  if (textDelete > tableLength) {
    alert("Error! The number of tasks is below " + textDelete);
  } else {
    table.deleteRow(textDelete);
  }
}

//Change fontWeight
let mouseOver = document.getElementById("table");
mouseOver.addEventListener("mouseenter", function (event) {
  event.target.style.fontWeight = "bold";
});

mouseOver.addEventListener("mouseleave", function (event) {
  event.target.style.fontWeight = "normal";
});
