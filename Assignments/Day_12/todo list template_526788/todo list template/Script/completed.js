var completedList = JSON.parse(localStorage.getItem("completedTodo"));
    console.log(completedList);
completedList.map(function(ele,index){
    var row = document.createElement("tr");

    var cpt1 = document.createElement("td");
        cpt1.innerText = ele.todoName;
//   console.log(cpt1)

    var cpt2 = document.createElement("td");
        cpt2.innerText = ele.todoQty;

    var cpt3 = document.createElement("td");
        cpt3.innerText = ele.todoPrio;
    row.append(cpt1,cpt2,cpt3);
    document.querySelector("#body").append(row);
})
var total = completedList.reduce(function(acc,ele){
    return acc + Number(ele.todoQty)
},0);
console.log(total);