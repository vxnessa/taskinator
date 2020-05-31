  
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

  event.preventDefault();


formEl.addEventListener("submit", createTaskHandler);
}