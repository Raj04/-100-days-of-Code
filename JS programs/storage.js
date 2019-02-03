//
//
// const task = document.getElementById('task').value;
// console.log(task);

document.querySelector('form').addEventListener('submit',function(e){

  const task=document.getElementById('task').value;
  let taskList;

  if(localStorage.getItem('taskList')==null){
    taskList=[];
  }else {
    taskList=JSON.parse(localStorage.getItem('taskList'));
  }
  taskList.push(task);
  localStorage.setItem('taskList',JSON.stringify(taskList));

});
sessionStorage.setItem("taskList",JSON.stringify(["1st","2nd","3rd","4th"]);

/*

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});*/
