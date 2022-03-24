// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
// Points for using form
// 1. wrap every input inside form tag
// 2. instead of taking button, use input type=submit
// 3. Add eventListener to form tag
// 4. event name should be submit
// 5. whenever you use forms, it will try to send data to server, in this process page is getting refreshed -- it is default behaviour
//6. we should prevent that default behaviour - event.preventDefault()

document.querySelector("form").addEventListener("submit",markList)

function markList(){
    event.preventDefault();
     var img = document.createElement("img").src;
    var name = document.querySelector("#name").value;
    var batch = document.querySelector("#batch").value;
    var dsaMark = document.querySelector("#dsa").value;
    var skillathon = document.querySelector("#cs").value;
    var codingMark = document.querySelector("#coding").value;
    console.log(img,name,batch,dsaMark,skillathon,codingMark)

    var row = document.createElement("tr");

     var td1 = document.createElement("td")
    td1.img = img

    var td2 = document.createElement("td")
    td2.innerText = name;

    var td3 = document.createElement("td")
    td3.innerText = batch;

    var td4 = document.createElement("td")
    td4.innerText = dsaMark

    var td5 = document.createElement("td")
    td5.innerText = skillathon

    var td6 = document.createElement("td")
    td6.innerText = codingMark
     
    var td7 = document.createElement("td");
          var dsa = Number(dsaMark);
          var code = Number(codingMark);
           var skill = Number(skillathon);
           var total = dsa+code+skill;
           var givenTotal = 30;
           console.log(total)
           var percent = (total/givenTotal)*100;
           console.log(percent); 

        td7.textContent = percent;   
    var td8 = document.createElement("td")
         if(percent>=50){
             td8.innerText = "Regular";
             td8.style.backgroundColor = "green";
         }
         else{
             td8.innerText = "Async"
             td8.style.backgroundColor = "red"
         }
    row.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(row);
}
