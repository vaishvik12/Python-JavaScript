  const tasks = []; // length 2 index 0 1

function addToDoTask(){



  let taskHtml = ``; // accumlator variable
  const inputEL = document.querySelector(".js-to-do-input"); // input element get from dom
  let toDoTask = inputEL.value; // store user toDo task from input element with the help of value

  if(toDoTask.length === 0){
    alert("Task can't be empty");
    return;
  }

  inputEL.value = "";// input element reset to empty, so that we can again add our new task
  tasks.push(toDoTask); // push the task to the array that we got from the user.

  
  
  for(let i = 0; i < tasks.length;  i++){
   taskHtml += `<p>${tasks[i]}</p>`;
  }

  const toDoDiv = document.querySelector(".js-to-do-div");
  toDoDiv.innerHTML = taskHtml;
}