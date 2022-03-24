document.querySelector("#form").addEventListener("submit",submitForm)

var todoList = JSON.parse(localStorage.getItem("todoData"))|| [];
function submitForm(){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var qty =document.querySelector("#qty").value;
    var priority = document.querySelector("#priority").value;
    // console.log(name,qty,priority)
    var todoObj = {
        todoName : name,
        todoQty : qty,
        todoPrio : priority
    }
    // console.log(todoObj);
    todoList.push(todoObj);
    // console.log(todoList);

    localStorage.setItem("todoData",JSON.stringify(todoList));
}