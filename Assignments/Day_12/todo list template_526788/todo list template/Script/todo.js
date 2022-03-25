var todoList = JSON.parse(localStorage.getItem("todoData"));

var completed = JSON.parse(localStorage.getItem("completedTodo"))|| [];
todoList.map(function(ele){
    var row = document.createElement("tr");

    var td1 = document.createElement("td")
      td1.innerText = ele.todoName;
    var td2 = document.createElement("td")
      td2.innerText = ele.todoQty;
    var td3 = document.createElement("td")
      td3.innerText = ele.todoPrio;
    var td4 = document.createElement("td")
     var btn = document.createElement("button");
      btn.innerText = "Mark s Completed";
      td4.append(btn);
      btn.addEventListener("click",function(){
          markAsCompleted(ele);
      })
      row.append(td1,td2,td3,td4);
//    console.log(row);
   document.querySelector("#body").append(row);   
})
function markAsCompleted(ele){
    // console.log(ele)
    completed.push(ele);

    localStorage.setItem("completedTodo",JSON.stringify(completed));
}