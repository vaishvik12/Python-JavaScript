  const tasks = []; // length 2 index 0 1

function handleDeleteTask(index){
  tasks.splice(index,1);
  renderToDoTask();
}


function addToDoTask(){


  const inputEL = document.querySelector(".js-to-do-input"); // input element get from dom
  const dateEL = document.querySelector(".js-to-do-date");
  let toDoTask = inputEL.value; // store user toDo task from input element with the help of value
  let toDoDate = dateEL.value;


  if(toDoTask.length === 0){
    alert("Task can't be empty");
    return;
  }

  inputEL.value = "";// input element reset to empty, so that we can again add our new task
  tasks.push({
    name : toDoTask,
    date : toDoDate
  }); // push the task to the array that we got from the user.

  renderToDoTask();

}

function renderToDoTask(){
    let taskHtml = ``; // accumlator variable
    for(let i = 0; i < tasks.length;  i++){
   taskHtml += `<p>${tasks[i].name} ${tasks[i].date} 
   <button onClick = "handleDeleteTask(${i});"
   >Delete</button></p>`;
  }

  const toDoDiv = document.querySelector(".js-to-do-div");
  toDoDiv.innerHTML = taskHtml;
}