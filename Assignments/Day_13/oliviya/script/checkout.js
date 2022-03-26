document.querySelector("form").addEventListener("submit",checkoutFun);
var checkoutList = JSON.parse(localStorage.getItem("chechout")) || [];
function checkoutFun(){
    event.preventDefault();

    var address = document.querySelector("#address").value;
    var houseNo = document.querySelector("#house").value;
    var phoneNo = document.querySelector("#phone").value;
    var streetName = document.querySelector("#streetname").value;
    var cvv = document.querySelector("#cvv").value;
    var cardNo = document.querySelector("#cardNo").value;

    var checkoutObj = {
        Address: address,
        HouseNo: houseNo,
        PhoneNo: phoneNo,
        StreetName: streetName,
        CVV: cvv,
        CardNo: cardNo,
    }
    checkoutList.push(checkoutObj);
    console.log(checkoutList)
    localStorage.setItem("chechout",JSON.stringify(checkoutList))
}