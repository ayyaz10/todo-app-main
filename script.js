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
    todosContainer.children[todosContainer.children.length - 1].children[0].children[0].innerText = num-1;
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
    showActiveTodos(e)
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

function showActiveTodos(e) {
    if(e.target.classList.contains('active')) {
        for(let i = 0; i < getTotalNumOfItems().length - 1; i++) {
            if(e.target.parentElement.classList === 'checked') {
                todosContainer.children.remove();
            }
        }
    }
}




