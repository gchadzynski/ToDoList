const form = document.querySelector("form");
const todo = document.querySelector(".todo");
const done = document.querySelector(".done");

var tasks = [];
var nowyTask = new Task("Ala","Kota", "2019-01-01");
tasks.push(nowyTask)


var appToDo = new DOMTasks(tasks);
appToDo.createElements();