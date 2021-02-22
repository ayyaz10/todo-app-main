const todoInput = document.querySelector('#todo_input');
const todosContainer = document.querySelector('.todo_list');
const todoFooter = document.querySelector('.todo_footer_row');

function createTodo(todoText) {
    let num = Math.random() * 30;
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const img = document.createElement('img');
    input.type = 'checkbox';
    input.classList.add('todoCheckbox');
    input.id = num;
    label.setAttribute('for', num);
    label.append(todoText);
    img.src = '/images/icon-cross.svg';
    img.setAttribute('class', 'delete-item');
    img.alt = 'remove';
    div.setAttribute('class', 'todo');
    div.append(input, label, img);
    todosContainer.prepend(div);
}

let num = 0;
function todoIncreaseCounter() {
    todosContainer.children[todosContainer.children.length - 1].children[0].children[0].innerText = num+1;
    num++;
}   
function todoDecreaseCounter() {
        todosContainer.children[todosContainer.children.length - 1].children[0].children[0].innerText = num - 1;
    num--;
}

todoInput.addEventListener('keyup', (e)=> {
    if(e.keyCode === 13 || e.key === "Enter") {
        createTodo(e.target.value);
        todoIncreaseCounter();
    }
})

document.body.addEventListener('click', (e)=> {
    removeTodo(e);
    addCheckClass(e);
    // showActiveTodos(e)
})

function removeTodo(e) {
    if(e.target.classList.contains('delete-item')) {
        e.target.parentElement.remove();
        todoDecreaseCounter();
    }
}

function getTotalNumOfItems(){
    return todosContainer.children;
}

function addCheckClass(e) {
    for(let i = 0; i < getTotalNumOfItems().length-1; i++) {
        if(e.target.classList.contains('todoCheckbox') && todosContainer.children[i].children[0].checked) {
            e.target.parentElement.classList.add('checked');
        } else if (e.target.classList.contains('todoCheckbox') && todosContainer.children[i].classList.contains('checked')) {
            e.target.parentElement.classList.remove('checked');
        }
    }
}

// function showActiveTodos(e) {
//     if(e.target.classList.contains('completed')) {
  
//         for(let i = 0; i < getTotalNumOfItems().length - 1; i++) {
//             if(todosContainer.children[i].classList === 'checked') {
//                 console.log('helo')
//             }
//         }

//     }
// }

function isTrue(i) {
    // return todosContainer.children[i].contains('checked');
}

const completedTasks = document.querySelector('.completed');
const allTasks = document.querySelector('.all');
completedTasks.addEventListener('click', ()=> {
    for(let i = 0; i < getTotalNumOfItems().length; i++) {
        if(todosContainer.children[i].classList.contains('checked')) {
            todosContainer.children[i].style.display = 'none';
            todosContainer.children[i].classList.add('completed');
            todosContainer.children[i].classList.remove('checked');
            todoDecreaseCounter();
        }
    }
})

allTasks.addEventListener('click', ()=> {
    for(let i = 0; i < getTotalNumOfItems().length; i++) {
        if(todosContainer.children[i].classList.contains('completed')) {
            todosContainer.children[i].style.display = 'flex';
            todosContainer.children[i].classList.add('checked');
            todoIncreaseCounter();
        }
    }
})



