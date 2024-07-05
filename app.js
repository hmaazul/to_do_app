const addTask = document.querySelector('#add-task')
const addBtn = document.querySelector('#add-btn')
const toDoItems = document.querySelector('.to-do-items')
const deleteBtn = document.querySelector('#delete-btn')
const completedTask = document.querySelector('#completed-task')
const totalTask = document.querySelector('#total-task')
showData()

addBtn.addEventListener('click', (e)=>{
    UpdateToDoList(addTask.value)
    addTask.value=""
    
})

toDoItems.addEventListener('click',(e)=>{
    console.log(e);
    // console.log(e.target.classList.toggle('checked'));
    if(e.target.tagName === "LI"){
        // e.target.style.textDecoration = "line-through"
        e.target.childNodes[0].className = "checked"
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function UpdateToDoList(input){
    const list = document.createElement('li')
    list.innerHTML += `<p>${input} </p> <span class="material-symbols-outlined" id="delete-btn">delete</span> `
    toDoItems.appendChild(list)
    saveData()
}

function saveData(){
    localStorage.setItem("data",toDoItems.innerHTML)
}

function showData(){
    toDoItems.innerHTML = localStorage.getItem("data")
}
