'use strict';

let num = 0;
const todos = [];
const output = document.getElementById('output');
const table = document.getElementById('new-task');
const input = document.getElementById('input');


const allbtn = document.getElementById('allbtn');
const donebtn = document.getElementById('donebtn');
const workbtn = document.getElementById('workbtn');




//関数addTask
const addTask = () => {
  const todonumber = todos.length;
  const todo = {
    todonumber,
    comment: '',
    status: '作業中'
  };
  todo.comment = input.value;
  todos.push(todo);
  input.value = '';
  table.innerHTML = ''
   displayTodos(todos);




};
const changeStatus = (tr, el) => {
  const statusBtn = document.createElement('button');
  statusBtn.textContent = el.status;
    statusBtn.addEventListener('click', () => {
       if (statusBtn.textContent  === '作業中') {
        statusBtn.textContent = '完了'
        el.status = '完了';
      } else {
        statusBtn.textContent = '作業中';
        el.status ='作業中';
      }
    });
    tr.appendChild(statusBtn);
  };


const changeDelete = (tr, list) => {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '削除';
  deleteBtn.addEventListener('click', () => {
   todos.splice(list.textContent, 1);
    displayTodos(todos);
  });
  tr.appendChild(deleteBtn)
};



//関数displayTodos
const displayTodos = (array) => {
  table.innerHTML = ''
   array.forEach(el => {
     table.addEventListener('click',()=>{
       changeBtn()
     })
    const tr = document.createElement('tr');
    const list = document.createElement('td');
    list.textContent = el.todonumber;
    
    const th = document.createElement('td');
    th.textContent = el.comment;
    table.appendChild(tr);
    tr.appendChild(list);
    tr.appendChild(th);
    changeStatus(tr, el);
    changeDelete(tr, list);
  })

};

output.addEventListener('click', ()=>{
addTask();
changeBtn();
});

allbtn.addEventListener('click', ()=>{
  changeBtn();
})

donebtn.addEventListener('click',()=>{
  changeBtn();
})

workbtn.addEventListener('click', ()=>{
  changeBtn();
})

const changeBtn = () =>{
  if(allbtn.checked){
    return displayTodos(todos); 
} else if(donebtn.checked){
  const donetodo = todos.filter((element) =>
  element.status === '完了'
  )
  displayTodos(donetodo);
} else if(workbtn.checked){
  const worktodo = todos.filter((element) => 
     element.status === '作業中'
  )
    displayTodos(worktodo);
}};



