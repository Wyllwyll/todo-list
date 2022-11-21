// This is the array that will hold the todo list items
let todoItems = [];


function addTodo(text) {

    const newTodo = {
        content: text,
        checked: false,
        id: todoItems.length
    }
    todoItems.push(newTodo)
    // This function will create a new todo object based on the
    // text that was entered in the text input, and push it into
    // the `todoItems` array
    console.log(todoItems);
    renderTodo(newTodo)
}

function renderTodo(todo) {
    // Select the first element with a class of `js-todo-list`
    const ul = document.getElementsByClassName("todo-list")[0];

    // Create an `li` element and assign it to the`ul`
    const li = document.createElement("li");
    li.textContent = todo.content;
    li.setAttribute('id', todo.id);

    let button = document.createElement("button");
    button.classList.add
    button.textContent = 'check'
    button.addEventListener('click', () => {
        const liToDelete = document.getElementById(todo.id);
        ul.removeChild(liToDelete)
    })
    li.appendChild(button)
    ul.appendChild(li)


    // Set the contents of the `li` element created above

    // Append the element to the DOM as the last child of
    // the element referenced by the `list` variable

    console.log(ul);

}


function toggleDone(key) {



    // Locate the todo item in the todoItems array and set its checked
    // property to the opposite. That means, `true` will become `false` and vice
    // versa.

}

// Select the form element
const form = document.getElementById("todo-form");

// Add a submit event listener
form.addEventListener('submit', event => {


    // prevent page refresh on form submission
    event.preventDefault();
    console.log(event);

    // select the text input
    const text = document.getElementById("todo-input");

    // Get the value of the input
    const valueText = text.value
    console.log(valueText);
    // send the value to the addTodo function
    addTodo(valueText)
    //renderTodo(null)
});