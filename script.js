var myBtn = document.getElementById("myBtn");
// var text = document.getElementById("text").value;
// var date = document.getElementById("date").value;
function createList() {
  var tbl = document.createElement("table");
  document.getElementsByTagName("body").appendChild(tbl);
}
myBtn.addEventListener("click", createList);
