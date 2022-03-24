document.querySelector("form").addEventListener("submit",loginFun);
var signIncred = JSON.parse(localStorage.getItem("signInData"));

function loginFun(){
    event.preventDefault();
    var emailId = document.querySelector("#email").value;
    var passWord = document.querySelector("#pass").value;
    // console.log(emailId,passWord)

    for(var i = 0; i < signIncred.length; i++){
        console.log(signIncred[i])
        if(signIncred[i].userEmail==emailId &&
           signIncred[i].userPass==passWord){
            //    console.log("valid");
            alert("Login Successfully")
            break;
           }
        else{
            // console.log("failed")
            alert("Please enter valid password or EmailId")
            break;
        }   
    }

}