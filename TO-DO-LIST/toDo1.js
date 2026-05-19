  const tasks = [];

function addToDoTask(){
  const inputEL = document.querySelector(".js-to-do-input");
  let toDoTask = inputEL.value;
  inputEL.value = "";
  tasks.push(toDoTask);
  console.log(tasks);
}