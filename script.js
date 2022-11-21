// This is the array that will hold the todo list items
let todoItems = [];


function addTodo(text) {
    todoItems.push(text)
    // This function will create a new todo object based on the
    // text that was entered in the text input, and push it into
    // the `todoItems` array
    console.log(todoItems);
}

function renderTodo(todo) {
    // Select the first element with a class of `js-todo-list`
    const ulListe = document.getElementsByClassName("todo-list")[0];

    // Create an `li` element and assign it to the`ul`
    const liListe = document.createElement("li");
    // Set the contents of the `li` element created above
    liListe.textContent = todoItems[todoItems.length-1]
    // Append the element to the DOM as the last child of
    // the element referenced by the `list` variable
    ulListe.appendChild(liListe)
    console.log(ulListe);

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
    renderTodo(null)
});